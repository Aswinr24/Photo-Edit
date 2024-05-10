'use client'
import { React, useState, useRef, useCallback } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { FaPhone } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { CiGlobe } from 'react-icons/ci'
import { FaLocationDot } from 'react-icons/fa6'
import Navbar from '@/app/components/Navbar'
import { FaDownload } from 'react-icons/fa'
import { MdArrowCircleRight } from 'react-icons/md'
import { MdArrowCircleLeft } from 'react-icons/md'
import Draggable from 'react-draggable'
import '../../styles.css'
import { toPng } from 'html-to-image'
import { useSearchParams } from 'next/navigation'
import { useScreenshot, createFileName } from 'use-react-screenshot'
import { TwitterPicker } from 'react-color'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CiHeart } from 'react-icons/ci'
import { useCapture } from 'react-capture'

const page = () => {
  const { snap } = useCapture()
  const element = useRef(null)

  const onClick = useCallback(() => {
    snap(element, { file: 'download.png' })
  }, [snap, element])

  const searchParams = useSearchParams()

  const [color, setColor] = useState('#000000')
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [font1, setFont1] = useState('Audiowide')

  const toggleColorPicker = () => {
    setShowColorPicker((prevState) => !prevState)
  }

  const handleChangeComplete = (selectedColor) => {
    setColor(selectedColor.hex)
    setShowColorPicker(false)
  }

  const imagePath = searchParams.get('imagePath')

  const [nameVisible, setNameVisible] = useState(true)
  const [logoVisible, setLogoVisible] = useState(true)
  const [locationVisible, setLocationVisible] = useState(true)
  const [phoneVisible, setPhoneVisible] = useState(true)
  const [emailVisible, setEmailVisible] = useState(true)
  const [websiteVisible, setWebsiteVisible] = useState(true)
  const [selectedFrameIndex, setSelectedFrameIndex] = useState(0)
  const [showFrame, setShowFrame] = useState(true)
  const [showCustomFrame, setShowCustomFrame] = useState(false)
  const [showContents, setShowContents] = useState(true)
  const [selectedCustomFrameIndex, setSelectedCustomFrameIndex] = useState(0)
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

  const [image, takeScreenShot] = useScreenshot({
    type: 'image/jpeg',
    quality: 1.0,
  })

  const download = (image, { name = 'img', extension = 'jpg' } = {}) => {
    const a = document.createElement('a')
    a.href = image
    a.download = createFileName(extension, name)
    a.click()
  }

  const getImage = () => takeScreenShot(componentRef.current).then(download)

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
    setShowFrame(true)
    setShowContents(true)
    setShowCustomFrame(false)
    setNameVisible(true)
    setLogoVisible(true)
    setLocationVisible(true)
    setPhoneVisible(true)
    setEmailVisible(true)
    setWebsiteVisible(true)
  }

  const handleCustomFrameClick = (index) => {
    setSelectedCustomFrameIndex(index)
    setShowCustomFrame(true)
    setShowFrame(false)
    setShowContents(false)
    setNameVisible(false)
    setLogoVisible(false)
    setLocationVisible(false)
    setPhoneVisible(false)
    setEmailVisible(false)
    setWebsiteVisible(false)
  }

  const framePositions = [
    {
      name: 'absolute -top-[490px] mb-60 flex -right-80 mr-12',
      email: '-bottom-0 -right-56 mb-10 flex text-black',
      phone: '-bottom-0 mb-16  flex text-black',
      website: '-bottom-0 mb-10 -right-[440px] left-72 text-black flex',
      location: '-bottom-0 mb-4 -right-80 mr-6 text-black flex-row',
    },
    {
      name: 'absolute -top-[480px] mb-60 flex -right-80 mr-12',
      email: '-bottom-0 mb-2 flex -left-0 text-white',
      phone: '-bottom-0 flex mb-8 left-0 text-black',
      website: 'flex -bottom-0 mb-8 -right-[420px] text-black',
      location: 'flex -bottom-0 -right-[428px] mb-3 text-black',
    },
    {
      name: 'absolute -top-[480px] mb-60 flex -right-80 mr-12',
      email: '-bottom-0 mb-3 flex ml-3 -left-0 text-white',
      phone: '-bottom-0 mb-9 flex left-10 text-white',
      website: '-bottom-0 flex -right-[380px] mb-9 text-white',
      location: '-bottom-0 mb-3 flex -right-[450px] mr-10 text-white',
    },
    {
      name: 'absolute -top-60 mt-4 flex -left-40 -right-20 ml-24',
      email: 'top-20 left-20',
      phone: 'top-60 left-20',
      website: 'top-100 left-20',
      location: 'bottom-20 left-20',
    },
    {
      name: 'absolute -top-[480px] mb-60 flex -right-80 mr-12',
      email: '-bottom-0 mb-7 flex -right-[428px] text-black',
      phone: '-bottom-0 mb-7 flex left-16 text-black',
      website: '-bottom-0 mb-1 flex left-6 text-black',
      location: '-bottom-0 mb-2 flex -right-[456px] mr-16 text-black',
    },
    {
      name: 'absolute -top-[480px] flex -right-40 mr-6',
      email: '-bottom-0 mb-3 flex left-2',
      phone: '-bottom-0 mb-8 flex left-0',
      website: '-top-[480px] flex -right-[420px]',
      location: '-bottom-0 mb-4 -right-[424px] ',
    },
    {
      name: 'absolute -top-[480px] mb-60 flex -right-80 mr-12',
      email: '-bottom-0 mb-4 flex left-28 ml-1 text-black text-sm',
      phone: '-bottom-0 mb-3 flex -left-2 text-black',
      website: '-bottom-0 mb-4 flex left-80 ml-2 text-black text-sm',
      location: '-bottom-0 mb-10 -right-80 mr-10',
    },
  ]

  const getPropertyPosition = (property, index) => {
    const defaultPosition = 'top-0 left-0'
    if (framePositions[index]) {
      return framePositions[index][property] || defaultPosition
    }
    return defaultPosition
  }

  return (
    <main className="bg-violet-50">
      <Navbar />
      <main className="bg-violet-50">
        <div className="py-10 mt-10 flex items-center justify-center">
          <div className=" border-purple-300 border-2 p-2 rounded-lg">
            <div ref={element}>
              <img
                src={imagePath}
                alt="diwali"
                className="p-2 rounded-2xl"
                width={500}
                height={400}
              />

              <div
                className={`absolute top-48 ml-2 h-[400px] w-[480px] ${
                  showContents ? 'block' : 'hidden'
                }`}
              >
                {logoVisible && (
                  <Draggable bounds="parent">
                    <div className="absolute text-black text-3xl cursor-pointer">
                      <Image src="/logo.png" height={30} width={90} />
                    </div>
                  </Draggable>
                )}
              </div>

              <img
                src={
                  selectedFrameIndex !== -1
                    ? frames[selectedFrameIndex]
                    : '/frames/frame1.png'
                }
                alt="frame1"
                className={`absolute bottom-6 mb-0.5 ml-2 rounded-lg ${
                  showFrame ? 'block' : 'hidden'
                }`}
                width={484}
                height={60}
              />
              <img
                src={
                  showCustomFrame
                    ? customframes[selectedCustomFrameIndex]
                    : '/frames/customframe1.png'
                }
                alt="customFrame"
                width={490}
                height={64}
                className={`absolute bottom-6 mb-1 ml-1.5 rounded-lg ${
                  showCustomFrame ? 'block' : 'hidden'
                }`}
              />
              <div
                className={`absolute mb-2 ml-4 text-black rounded-2xl flex px-4 ${
                  showContents ? 'block' : 'hidden'
                }`}
              >
                {nameVisible && (
                  <p
                    className={`absolute text-xl font-semibold ${getPropertyPosition(
                      'name',
                      selectedFrameIndex
                    )}`}
                    style={{ color: color }}
                  >
                    Next Associates
                  </p>
                )}
                {phoneVisible && (
                  <p
                    className={`absolute ${getPropertyPosition(
                      'phone',
                      selectedFrameIndex
                    )}`}
                  >
                    <FaPhone className="h-4 w-4 mx-2 mt-1 " />
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
                      <FaLocationDot className="h-4 w-4 mx-0.5 mt-1 text-black" />
                      Indiranagar, Bengaluru
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center pb-4">
          <button
            onClick={() => {
              if (showFrame) {
                toggleVisibility('name')
              }
            }}
          >
            <div
              className={` px-2 py-2 text-black rounded-xl ${
                nameVisible ? 'bg-purple-400' : 'bg-gray-300'
              }`}
            >
              <p className="px-2">Name</p>
            </div>
          </button>
          <button
            onClick={() => {
              if (showFrame) {
                toggleVisibility('logo')
              }
            }}
          >
            <div
              className={`px-2   py-2 text-black rounded-xl ${
                logoVisible ? 'bg-purple-400' : 'bg-gray-300'
              }`}
            >
              <p className="px-2">Logo</p>
            </div>
          </button>
          <button
            onClick={() => {
              if (showFrame) {
                toggleVisibility('location')
              }
            }}
          >
            <div
              className={` px-2 py-2 text-black rounded-xl ${
                locationVisible ? 'bg-purple-400 ' : 'bg-gray-300'
              }`}
            >
              <p className="px-2 flex">
                <FaLocationDot className="h-5 w-5 mr-2" /> Location
              </p>
            </div>
          </button>
          <button
            onClick={() => {
              if (showFrame) {
                toggleVisibility('phone')
              }
            }}
          >
            <div
              className={` px-2 py-2 text-black rounded-xl ${
                phoneVisible ? 'bg-purple-400' : 'bg-gray-300'
              }`}
            >
              <p className="px-2 flex">
                <FaPhone className="h-5 w-5 mr-2 mt-0.5" /> Phone no.
              </p>
            </div>
          </button>
          <button
            onClick={() => {
              if (showFrame) {
                toggleVisibility('email')
              }
            }}
          >
            <div
              className={` px-2 py-2 text-black rounded-xl ${
                emailVisible ? 'bg-purple-400' : 'bg-gray-300'
              }`}
            >
              <p className="px-2 flex">
                <MdEmail className="h-5 w-5 mr-2 mt-0.5" /> e-mail
              </p>
            </div>
          </button>
          <button
            onClick={() => {
              if (showFrame) {
                toggleVisibility('website')
              }
            }}
          >
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
      <div className="py-4 mb-8 flex gap-20 justify-center items-center">
        <div className="py-2 mt-2">
          <h1
            className="text-xl flex text-black mb-4 cursor-pointer"
            onClick={toggleColorPicker}
          >
            Text Colour:
            <div
              className="w-6 h-6 ml-2 mt-0.5 rounded-lg"
              style={{ backgroundColor: color }}
            ></div>
          </h1>
          {showColorPicker && (
            <div className="absolute">
              <TwitterPicker
                color={color}
                onChangeComplete={handleChangeComplete}
                colors={[
                  '#000000',
                  '#ffffff',
                  '#9c27b0',
                  '#673ab7',
                  '#3f51b5',
                  '#2196f3',
                  '#03a9f4',
                  '#00bcd4',
                  '#009688',
                  '#4caf50',
                  '#8bc34a',
                  '#ff5722',
                  '#795548',
                  '#607d8b',
                ]}
                width="400px"
              />
            </div>
          )}
        </div>
        <div className="py-2 flex gap-2">
          <h1 className="text-xl mt-2 flex text-black mb-4 w-full cursor-pointer">
            Text Font:
          </h1>
          <div>
            <Select>
              <SelectTrigger className="w-[180px] bg-purple-400 rounded-xl">
                <SelectValue placeholder="Outfit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="bg-purple-300 rounded-md">
                  <SelectItem value="outfit">Outfit</SelectItem>
                  <SelectItem value="Sans">Sans</SelectItem>
                  <SelectItem value="Serif">Serif</SelectItem>
                  <SelectItem value="Monospace">Monospace</SelectItem>
                  <SelectItem value="Audiowide">Audiowide</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="text-xl text-black flex items-center justify-center py-2 ">
        Select from a wide range of Frames:
      </div>
      <div className="relative flex flex-wrap justify-center">
        {frames.map((frame, index) => (
          <div
            key={index}
            className="relative flex p-5 justify-center items-center "
            onClick={() => handleFrameClick(index)}
          >
            <img
              src={imagePath}
              width={150}
              height={150}
              className="cursor-pointer mb-1"
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
            onClick={() => handleCustomFrameClick(index)}
          >
            <img
              src={imagePath}
              width={160}
              height={160}
              className="cursor-pointer mb-1"
            />
            <img
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
      <div className="py-10 flex gap-10 justify-center items-center ">
        <div
          className="text-3xl text-purple-500 flex cursor-pointer"
          onClick={onClick}
        >
          <FaDownload className="w-6 h-6 mx-2 mt-1" /> Download
        </div>
        <div className="px-6 text-xl cursor-pointer text-purple-500 flex">
          <CiHeart className="w-6 h-6 mx-2" /> Add to favourites
        </div>
      </div>
    </main>
  )
}

export default page
