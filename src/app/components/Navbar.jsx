'use client'
import Link from 'next/link'
import Image from 'next/image'
import userlogo from '../user.png'
import { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaCircleUser } from 'react-icons/fa6'
import { GoHome } from 'react-icons/go'
import { MdOutlineDashboard } from 'react-icons/md'
import { MdContactSupport } from 'react-icons/md'

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
            <img src="/smart_ariser.png" className="w-22 h-10" />
          </div>
          <div className="hidden justify-center text-lg items-center px-40 ml-48 md:flex lg:flex space-x-28">
            <a href="#" className="hover:text-gray-700 flex">
              <GoHome className="w-6 h-6 mr-1" />
              Home
            </a>
            <a href="#" className="hover:text-gray-700 flex">
              <MdOutlineDashboard className="w-6 h-6 mr-1" />
              Dashboard
            </a>
            <a href="#" className="hover:text-gray-700 flex">
              <MdContactSupport className="w-6 h-6 mr-1" />
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-gray-700">
            <CiHeart className="w-8 h-8 text-gray-600" />
          </a>
          <div className="relative">
            <button onClick={toggleDropdown} className="focus:outline-none">
              <FaCircleUser className="w-9 h-9 mt-1 filter grayscale text-gray-500" />
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
                  Dashboard
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
