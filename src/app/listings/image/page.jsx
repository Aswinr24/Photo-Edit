'use client'
import { React, useState, useRef } from 'react'
import Image from 'next/image'
import { FaPhone } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { CiGlobe } from 'react-icons/ci'
import { FaLocationDot } from 'react-icons/fa6'
import Navbar from '@/app/components/Navbar'
import { FaDownload } from 'react-icons/fa'
import { MdArrowCircleRight } from 'react-icons/md'
import { MdArrowCircleLeft } from 'react-icons/md'
import styles from '../../styles.css'
import { useParams } from 'next/navigation'
import DraggableLogo from '@/app/components/DraggableLogo'
import Draggable from 'react-draggable'
import htmlToImage from 'html-to-image'
import { toPng } from 'html-to-image'

const page = () => {
  const pathname = useParams()

  console.log(pathname)

  const [nameVisible, setNameVisible] = useState(true)
  const [logoVisible, setLogoVisible] = useState(true)
  const [locationVisible, setLocationVisible] = useState(true)
  const [phoneVisible, setPhoneVisible] = useState(true)
  const [emailVisible, setEmailVisible] = useState(true)
  const [websiteVisible, setWebsiteVisible] = useState(true)
  const [selectedFrameIndex, setSelectedFrameIndex] = useState(6)
  const frames = [
    '/frames/frame1.png',
    '/frames/frame2.png',
    '/frames/frame3.png',
    '/frames/frame4.png',
    '/frames/frame5.png',
    '/frames/Frame6.png',
    '/frames/frame7.png',
  ]

  const customframes = [
    '/frames/customframe1.png',
    '/frames/customframe2.png',
    '/frames/customframe3.png',
    '/frames/customframe4.png',
    '/frames/customframe5.png',
    '/frames/customframe6.png',
  ]

  const componentRef = useRef(null)

  const downloadImage = () => {
    const node = componentRef.current

    toPng(node)
      .then(function (dataUrl) {
        const link = document.createElement('a')
        link.download = 'component.png'
        link.href = dataUrl
        link.click()
      })
      .catch(function (error) {
        console.error('Error:', error)
      })
  }

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

  const handleFrameClick = (index) => {
    setSelectedFrameIndex(index)
  }

  const framePositions = [
    {
      email: '-bottom-56 mb-9 -left-56 ml-2 flex text-black',
      phone: '-bottom-44 mb-3 -left-48 flex text-black',
      website: '-bottom-56 mb-9 left-10 text-black flex',
      location: '-bottom-56 mb-3 -left-40 -right-20 ml-16 text-black flex-row',
    },
    {
      email: '-bottom-56 mb-3 flex -left-56 text-white',
      phone: '-bottom-48 flex -left-56 mb-1 text-black',
      website: 'flex -bottom-48 mb-1 left-16 text-black',
      location: 'flex -bottom-56 -right-60 mr-8 mb-4 text-black',
    },
    {
      email: '-bottom-56 mb-3 flex -left-56 text-white',
      phone: '-bottom-48 flex -left-40 mb-2 text-white',
      website: '-bottom-48 flex -left-4 mb-2 text-white',
      location: '-bottom-56 mb-3 flex -right-60 mr-10 text-white',
    },
    {
      email: 'top-20 left-20',
      phone: 'top-60 left-20',
      website: 'top-100 left-20',
      location: 'bottom-20 left-20',
    },
    {
      email: '-bottom-56 mb-7 flex -left-2 text-black',
      phone: '-bottom-56 mb-7 flex -left-40 text-black',
      website: '-bottom-60 mb-6 flex -left-56 ml-5 text-black',
      location: '-bottom-60 mb-6 flex -right-60 mr-16 text-black',
    },
    {
      email: 'top-20 left-20',
      phone: 'top-60 left-20',
      website: 'top-100 left-20',
      location: 'bottom-20 left-20',
    },
    {
      email: '-bottom-56 mb-5 flex -left-28 text-black text-sm',
      phone: '-bottom-56 mb-4 flex -left-60 ml-4 text-black',
      website: '-bottom-56 mb-5 flex left-24 ml-2 text-black text-sm',
      location: '-bottom-60 -right-40 -left-20 ',
    },
  ]

  const getPropertyPosition = (property, index) => {
    const defaultPosition = 'top-0 left-0' // Define your default position here
    if (framePositions[index]) {
      return framePositions[index][property] || defaultPosition
    }
    return defaultPosition
  }

  return (
    <main className="bg-gray-200">
      <Navbar />
      <main className="bg-gray-200 relative">
        <div
          className="py-10 mt-10 flex items-center justify-center"
          ref={componentRef}
        >
          {nameVisible && (
            <div className="absolute top-12 mt-6">
              <p className="text-black text-xl font-bold">Next Associates</p>
            </div>
          )}
          <div className=" border-purple-300 border-2 p-2 rounded-lg">
            <Image
              src="/heritageDay.jpg"
              alt="diwali"
              className="p-2 rounded-lg"
              width={500}
              height={400}
            />
          </div>
          <div className="absolute h-[440px] w-[480px]">
            {logoVisible && (
              <Draggable bounds="parent">
                <div className="absolute top-16 text-black text-3xl cursor-pointer">
                  <Image src="/logo.png" height={30} width={90} />
                </div>
              </Draggable>
            )}
          </div>

          <Image
            src={
              selectedFrameIndex !== -1
                ? frames[selectedFrameIndex]
                : '/frames/frame1.png'
            }
            alt="frame1"
            className="absolute bottom-36 pb-0.5 rounded-lg"
            width={480}
            height={60}
          />
          <div className="absolute mb-2 ml-4 text-black rounded-2xl flex px-4">
            {phoneVisible && (
              <p
                className={`absolute ${getPropertyPosition(
                  'phone',
                  selectedFrameIndex
                )}`}
              >
                <FaPhone className="h-4 w-4 mx-1 mt-1 " />
                9354721223
              </p>
            )}
            {emailVisible && (
              <p
                className={`absolute ${getPropertyPosition(
                  'email',
                  selectedFrameIndex
                )}`}
              >
                <MdEmail className="h-4 w-4 mx-0.5 mt-1" />
                nextgenassociates@gmail.com
              </p>
            )}
            {websiteVisible && (
              <p
                className={`absolute ${getPropertyPosition(
                  'website',
                  selectedFrameIndex
                )}`}
              >
                <CiGlobe className="h-4 w-4 mx-0.5 mt-1" />
                nextassociates.xyz
              </p>
            )}
            {locationVisible && (
              <div
                className={`absolute ${getPropertyPosition(
                  'location',
                  selectedFrameIndex
                )}`}
              >
                <p className="flex">
                  <FaLocationDot className="h-4 w-4 mx-1 mt-1 text-black" />
                  Indiranagar, Bengaluru
                </p>
              </div>
            )}
          </div>
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
              className={`px-2   py-2 text-black rounded-xl ${
                logoVisible ? 'bg-purple-400' : 'bg-gray-400'
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
      </main>
      <div className="text-2xl text-black flex items-center justify-center py-2 ">
        Select from a wide range of Frames:
      </div>
      <div className="relative flex flex-wrap justify-center">
        {frames.map((frame, index) => (
          <div
            key={index}
            className="relative flex p-5 justify-center items-center "
            onClick={() => handleFrameClick(index)}
          >
            <Image
              src="/heritageDay.jpg"
              width={150}
              height={150}
              className="cursor-pointer"
            />
            <Image
              src={frame}
              width={150}
              height={60}
              className="absolute bottom-6"
            />
          </div>
        ))}
        <MdArrowCircleLeft className="absolute top-20 left-16 w-9 cursor-pointer h-10 text-purple-400" />
        <MdArrowCircleRight className="absolute top-20 w-9 h-10 cursor-pointer right-16 text-purple-400" />
      </div>
      <div className="py-2 mb-8 text-2xl text-black flex items-center justify-center">
        Custom Frames Just for you!
      </div>
      <div className="relative flex flex-wrap justify-center">
        {customframes.map((frame, index) => (
          <div
            key={index}
            className="relative flex p-5 justify-center items-center "
          >
            <Image
              src="/heritageDay.jpg"
              width={160}
              height={160}
              className="cursor-pointer"
            />
            <Image
              src={frame}
              width={index === 3 || index === 4 ? 180 : 180}
              height={index === 3 || index === 4 ? 60 : 180}
              className={`absolute cursor-pointer ${
                index === 3 || index === 4 ? '-bottom-4' : 'bottom-4'
              }`}
            />
          </div>
        ))}
        <MdArrowCircleLeft className="absolute top-20 left-16 w-9 cursor-pointer h-10 text-purple-400" />
        <MdArrowCircleRight className="absolute top-20 w-9 h-10 cursor-pointer right-16 text-purple-400" />
      </div>
      <div className="py-10 text-3xl text-purple-500 flex justify-center items-center cursor-pointer">
        <FaDownload className="w-6 h-6 mx-2" onClick={downloadImage} /> Download
      </div>
    </main>
  )
}

export default page
