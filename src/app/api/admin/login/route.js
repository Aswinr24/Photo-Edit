import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

const jwt_secret = process.env.JWT_SECRET

export async function POST(request) {
  if (request.method !== 'POST') {
    return new NextResponse.json({ status: 405 })
  }

  const { name, password } = await request.json()

  try {
    const { data: user, error } = await supabase
      .from('Admins')
      .select('*')
      .eq('name', name)
      .single()

    if (error || !user) {
      return NextResponse.json(
        {
          message: 'Invalid Phone Number',
        },
        {
          status: 401,
        }
      )
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          message: 'Invalid Password',
        },
        {
          status: 401,
        }
      )
    }

    const token = jwt.sign(
      {
        email: user.email,
        name: user.name,
      },
      jwt_secret,
      {
        expiresIn: '1h',
      }
    )
    return NextResponse.json({ token }, { status: 200 })
  } catch (error) {
    console.error('Login error:', error.message)
    return new NextResponse.json({
      status: 500,
      message: 'Login error',
    })
  }
}
