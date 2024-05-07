import React from 'react'

const page = () => {
  return (
    <main className="bg-purple-200 h-screen relative">
      <div className="">
        <img
          src="/banner.png"
          className="w-screen h-[500px] rounded-md filter contrast-50 blur-xs"
        />
      </div>
      <div className="absolute top-20 left-[400px]">
        <div className="flex justify-center items-center">
          <h2 className="text-4xl font-bold text-white">CONTACT US</h2>
        </div>
        <div className="px-10 mt-10 my-6 bg-violet-400 rounded-lg">
          <div className="pt-6 py-2">
            <h2 className="text-xl py-1">Your email:</h2>
            <input
              type="text"
              id="email"
              className="bg-violet-200 border my-2 border-gray-300 focus:border-purple-600 text-black  placeholder:text-purple-500 text-md rounded-xl block w-[700px] ps-4 p-2.5"
              placeholder="e-mail"
              required
            />
          </div>
          <div className="py-2">
            <h2 className="text-xl py-1">Subject</h2>
            <input
              type="text"
              id="email"
              className="bg-violet-200 border my-2 border-gray-300 focus:border-purple-600 text-black  placeholder:text-purple-500 text-md rounded-xl block w-full ps-4 p-2.5"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="py-1">
            <h2 className="text-xl py-1">Your Message:</h2>
            <textarea
              type="text"
              id="email"
              className="bg-violet-200 border my-2 border-gray-300 focus:border-purple-600 text-black  placeholder:text-purple-500 text-md rounded-xl block w-full ps-4 p-2.5"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="pb-6">
            <button className="bg-violet-700 my-2 mt-5 rounded-xl w-40 py-2 text-md text-gray-200 hover:bg-purple-800">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
