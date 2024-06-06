'use client'
import { React, useState, useEffect } from 'react'
import Image from 'next/image'
import { MdArrowCircleRight } from 'react-icons/md'
import { MdArrowCircleLeft } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import '../.././app/styles.css'

const Listings = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentIndex1, setCurrentIndex1] = useState(0)
  const [currentIndex2, setCurrentIndex2] = useState(0)
  const [currentIndex3, setCurrentIndex3] = useState(0)
  const [currentIndex4, setCurrentIndex4] = useState(0)
  const [currentIndex5, setCurrentIndex5] = useState(0)
  const [category1, setCategory1] = useState([])
  const [category2, setCategory2] = useState([])
  const [category3, setCategory3] = useState([])
  const [category4, setCategory4] = useState([])
  const [category5, setCategory5] = useState([])
  const [showPopup, setShowPopup] = useState(false)
  const [showSpin, setShowSpin] = useState(false)
  const [imageToDelete, setImageToDelete] = useState(null)

  const [firstImages, setFirstImages] = useState([])

  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api')
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

  const nextSlide = (currentIndex, setCurrentIndex, category) => {
    if (currentIndex < category.length - 5) {
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
    setImageToDelete(imagePath)
    setShowPopup(true)
  }

  const handleDelete = async () => {
    setShowSpin(true)
    try {
      const res = await fetch('http://localhost:3000/api/admin/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imagePath: imageToDelete }),
      })
      if (res.ok) {
        setShowSpin(false)
        alert('Image Deleted Successfully')
        setShowPopup(false)
        setImageToDelete(null)
        const fetchData = async () => {
          const res = await fetch('http://localhost:3000/api')
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
        }

        fetchData()
      } else {
        setShowSpin(false)
        alert('Failed to delete image')
      }
    } catch (error) {
      setShowSpin(false)
      console.error('Failed to delete image:', error)
    }
  }

  const images3 = ['/buddha2.jpg', '/buddha3.jpg']
  const images4 = ['/athletics1.png', '/athletics2.jpg']

  return (
    <main className="text-3xl text-black p-10">
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
            className="absolute top-20 mt-4 -left-0.5 w-9 cursor-pointer h-10 text-amber-400"
          />
          <MdArrowCircleRight
            onClick={() =>
              nextSlide(currentIndex, setCurrentIndex, firstImages)
            }
            className="absolute top-20 mt-4 w-9 h-10 cursor-pointer -right-0.5 text-amber-500"
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
              className="absolute top-20 mt-4 -left-0.5 w-9 cursor-pointer h-10 text-amber-400"
            />
            <MdArrowCircleRight
              onClick={() =>
                nextSlide1(currentIndex1, setCurrentIndex1, category1)
              }
              className="absolute top-20 mt-4 w-9 h-10 cursor-pointer -right-0.5 text-amber-400"
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
              className="absolute top-20 mt-4 -left-0.5 w-9 cursor-pointer h-10 text-amber-400"
            />
            <MdArrowCircleRight
              onClick={() =>
                nextSlide2(currentIndex2, setCurrentIndex2, category2)
              }
              className="absolute top-20 mt-4 w-9 h-10 cursor-pointer -right-0.5 text-amber-400"
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
              className="absolute top-20 mt-4 -left-0.5 w-9 cursor-pointer h-10 text-amber-400"
            />
            <MdArrowCircleRight
              onClick={() =>
                nextSlide3(currentIndex3, setCurrentIndex3, category3)
              }
              className="absolute top-20 mt-4 w-9 h-10 cursor-pointer -right-0.5 text-amber-400"
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
      {showPopup && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-amber-100 p-8 rounded-xl shadow-lg text-center">
            <p className="px-2">Delete this image?</p>
            <div className="flex pt-8 px-20">
              <button
                onClick={handleDelete}
                className="bg-red-600 rounded-2xl text-white text-xl p-3 px-4"
              >
                {showSpin ? (
                  <div className="flex text-sm px-2">
                    Deleting...
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 px-2 ml-4 border-b-2 border-r-2 border-white"></div>
                  </div>
                ) : (
                  <span> Delete</span>
                )}
              </button>
              <button
                className="text-lg pl-6"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Listings
