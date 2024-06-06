import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const SupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const Apikey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(SupabaseUrl, Apikey)

export async function POST(req, res) {
  const { imagePath } = await req.json()

  if (!imagePath) {
    return NextResponse.json(
      { message: 'Image path is required' },
      { status: 400 }
    )
  }

  try {
    const { error } = await supabase
      .from('Listings')
      .delete()
      .eq('Image', imagePath)

    if (error) {
      throw error
    }

    const fileName = imagePath.split('/').pop()
    let imageNotFoundInStorage = false

    try {
      const { error: storageError } = await supabase.storage
        .from('Images')
        .remove([fileName])

      if (storageError) {
        if (storageError.statusCode === 404) {
          imageNotFoundInStorage = true
        } else {
          throw storageError
        }
      }
    } catch (storageError) {
      console.error('Error deleting image from storage:', storageError)
    }

    if (imageNotFoundInStorage) {
      return NextResponse.json(
        {
          message: 'Record deleted, but image not found in storage to delete',
        },
        {
          status: 200,
        }
      )
    }

    return NextResponse.json(
      { message: 'Image deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting image:', error)
    return NextResponse.json(
      { message: 'Failed to delete image' },
      { status: 500 }
    )
  }
}
