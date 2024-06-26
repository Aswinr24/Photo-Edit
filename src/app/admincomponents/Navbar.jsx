'use client'
import { React, useState, useEffect } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaCircleUser } from 'react-icons/fa6'
import { GoHome } from 'react-icons/go'
import { MdOutlineDashboard } from 'react-icons/md'
import { MdContactSupport } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import { jwtDecode } from 'jwt-decode'
import Image from 'next/image'

const Navbar = () => {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
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
    }
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleLogoClick = () => {
    router.push('/admin')
  }

  const handleProfileClick = () => {
    // router.push('/profile')
  }

  const handleDashboardClick = () => {
    // router.push('/dashboard')
  }

  return (
    <nav className="bg-yellow-200 py-4 px-8 text-black shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2">
            <img
              src="/smart_ariser_logo.png"
              className="w-[120px] h-[70px] cursor-pointer"
              onClick={handleLogoClick}
            />
          </div>
          <div className="hidden justify-center text-lg items-center pl-60 ml-32 md:flex lg:flex space-x-28">
            <a
              href="javascript:void(0);"
              className="hover:text-gray-700 flex"
              onClick={handleLogoClick}
            >
              <GoHome className="w-6 h-6 mr-1" />
              Home
            </a>
            <a
              href="javascript:void(0);"
              className="hover:text-gray-700 flex"
              onClick={handleDashboardClick}
            >
              <MdOutlineDashboard className="w-6 h-6 mr-1" />
              Dashboard
            </a>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative">
            <button onClick={toggleDropdown} className="focus:outline-none">
              <FaCircleUser className="w-9 h-9 mt-1 filter grayscale text-gray-500" />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-56 text-center bg-amber-100 border rounded-md shadow-lg z-10">
                <div className="px-4 py-2">
                  <p className="text-gray-800 font-bold">
                    {user ? user.name : 'Someone'}
                  </p>
                  <p className="text-sm text-gray-700">
                    {user ? user.email : 'sm@example.com'}
                  </p>
                </div>
                <hr className="border-gray-300" />
                <a
                  href="javascript:void(0);"
                  className="block px-4 py-2 text-gray-800 hover:bg-yellow-200"
                  onClick={handleProfileClick}
                >
                  Profile
                </a>
                <a
                  href="javascript:void(0);"
                  className="block px-4 py-2 text-gray-800 hover:bg-yellow-200"
                  onClick={handleDashboardClick}
                >
                  Dashboard
                </a>
                <a
                  href="/login"
                  className="block px-4 py-2 text-gray-800 hover:bg-yellow-200"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
