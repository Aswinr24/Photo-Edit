'use client'
import { React, useState, useEffect } from 'react'
import Image from 'next/image'
import { MdArrowCircleRight } from 'react-icons/md'
import { MdArrowCircleLeft } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import { FaAngleLeft } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'
import '../.././app/styles.css'

const Listings = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentIndex1, setCurrentIndex1] = useState(0)
  const [images, setImages] = useState([])
  const [category, setCategory] = useState('')
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api')
        const data = await res.json()
        const firstItem = data[0] || {}
        const { Image, Category } = firstItem
        setImages(data.map((item) => item.Image))
        setCategory(processCategoryString(Category))
      } catch (error) {
        console.error('Failed to fetch data:', error)
      }
    }

    fetchData()
  }, [])

  const processCategoryString = (str) => {
    const stringWithSpaces = str.replace(/_/g, ' ')
    const capitalizedString = stringWithSpaces.replace(/\b\w/g, (char) =>
      char.toUpperCase()
    )
    return capitalizedString
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 2)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1)
  }

  const nextSlide1 = () => {
    setCurrentIndex1((prevIndex1) => prevIndex1 + 2)
  }

  const prevSlide1 = () => {
    setCurrentIndex1((prevIndex1) => prevIndex1 - 1)
  }

  const handleClick = (imagePath) => {
    router.push(`/listings/image?imagePath=${encodeURIComponent(imagePath)}`)
  }
  const images1 = [
    '/labor_day.jpg',
    '/labor_day2.jpg',
    '/labor_day3.jpg',
    '/labor_day4.jpg',
    '/labor_day5.jpg',
    '/labor_day6.jpg',
  ]

  const images2 = [
    '/akshaya1.jpg',
    '/akshaya2.jpg',
    '/akshaya3.jpg',
    '/akshaya4.png',
    '/akshaya5.png',
    '/akshaya6.png',
    '/akshaya7.png',
  ]

  const images3 = ['/buddha2.jpg', '/buddha3.jpg']
  const images4 = ['/athletics1.png', '/athletics2.jpg']

  return (
    <main className="text-3xl text-black p-10">
      <div className="w-full mb-6 relative flex justify-center items-center">
        <FaAngleLeft className="absolute w-12 h-12 text-purple-500 left-0 top-48 cursor-pointer" />
        <img src="/banner.png" className="rounded w-[1200px] h-[520px]" />
        <FaAngleRight className="absolute w-12 h-12 text-purple-500 right-0 top-48 cursor-pointer" />
      </div>
      <div className="flex items-center justify-center mb-6">
        Celebrations with your Branding!
      </div>
      <div className="text-3xl text-black px-10 pb-8">Labour Day</div>
      <div className="relative overflow-hidden">
        <div
          className="flex gap-10 px-10 -ml-60 mr-60 transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 20}%)` }}
        >
          {images1.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`w-60 h-100 rounded-lg cursor-pointer ${
                index === currentIndex ? 'translate-x-60' : 'translate-x-full'
              }`}
              alt={`Slide ${index}`}
              onClick={() => handleClick(image)}
            />
          ))}
        </div>
        <MdArrowCircleLeft
          onClick={prevSlide}
          className="absolute top-20 mt-4 -left-0.5 w-9 cursor-pointer h-10 text-purple-400"
        />
        <MdArrowCircleRight
          onClick={nextSlide}
          className="absolute top-20 mt-4 w-9 h-10 cursor-pointer -right-0.5 text-purple-400"
        />
      </div>
      <div className="text-3xl text-black px-10 py-10">{category}</div>
      <div className="relative overflow-hidden">
        <div
          className="flex gap-10 px-10 -ml-60 mr-60 transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex1 * 20}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`w-60 h-100 rounded-lg cursor-pointer ${
                index === currentIndex1 ? 'translate-x-60' : 'translate-x-full'
              }`}
              alt={`Slide ${index}`}
              onClick={() => handleClick(image)}
            />
          ))}
        </div>
        <MdArrowCircleLeft
          onClick={prevSlide1}
          className="absolute top-20 mt-4 -left-0.5 w-9 cursor-pointer h-10 text-purple-400"
        />
        <MdArrowCircleRight
          onClick={nextSlide1}
          className="absolute top-20 mt-4 w-9 h-10 cursor-pointer -right-0.5 text-purple-400"
        />
      </div>
      <div className="flex gap-40">
        <div>
          <div className="text-3xl text-black px-36 py-10">Buddha Purnima</div>
          <div className="flex gap-10 px-10">
            {images3.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`w-60 h-100 rounded-lg cursor-pointer`}
                alt={`Slide ${index}`}
                onClick={() => handleClick(image)}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="text-3xl text-black px-48 py-10">
            World Athletics Day
          </div>
          <div className="flex gap-10 px-10">
            {images4.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`w-60 h-100 rounded-lg cursor-pointer`}
                alt={`Slide ${index}`}
                onClick={() => handleClick(image)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Listings
