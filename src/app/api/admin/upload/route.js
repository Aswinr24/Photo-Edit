import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { createReadStream, unlink } from 'fs'
import { join } from 'path'
import path from 'path'
import { writeFile } from 'fs/promises'

const SupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const ServiceRoleKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY

const supabase = createClient(SupabaseUrl, ServiceRoleKey)

export async function POST(req, res) {
  const formData = await req.formData()
  const file = formData.get('file')
  const category = formData.get('category')
  const type = formData.get('type')
  const date2 = formData.get('date')
  const date = date2 === 'null' || date2 === '' ? null : date2
  if (!file) {
    return NextResponse.json({ message: 'No image uploaded' }, { status: 400 })
  }
  const tempFilePath = join(process.cwd(), `public/${file.name}`)
  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  await writeFile(tempFilePath, buffer)
  const fileStream = createReadStream(tempFilePath)
  const filePath = `public/${file.name}`

  try {
    const { error: storageError } = await supabase.storage
      .from('Images')
      .upload(filePath, fileStream, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.type,
        duplex: 'half',
      })

    unlink(tempFilePath, (err) => {
      if (err) console.error('Failed to delete temporary file:', err)
    })

    if (storageError) {
      throw storageError
    }

    const { data } = supabase.storage.from('Images').getPublicUrl(filePath)

    const imageUrl = data.publicUrl

    const { error: insertError } = await supabase
      .from('Listings')
      .insert([{ Image: imageUrl, Category: category, type: type, date: date }])

    if (insertError) {
      throw insertError
    }

    return NextResponse.json(
      {
        message: 'Image uploaded and saved successfully',
        imageUrl: data.publicUrl,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error uploading image:', error)
    return NextResponse.json(
      { message: 'Failed to upload image' },
      { status: 500 }
    )
  }
}
