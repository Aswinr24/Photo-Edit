import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(req) {
  const { useremail } = await req.json()
  try {
    const { data, error } = await supabase
      .from('User Images')
      .select('images')
      .eq('email', useremail)
      .eq('image_type', 'saved')

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    console.log({ savedImages: data })
    return NextResponse.json({ savedImages: data }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
