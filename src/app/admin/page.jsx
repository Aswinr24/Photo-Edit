'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { jwtDecode } from 'jwt-decode'
import Navbar from '../admincomponents/Navbar'
import Listings from '../admincomponents/Listings'
import Footer from '../admincomponents/Footer'

export default function Page() {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      try {
        const decodedToken = jwtDecode(token)
        setUser({
          name: decodedToken.name,
          email: decodedToken.email,
        })
      } catch (error) {
        console.error('Invalid token:', error)
      }
    } else {
      router.replace(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/admin`)
    }
  }, [])

  return (
    <main className="bg-amber-100">
      <Navbar />
      <Listings />
      <Footer />
    </main>
  )
}
