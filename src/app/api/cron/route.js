import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const SupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const ServiceRoleKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY
const supabase = createClient(SupabaseUrl, ServiceRoleKey)

export async function GET() {
  try {
    const today = new Date().toISOString().split('T')[0]
    const { error } = await supabase.from('Listings').delete().lt('date', today)
    if (error) {
      console.error('Error deleting expired listings:', error)
    } else {
      console.log('Expired listings deleted successfully')
    }
  } catch (error) {
    console.error('Unexpected error:', error)
  }
  return NextResponse.json({ success: true })
}
