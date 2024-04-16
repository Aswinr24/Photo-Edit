'use client'
import Link from 'next/link'
import Image from 'next/image'
import userlogo from '../user.png'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-purple-200 py-4 px-8 text-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-4">
            <h1 className="text-2xl">LOGO</h1>
          </div>
          <div className="hidden justify-center items-center px-60 ml-40 md:flex lg:flex space-x-28">
            <a href="#" className="hover:text-gray-700">
              Dashboard
            </a>
            <a href="#" className="hover:text-gray-700">
              Selections
            </a>
            <a href="#" className="hover:text-gray-700">
              Contact
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <button onClick={toggleDropdown} className="focus:outline-none">
              <Image
                src={userlogo}
                alt="user"
                className="w-8 h-8 filter grayscale"
              />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 text-center bg-purple-100 border rounded-md shadow-lg z-10">
                <div className="px-4 py-2">
                  <p className="text-gray-800 font-bold">Someone</p>
                  <p className="text-sm text-gray-600">sm@example.com</p>
                </div>
                <hr className="border-gray-300" />
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
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
