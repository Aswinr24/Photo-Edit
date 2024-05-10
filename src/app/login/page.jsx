'use client'
import React from 'react'
import Image from 'next/image'

const page = () => {
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
          <h2 className="text-lg py-1">Your email</h2>
          <input
            type="text"
            id="email"
            className="bg-violet-200 border my-2 border-gray-300 focus:border-purple-600 text-black  placeholder:text-purple-500 text-md rounded-xl block w-full ps-4 p-2.5"
            placeholder="e-mail"
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
            type="text"
            id="password"
            className="bg-violet-200 text-black border placeholder:text-2xl my-2 border-gray-300 focus:border-purple-600 placeholder:text-purple-500 text-md rounded-xl block w-full ps-4 p-2.5"
            placeholder="......"
            required
          />
          <button className="bg-purple-900 my-2 mt-5 rounded-xl w-full py-1.5 text-xl text-gray-200 hover:bg-purple-800">
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
