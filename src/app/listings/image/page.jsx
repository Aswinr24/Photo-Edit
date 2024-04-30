'use client'
import { React, useState } from 'react'
import Image from 'next/image'
import { FaPhone } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { CiGlobe } from 'react-icons/ci'
import { FaLocationDot } from 'react-icons/fa6'
import Navbar from '@/app/components/Navbar'
import { FaDownload } from 'react-icons/fa'

const page = () => {
  const [nameVisible, setNameVisible] = useState(true)
  const [logoVisible, setLogoVisible] = useState(true)
  const [locationVisible, setLocationVisible] = useState(true)
  const [phoneVisible, setPhoneVisible] = useState(true)
  const [emailVisible, setEmailVisible] = useState(true)
  const [websiteVisible, setWebsiteVisible] = useState(true)
  const Frames = [
    '/frames/frame1.png',
    '/frames/frame2.png',
    '/frames/frame3.png',
    '/frames/frame4.png',
  ]

  const toggleVisibility = (component) => {
    switch (component) {
      case 'name':
        setNameVisible(!nameVisible)
        break
      case 'logo':
        setLogoVisible(!logoVisible)
        break
      case 'location':
        setLocationVisible(!locationVisible)
        break
      case 'phone':
        setPhoneVisible(!phoneVisible)
        break
      case 'email':
        setEmailVisible(!emailVisible)
        break
      case 'website':
        setWebsiteVisible(!websiteVisible)
        break
      default:
        break
    }
  }

  const getButtonClass = (component) => {
    return `bg-purple-400 px-2 py-2 text-black rounded-xl ${
      component ? '' : 'bg-gray-400'
    }`
  }

  return (
    <main className="bg-gray-200">
      <Navbar />
      <main className="bg-gray-200 relative">
        <div className="py-10 mt-10 flex items-center justify-center">
          {nameVisible && (
            <div className="absolute top-12 mt-6">
              <p className="text-black text-xl font-bold">Next Associates</p>
            </div>
          )}
          <Image
            src="/heritageDay.jpg"
            alt="diwali"
            className=" border-purple-300 border-2 p-4 rounded-lg"
            width={500}
            height={400}
          />
          <Image
            src="/frames/frame2.png"
            alt="frame1"
            className="absolute bottom-48 mb-3 pb-0.5 h-9 w-[440px] rounded-lg"
            width={80}
            height={100}
          />
          <div className="absolute bottom-52 mb-1 ml-4  rounded-2xl flex px-4">
            {phoneVisible && (
              <p className="text-black text-sm font-bold flex pr-2">
                <FaPhone className="h-4 w-4 mx-1 pt-1 " />
                9354721223
              </p>
            )}
            {emailVisible && (
              <p className="text-black text-xs font-bold flex pr-2 pt-0.5">
                <MdEmail className="h-4 w-4 mx-0.5" />
                nextgenassociates@gmail.com
              </p>
            )}
            {websiteVisible && (
              <p className="text-black text-xs font-bold flex pr-3 pt-0.5">
                <CiGlobe className="h-4 w-4 mx-0.5" />
                nextassociates.xyz
              </p>
            )}
          </div>
          {locationVisible && (
            <div className="absolute bottom-40 mb-5 pb-1 text-xs text-black">
              <p className="flex">
                <FaLocationDot className="h-4 w-4 mx-1 text-black" />
                Indiranagar, Bengaluru
              </p>
            </div>
          )}
        </div>
        <div className="flex gap-4 items-center justify-center pb-4">
          <button onClick={() => toggleVisibility('name')}>
            <div
              className={` px-2 py-2 text-black rounded-xl ${
                nameVisible ? 'bg-purple-400' : 'bg-gray-400'
              }`}
            >
              <p className="px-2">Name</p>
            </div>
          </button>
          <button onClick={() => toggleVisibility('logo')}>
            <div
              className={`px-2 bg-purple-400  py-2 text-black rounded-xl ${
                logoVisible ? '' : 'bg-gray-400'
              }`}
            >
              <p className="px-2">Logo</p>
            </div>
          </button>
          <button onClick={() => toggleVisibility('location')}>
            <div
              className={` px-2 py-2 text-black rounded-xl ${
                locationVisible ? 'bg-purple-400 ' : 'bg-gray-400'
              }`}
            >
              <p className="px-2 flex">
                <FaLocationDot className="h-5 w-5 mr-2" /> Location
              </p>
            </div>
          </button>
          <button onClick={() => toggleVisibility('phone')}>
            <div
              className={` px-2 py-2 text-black rounded-xl ${
                phoneVisible ? 'bg-purple-400' : 'bg-gray-400'
              }`}
            >
              <p className="px-2 flex">
                <FaPhone className="h-5 w-5 mr-2 mt-0.5" /> Phone no.
              </p>
            </div>
          </button>
          <button onClick={() => toggleVisibility('email')}>
            <div
              className={` px-2 py-2 text-black rounded-xl ${
                emailVisible ? 'bg-purple-400' : 'bg-gray-400'
              }`}
            >
              <p className="px-2 flex">
                <MdEmail className="h-5 w-5 mr-2 mt-0.5" /> e-mail
              </p>
            </div>
          </button>
          <button onClick={() => toggleVisibility('website')}>
            <div
              className={` px-2 py-2 text-black rounded-xl ${
                websiteVisible ? 'bg-purple-400' : 'bg-gray-300'
              }`}
            >
              <p className="px-2 flex">
                <CiGlobe className="h-5 w-5 mr-2 mt-0.5" /> Website
              </p>
            </div>
          </button>
        </div>
        <div className="py-4 text-3xl text-purple-500 flex justify-center items-center cursor-pointer">
          <FaDownload className="w-6 h-6 mx-2" /> Download
        </div>
      </main>
    </main>
  )
}

export default page
