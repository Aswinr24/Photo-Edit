'use client'
import { React, useState } from 'react'
import diwali from './../../../public/diwali.png'
import Image from 'next/image'
import Frame1 from './../../../public/frames/frame1.png'
import Frame2 from './../../../public/frames/frame2.png'
import Frame3 from './../../../public/frames/frame3.png'
import Frame4 from './../../../public/frames/Frame4.png'
import { FaPhone } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { CiGlobe } from 'react-icons/ci'
import { FaLocationDot } from 'react-icons/fa6'

const Imagedisp = () => {
  const [nameVisible, setNameVisible] = useState(true)
  const [logoVisible, setLogoVisible] = useState(true)
  const [locationVisible, setLocationVisible] = useState(true)
  const [phoneVisible, setPhoneVisible] = useState(true)
  const [emailVisible, setEmailVisible] = useState(true)
  const [websiteVisible, setWebsiteVisible] = useState(true)
  const Frames = [Frame1, Frame2, Frame3, Frame4]

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
    <main>
      <div className="py-10 mt-10 flex items-center justify-center">
        {nameVisible && (
          <div className="absolute top-44 right-96 mr-10">
            <p className="text-black text-xl font-bold">Next Associates</p>
          </div>
        )}
        <Image
          src={diwali}
          alt="diwali"
          className="h-1/2 w-1/2 border-purple-300 border-2 p-4 rounded-lg"
        />
        <Image
          src={Frame2}
          alt="frame1"
          className="absolute bottom-48 mb-3 pb-0.5 ml-24 h-7 w-[580px]"
        />
        <div className="absolute bottom-52 ml-28  rounded-2xl flex px-4">
          {phoneVisible && (
            <p className="text-black text-md font-bold flex pr-4">
              <FaPhone className="h-4 w-4 mx-1 pt-1 mt-0.5" />
              9354721223
            </p>
          )}
          {emailVisible && (
            <p className="text-black text-sm font-bold flex pr-4 pt-0.5">
              <MdEmail className="h-4 w-4 mx-1 mt-0.5 my-1" />
              nextgenassociates@gmail.com
            </p>
          )}
          {websiteVisible && (
            <p className="text-black text-sm font-bold flex pr-4 pt-0.5">
              <CiGlobe className="h-4 w-4 mx-1 mt-0.5 my-1" />
              nextassociates.xyz
            </p>
          )}
        </div>
        {locationVisible && (
          <div className="absolute bottom-40 ml-20 mb-6 pb-1 text-xs text-gray-200">
            <p className="flex">
              <FaLocationDot className="h-4 w-4 mx-1 text-gray-300" />
              Indiranagar, Bengaluru
            </p>
          </div>
        )}
      </div>
      <div className="flex gap-4 items-center justify-center">
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
      <div className="flex gap-4 items-center justify-center py-10 ">
        {[Frame1, Frame2, Frame3, Frame4].map((frame, index) => (
          <button key={index} onClick={() => toggleFrame(frame)}>
            <Image src={diwali} alt="diwali" className="w-40 h-20" />
            <Image
              src={frame}
              alt={`frame-${index + 1}`}
              className=" absolute -bottom-6 ml-4 h-3 w-36 cursor-pointer"
            />
          </button>
        ))}
      </div>
    </main>
  )
}

export default Imagedisp
