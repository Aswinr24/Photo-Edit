import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const SupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const Apikey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(SupabaseUrl, Apikey)

export async function GET(request) {
  if (request.method === 'GET') {
    try {
      const { data, error } = await supabase.from('Listings').select('*')

      if (error) {
        throw error
      }
      return NextResponse.json(data)
    } catch (error) {
      return NextResponse.error({
        statusCode: 500,
        message: 'Failed to fetch data from Supabase',
      })
    }
  } else {
    return NextResponse.error({
      statusCode: 405,
      message: 'Method not allowed',
    })
  }
}
