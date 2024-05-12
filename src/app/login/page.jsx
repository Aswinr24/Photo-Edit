'use client'
import { React, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        setErrors(data.message)
      } else {
        console.log(data)
        const token = data
        console.log(token)
        localStorage.setItem('token', token)
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="bg-violet-200 p-10 h-screen flex items-center justify-center">
      <div className="px-6 pb-10 h-full">
        <img
          src="/smart_ariser_logo.png"
          width={160}
          height={160}
          className="ml-40 pl-2 py-4 mb-4"
        />
        <div className="py-6 px-8 rounded-xl text-black  bg-purple-400">
          <h2 className="text-2xl py-4 px-24 font-semibold">
            Sign in to your account
          </h2>
          {errors && <p className="text-red-700 text-xl"> {errors}</p>}
          <h2 className="text-lg py-1">Phone no</h2>
          <input
            type="text"
            id="phno"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="bg-violet-200 border my-2 border-gray-300 focus:border-purple-600 text-black  placeholder:text-purple-500 text-md rounded-xl block w-full ps-4 p-2.5"
            placeholder="+91"
            required
          />
          <div class="flex items-center justify-between mt-1">
            <h2 className="text-lg py-1">Password:</h2>
            <div class="text-sm">
              <a href="#" class="mt-2 text-stone-200 hover:text-black">
                Forgot password?
              </a>
            </div>
          </div>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-violet-200 text-black border placeholder:text-2xl my-2  border-gray-300 focus:border-purple-600 placeholder:text-purple-500 text-xl rounded-xl block w-full ps-4 p-2"
            placeholder="......"
            required
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-purple-900 my-2 mt-5 rounded-xl w-full py-1.5 text-xl text-gray-200 hover:bg-purple-800"
          >
            Login
          </button>
          <h3 className="text-sm py-2 px-3 pb-4 text-gray-100">
            Don&apos;t have an account?{' '}
            <a
              href="#"
              class="text-md font-medium text-gray-800 hover:text-black"
            >
              Register here
            </a>{' '}
          </h3>
        </div>
      </div>
    </main>
  )
}

export default page
