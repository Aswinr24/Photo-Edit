import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <main className="pt-4 bg-purple-200">
      <div className="flex justify-between px-20">
        <img src="/smart_ariser_logo2.png" className="w-32 h-28 ml-24 my-2" />
        <div className="grid grid-cols-3 gap-16 mt-2 mx-10 pr-20">
          <div>
            <h2 className="mb-4 font-semibold text-black uppercase">Legal</h2>
            <ul className="text-gray-700 font-medium">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  License
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-black font-semibold">FOLLOW US</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2 mt-2">
                <a href="#" className="text-blue-500 flex">
                  Facebook
                  <BsFacebook className="w-5 h-5 ml-1" />
                </a>
              </li>
              <li className=" mb-2">
                <a href="#" className="text-pink-500 flex">
                  Instagram
                  <FaInstagram className="w-5 h-5 ml-1" />
                </a>
              </li>
              <li className="text-center ml-1">
                <a href="#" className="text-blue-500 flex">
                  LinkedIn
                  <FaLinkedin className="w-5 h-5 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-semibold text-black uppercase">Company</h2>
            <ul className="text-gray-700 font-medium">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-3 mx-40 border-gray-700" />
      <span className="block text-center pb-2 text-sm text-gray-700">
        © 2024{' '}
        <a href="https://smartariser.in/" className="hover:underline">
          SmartAriser™
        </a>
        . All Rights Reserved.
      </span>
    </main>
  )
}

export default Footer
