'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { jwtDecode } from 'jwt-decode'
import Navbar from './navbar'

const page = () => {
  //   const router = useRouter()

  //   const isAuthenticated = () => {
  //     const token = localStorage.getItem('token')
  //     if (!token) return false

  //     try {
  //       const decoded = jwtDecode(token)
  //       return !!decoded
  //     } catch (error) {
  //       return false
  //     }
  //   }

  //   useEffect(() => {
  //     if (!isAuthenticated()) {
  //       router.replace('/admin/login')
  //     }
  //   }, [router])

  //   if (!isAuthenticated()) {
  //     return null
  //   }
  return (
    <>
      <Navbar />
    </>
  )
}

export default page
