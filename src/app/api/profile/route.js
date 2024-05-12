import jwt from 'jsonwebtoken'
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const jwt_secret = process.env.JWT_SECRET

export async function POST(request) {
  if (request.method !== 'POST') {
    return NextResponse.json({ status: 405 })
  }

  const { token } = await request.json()

  try {
    const decodedToken = jwt.verify(token, jwt_secret)
    const email = decodedToken.email

    const { data: user, error } = await supabase
      .from('Users')
      .select('*')
      .eq('email', email)
      .single()

    if (error || !user) {
      return new NextResponse.json(
        {
          status: 401,
        },
        {
          message: 'User not found',
        }
      )
    }
    return NextResponse.json({
      status: 200,
      user: {
        username: user.username,
        email: user.email,
        phonenumber: user.phonenumber,
        business: user.business,
      },
    })
  } catch (error) {
    console.error('Error decoding JWT token or fetching user details:', error)
    return new NextResponse.json({
      status: 500,
      message: 'Internal server error',
    })
  }
}
