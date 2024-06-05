'use client'
import { React, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  const apiUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/login`

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, password }),
      })
      console.log(apiUrl)
      const data = await response.json()

      if (!response.ok) {
        setErrors(data.message)
      } else {
        console.log(data)
        const token = data
        console.log(token)
        localStorage.setItem('token', token)
        router.push(process.env.NEXT_PUBLIC_WEBSITE_URL)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="bg-fuchsia-200 p-10 h-screen flex items-center justify-center">
      <div className="px-6 pb-10 h-full">
        <img
          src="/smart_ariser_logo.png"
          width={160}
          height={160}
          className="ml-32 pl-2 py-4 mb-4"
        />
        <div className="py-6 px-8 pb-8 rounded-xl text-black  bg-fuchsia-400">
          <h2 className="text-2xl py-4 px-28 font-semibold">Admin Sign In </h2>
          {errors && <p className="text-red-700 text-xl"> {errors}</p>}
          <h2 className="text-lg py-1">Phone no</h2>
          <input
            type="text"
            id="phno"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="bg-violet-200 border my-2 border-gray-300 focus:border-fuchsia-600 text-black  placeholder:text-fuchsia-500 text-md rounded-xl block w-full ps-4 p-2.5"
            placeholder="+91"
            required
          />
          <div class="flex items-center justify-between mt-1">
            <h2 className="text-lg py-1">Password:</h2>
            <div class="text-sm">
              <a href="#" class="mt-2 text-pink-900 hover:text-black">
                Forgot password?
              </a>
            </div>
          </div>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-violet-200 text-black border placeholder:text-2xl my-2  border-gray-300 focus:border-fuchsia-600 placeholder:text-fuchsia-500 text-xl rounded-xl block w-full ps-4 p-2"
            placeholder="......"
            required
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-fuchsia-700 my-2 mt-5 rounded-xl w-full py-1.5 text-xl text-gray-200 hover:bg-fuchsia-800"
          >
            Login
          </button>
        </div>
      </div>
    </main>
  )
}
