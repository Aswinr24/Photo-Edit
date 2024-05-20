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
  const [currentIndex2, setCurrentIndex2] = useState(0)
  const [currentIndex3, setCurrentIndex3] = useState(0)
  const [currentIndex4, setCurrentIndex4] = useState(0)
  const [currentIndex5, setCurrentIndex5] = useState(0)
  const [images, setImages] = useState([])
  const [category1, setCategory1] = useState([])
  const [category2, setCategory2] = useState([])
  const [category3, setCategory3] = useState([])
  const [category4, setCategory4] = useState([])
  const [category5, setCategory5] = useState([])

  const [firstImages, setFirstImages] = useState([])

  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://smart-ariser.vercel.app/api')
        const data = await res.json()

        const categoryMap = {}
        data.forEach((item) => {
          const category = processCategoryString(item.Category)
          if (!categoryMap[category]) {
            categoryMap[category] = [category]
          }
          categoryMap[category].push(item.Image)
        })

        const categoryArrays = Object.values(categoryMap)

        setCategory1(categoryArrays[0] || [])
        setCategory2(categoryArrays[1] || [])
        setCategory3(categoryArrays[2] || [])
        setCategory4(categoryArrays[3] || [])
        setCategory5(categoryArrays[4] || [])

        const firstImgs = categoryArrays.map((arr) => arr[1]).filter(Boolean)
        setFirstImages(firstImgs)
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
  const nextSlide2 = () => {
    setCurrentIndex2((prevIndex2) => prevIndex2 + 2)
  }

  const prevSlide2 = () => {
    setCurrentIndex2((prevIndex2) => prevIndex2 - 1)
  }
  const nextSlide3 = () => {
    setCurrentIndex3((prevIndex3) => prevIndex3 + 2)
  }

  const prevSlide3 = () => {
    setCurrentIndex3((prevIndex3) => prevIndex3 - 1)
  }
  const nextSlide4 = () => {
    setCurrentIndex4((prevIndex4) => prevIndex4 + 2)
  }

  const prevSlide4 = () => {
    setCurrentIndex4((prevIndex4) => prevIndex4 - 1)
  }

  const nextSlide5 = () => {
    setCurrentIndex5((prevIndex5) => prevIndex5 + 2)
  }

  const prevSlide5 = () => {
    setCurrentIndex5((prevIndex5) => prevIndex5 - 1)
  }

  const handleClick = (imagePath) => {
    router.push(`/listings/image?imagePath=${encodeURIComponent(imagePath)}`)
  }

  const images3 = ['/buddha2.jpg', '/buddha3.jpg']
  const images4 = ['/athletics1.png', '/athletics2.jpg']

  return (
    <main className="text-3xl text-black p-10">
      <div className="w-full mb-6 relative flex justify-center items-center">
        <FaAngleLeft className="absolute w-12 h-12 text-purple-500 left-0 top-48 cursor-pointer" />
        <img src="/banner.png" className="rounded w-[1200px] h-[520px]" />
        <FaAngleRight className="absolute w-12 h-12 text-purple-500 right-0 top-48 cursor-pointer" />
      </div>
      <div className="flex items-center justify-center my-4">
        Celebrations with your Branding!
      </div>
      <div className="pt-4">
        <div className="relative overflow-hidden">
          <div
            className="flex gap-10 px-10 -ml-60 mr-60 transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 20}%)` }}
          >
            {firstImages.map((image, index) => (
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
      </div>
      {category1.length > 0 && (
        <div>
          <div className="text-3xl text-black px-10 py-8">{category1[0]}</div>
          <div className="relative overflow-hidden">
            <div
              className="flex gap-10 px-10 -ml-60 mr-60 transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex1 * 20}%)` }}
            >
              {category1.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={`w-60 h-100 rounded-lg cursor-pointer ${
                    index === currentIndex1
                      ? 'translate-x-60'
                      : 'translate-x-full'
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
        </div>
      )}
      {category2.length > 0 && (
        <div>
          <div className="text-3xl text-black px-10 py-10">{category2[0]}</div>
          <div className="relative overflow-hidden">
            <div
              className="flex gap-10 px-10 -ml-60 mr-60 transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex2 * 20}%)` }}
            >
              {category2.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={`w-60 h-100 rounded-lg cursor-pointer ${
                    index === currentIndex2
                      ? 'translate-x-60'
                      : 'translate-x-full'
                  }`}
                  alt={`Slide ${index}`}
                  onClick={() => handleClick(image)}
                />
              ))}
            </div>
            <MdArrowCircleLeft
              onClick={prevSlide2}
              className="absolute top-20 mt-4 -left-0.5 w-9 cursor-pointer h-10 text-purple-400"
            />
            <MdArrowCircleRight
              onClick={nextSlide2}
              className="absolute top-20 mt-4 w-9 h-10 cursor-pointer -right-0.5 text-purple-400"
            />
          </div>
        </div>
      )}
      {category3.length > 0 && (
        <div>
          <div className="text-3xl text-black px-10 py-10">{category3[0]}</div>
          <div className="relative overflow-hidden">
            <div
              className="flex gap-10 px-10 -ml-60 mr-60 transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex3 * 20}%)` }}
            >
              {category3.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={`w-60 h-100 rounded-lg cursor-pointer ${
                    index === currentIndex3
                      ? 'translate-x-60'
                      : 'translate-x-full'
                  }`}
                  alt={`Slide ${index}`}
                  onClick={() => handleClick(image)}
                />
              ))}
            </div>
            <MdArrowCircleLeft
              onClick={prevSlide3}
              className="absolute top-20 mt-4 -left-0.5 w-9 cursor-pointer h-10 text-purple-400"
            />
            <MdArrowCircleRight
              onClick={nextSlide3}
              className="absolute top-20 mt-4 w-9 h-10 cursor-pointer -right-0.5 text-purple-400"
            />
          </div>
        </div>
      )}
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
