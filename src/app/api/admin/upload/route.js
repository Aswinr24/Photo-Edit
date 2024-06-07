import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { createReadStream } from 'fs'
import { join } from 'path'

const SupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const Apikey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(SupabaseUrl, Apikey)

export async function POST(req, res) {
  console.log(req)
  const file = req.files.file
  const category = req.body.category
  console.log(category)
  if (!file) {
    return NextResponse.json({ message: 'No image uploaded' }, { status: 400 })
  }

  try {
    const fileStream = createReadStream(file.path)
    const fileName = `${Date.now()}_${file.name}`
    const filePath = `images/${fileName}`

    const { error: storageError, data: storageData } = await supabase.storage
      .from('Images')
      .upload(filePath, fileStream)

    if (storageError) {
      throw storageError
    }
    const imageUrl = `${SupabaseUrl}/storage/v1/object/public/your_bucket_name/${fileName}`
    const { data: savedData, error: dbError } = await supabase
      .from('your_table_name')
      .insert([{ imageUrl: imageUrl, category: category }])

    if (dbError) {
      throw dbError
    }

    return NextResponse.json(
      { message: 'Image uploaded and saved successfully', imageUrl: imageUrl },
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
