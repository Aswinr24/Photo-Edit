import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(req) {
  try {
    const { useremail, imagePath, imageType } = await req.json()

    const { data: existingData, error: existingError } = await supabase
      .from('User Images')
      .select('images')
      .eq('email', useremail)
      .eq('images', imagePath)

    if (existingError) {
      return NextResponse.json(
        { error: existingError.message },
        { status: 500 }
      )
    }

    if (existingData && existingData.length > 0) {
      return NextResponse.json(
        { message: 'Image URL already exists' },
        { status: 200 }
      )
    }

    const { data, error } = await supabase
      .from('User Images')
      .insert([{ email: useremail, images: imagePath, image_type: imageType }])

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}

export async function handler(req) {
  if (req.method === 'POST') {
    return POST(req)
  }
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
