'use client'
import { React, useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { FaCircleUser } from 'react-icons/fa6'
import { MdEdit } from 'react-icons/md'

const page = () => {
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token)

    if (token) {
      try {
        fetchUserData(token)
      } catch (error) {
        console.log('hello')
        console.error('Error fetching user data:', error)
      }
    }
  }, [])

  const fetchUserData = async (token) => {
    await fetch('/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserDetails(data.user)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error)
      })
  }

  return (
    <>
      <Navbar />
      <main className="bg-purple-50 p-10">
        <div className="flex items-center justify-center">
          <FaCircleUser className="w-36 h-36 rounded-full p-2 text-gray-300 ring-2 ring-purple-400" />
          <div className="w-36 h-36 group hover:bg-purple-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
            <img
              className="hidden group-hover:block w-12 text-purple-300"
              src="https://www.svgrepo.com/show/33565/upload.svg"
              alt=""
            />
          </div>
        </div>
        <div className="px-60 py-10">
          <div className="py-2 w-full">
            <label
              for="website-admin"
              className="block mb-2 text-md font-medium text-black"
            >
              Username
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-md bg-gray-50 text-black border rounded-e-0 border-e-0 rounded-e-0 rounded-s-xl">
                <svg
                  className="w-4 h-4 text-purple-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <div className="flex gap-2 w-full">
                <input
                  type="text"
                  id="website-admin"
                  className="bg-gray-50 border border-gray-300 focus:border-purple-600 text-purple-400 placeholder:text-purple-500 text-md rounded-none rounded-e-xl block w-full ps-4 p-2.5"
                  placeholder="Username"
                  disabled
                  value={userDetails?.username}
                />
                <MdEdit className="w-7 h-7 mt-2 text-purple-400 cursor-pointer hover:text-gray-500" />
              </div>
            </div>
          </div>

          <div className="mt-2">
            <label
              for="input-group-1"
              className="block mb-2 text-md font-medium text-black"
            >
              Your e-mail:
            </label>
            <div className="relative mb-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-purple-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 focus:border-purple-600 text-purple-400 placeholder:text-purple-500 text-md rounded-xl block w-full ps-10 p-2.5"
                  placeholder="email"
                  value={userDetails?.email}
                  disabled
                />
                <MdEdit className="w-7 h-7 mt-2 text-purple-400 cursor-pointer hover:text-gray-500" />
              </div>
            </div>
          </div>

          <div className="mb-2">
            <label
              for="phone-input"
              className="block mb-2 text-md font-medium text-black"
            >
              Phone number:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-purple-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 19 18"
                >
                  <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                </svg>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="phone-input"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 focus:border-purple-600 text-purple-400 placeholder:text-purple-500 text-md rounded-xl block w-full ps-10 p-2.5"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="+91"
                  value={userDetails?.phonenumber}
                  disabled
                />
                <MdEdit className="w-7 h-7 mt-2 text-purple-400 cursor-pointer hover:text-gray-500" />
              </div>
            </div>
          </div>

          <div className="py-2">
            <label
              for="password"
              className="block mb-2 text-md font-medium text-black"
            >
              Password
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                id="password"
                className="bg-gray-50 border border-gray-300 focus:border-purple-600 text-purple-400 placeholder:text-purple-800 text-lg rounded-xl block w-full ps-4 p-2.5"
                placeholder="•••••••••"
                disabled
              />
              <MdEdit className="w-7 h-7 mt-2 text-purple-400 cursor-pointer hover:text-gray-500" />
            </div>
          </div>

          <div className="py-2">
            <div>
              <label
                for="company"
                className="block mb-2 text-md font-medium text-black"
              >
                Business
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="company"
                  className="bg-gray-50 border border-gray-300 focus:border-purple-600 text-purple-400 placeholder:text-purple-500 text-md rounded-xl block w-full ps-4 p-2.5"
                  placeholder="Your Business"
                  value={userDetails?.business}
                  disabled
                />
                <MdEdit className="w-7 h-7 mt-2 text-purple-400 cursor-pointer hover:text-gray-500" />
              </div>
              <div className="py-3">
                <button className="rounded-2xl p-2 text-sm border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition delay-100">
                  Add Bussiness +
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default page
