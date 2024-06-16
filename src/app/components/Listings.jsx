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

  const apiUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl)
        const data = await res.json()

        const categoryMap = {}
        data.forEach((item) => {
          const category = processCategoryString(item.Category)
          if (!categoryMap[category]) {
            categoryMap[category] = {
              items: [item.Image],
              type: [item.type],
              category: [item.category],
            }
          } else {
            categoryMap[category].items.push(item.Image)
            categoryMap[category].type.push(item.type)
          }
        })

        const categoryArrays = Object.entries(categoryMap).map(
          ([categoryName, categoryValue]) => {
            return [categoryName, ...categoryValue.items]
          }
        )
        setCategory1(categoryArrays[0] || [])
        setCategory2(categoryArrays[1] || [])
        setCategory3(categoryArrays[2] || [])
        setCategory4(categoryArrays[3] || [])
        setCategory5(categoryArrays[4] || [])

        const firstImgs = Object.values(categoryMap)
          .map((category) => {
            const eventIndex = category.type.findIndex(
              (types) => types === 'event'
            )
            return category.items[eventIndex]
          })
          .filter(Boolean)

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

  const nextSlide = (currentIndex, setCurrentIndex, firstImages) => {
    if (currentIndex < firstImages.length - 5) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1)
  }

  const nextSlide1 = (currentIndex1, setCurrentIndex1, category1) => {
    if (currentIndex1 < category1.length - 5) {
      setCurrentIndex1(currentIndex1 + 1)
    }
  }

  const prevSlide1 = () => {
    setCurrentIndex1((prevIndex1) => prevIndex1 - 1)
  }
  const nextSlide2 = (currentIndex2, setCurrentIndex2, category2) => {
    if (currentIndex2 < category2.length - 5) {
      setCurrentIndex2(currentIndex2 + 1)
    }
  }

  const prevSlide2 = () => {
    setCurrentIndex2((prevIndex2) => prevIndex2 - 1)
  }
  const nextSlide3 = (currentIndex3, setCurrentIndex3, category3) => {
    if (currentIndex3 < category3.length - 5) {
      setCurrentIndex3(currentIndex3 + 1)
    }
  }

  const prevSlide3 = () => {
    setCurrentIndex3((prevIndex3) => prevIndex3 - 1)
  }

  const nextSlide4 = (currentIndex4, setCurrentIndex4, category4) => {
    if (currentIndex4 < category4.length - 5) {
      setCurrentIndex4(currentIndex4 + 1)
    }
  }

  const prevSlide4 = () => {
    setCurrentIndex4((prevIndex4) => prevIndex4 - 1)
  }

  const nextSlide5 = (currentIndex5, setCurrentIndex5, category5) => {
    if (currentIndex5 < category5.length - 5) {
      setCurrentIndex5(currentIndex5 + 1)
    }
  }

  const prevSlide5 = () => {
    setCurrentIndex5((prevIndex5) => prevIndex5 - 1)
  }

  const handleClick = (imagePath) => {
    router.push(`/listings/image?imagePath=${encodeURIComponent(imagePath)}`)
  }

  return (
    <main className="text-3xl text-black p-10">
      <div className="w-full mb-6 relative flex justify-center items-center">
        <FaAngleLeft className="absolute w-12 h-12 text-purple-500 left-0 top-48 cursor-pointer" />
        <img src="/banner.png" className="rounded w-[1200px] h-[520px]" />
        <FaAngleRight className="absolute w-12 h-12 text-purple-500 right-0 top-48 cursor-pointer" />
      </div>
      <div className="flex items-center justify-center my-4 pb-2">
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
                className={`w-60 h-60 rounded-lg cursor-pointer ${
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
            onClick={() =>
              nextSlide(currentIndex, setCurrentIndex, firstImages)
            }
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
              onClick={() =>
                nextSlide1(currentIndex1, setCurrentIndex1, category1)
              }
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
              onClick={() =>
                nextSlide2(currentIndex2, setCurrentIndex2, category2)
              }
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
                  className={`w-60 h-60 rounded-lg cursor-pointer ${
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
              onClick={() =>
                nextSlide3(currentIndex3, setCurrentIndex3, category3)
              }
              className="absolute top-20 mt-4 w-9 h-10 cursor-pointer -right-0.5 text-purple-400"
            />
          </div>
        </div>
      )}
      {category4.length > 0 && (
        <div>
          <div className="text-3xl text-black px-10 py-10">{category4[0]}</div>
          <div className="relative overflow-hidden">
            <div
              className="flex gap-10 px-10 -ml-60 mr-60 transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex4 * 20}%)` }}
            >
              {category4.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={`w-60 h-60 rounded-lg cursor-pointer ${
                    index === currentIndex4
                      ? 'translate-x-60'
                      : 'translate-x-full'
                  }`}
                  alt={`Slide ${index}`}
                  onClick={() => handleClick(image)}
                />
              ))}
            </div>
            <MdArrowCircleLeft
              onClick={prevSlide4}
              className="absolute top-20 mt-4 -left-0.5 w-9 cursor-pointer h-10 text-purple-400"
            />
            <MdArrowCircleRight
              onClick={() =>
                nextSlide4(currentIndex4, setCurrentIndex4, category4)
              }
              className="absolute top-20 mt-4 w-9 h-10 cursor-pointer -right-0.5 text-purple-400"
            />
          </div>
        </div>
      )}
      {category5.length > 0 && (
        <div>
          <div className="text-3xl text-black px-10 py-10">{category5[0]}</div>
          <div className="relative overflow-hidden">
            <div
              className="flex gap-10 px-10 -ml-60 mr-60 transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex5 * 20}%)` }}
            >
              {category5.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={`w-60 h-100 rounded-lg cursor-pointer ${
                    index === currentIndex5
                      ? 'translate-x-60'
                      : 'translate-x-full'
                  }`}
                  alt={`Slide ${index}`}
                  onClick={() => handleClick(image)}
                />
              ))}
            </div>
            <MdArrowCircleLeft
              onClick={prevSlide5}
              className="absolute top-20 mt-4 -left-0.5 w-9 cursor-pointer h-10 text-purple-400"
            />
            <MdArrowCircleRight
              onClick={() =>
                nextSlide5(currentIndex5, setCurrentIndex5, category5)
              }
              className="absolute top-20 mt-4 w-9 h-10 cursor-pointer -right-0.5 text-purple-400"
            />
          </div>
        </div>
      )}
    </main>
  )
}

export default Listings
