'use client'
import { useState } from 'react'
import Image from 'next/image'
import { MdArrowCircleRight } from 'react-icons/md'
import { MdArrowCircleLeft } from 'react-icons/md'
import { useRouter } from 'next/navigation'

const Listings = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentIndex1, setCurrentIndex1] = useState(0)
  const router = useRouter()

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 2)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1)
  }

  const nextSlide1 = () => {
    setCurrentIndex1((prevIndex) => prevIndex + 2)
  }

  const prevSlide1 = () => {
    setCurrentIndex1((prevIndex) => prevIndex - 1)
  }

  const handleClick = () => {
    router.push('/listings/image')
  }
  const images = [
    '/labor_day.jpg',
    '/labor_day2.jpg',
    '/labor_day3.jpg',
    '/labor_day4.jpg',
    '/labor_day5.jpg',
    '/labor_day6.jpg',
  ]

  const images1 = [
    '/Ramanavami_kannada.jpg',
    '/Ramanavami.jpg',
    '/Ramanavami2.jpg',
    '/Ramanavami3.jpg',
    '/Ramanavami4.jpg',
  ]

  const images2 = ['/heritageDay.jpg', '/heritageDay2.jpg']
  const images3 = ['/liverDay.jpg', '/liverDay2.jpg']

  return (
    <main className="text-3xl text-black p-10">
      <div className="flex items-center justify-center mb-10">
        Celebrations with your Branding!
      </div>
      <div className="text-3xl text-black px-10 pb-8">Labour Day</div>
      <div className="relative overflow-hidden">
        <div
          className="flex gap-10 px-10 -ml-60 mr-60 transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 20}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`w-60 h-100 rounded-lg cursor-pointer ${
                index === currentIndex ? 'translate-x-60' : 'translate-x-full'
              }`}
              alt={`Slide ${index}`}
              onClick={handleClick}
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
      <div className="text-3xl text-black px-10 py-10">Rama Navami</div>
      <div className="relative overflow-hidden">
        <div
          className="flex gap-10 px-10 -ml-60 mr-60 transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 20}%)` }}
        >
          {images1.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`w-60 h-100 rounded-lg ${
                index === currentIndex1 ? 'translate-x-60' : 'translate-x-full'
              }`}
              alt={`Slide ${index}`}
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
          <div className="text-3xl text-black px-36 py-10">
            World Heritage Day!
          </div>
          <div className="flex gap-10 px-10">
            {images2.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`w-60 h-100 rounded-lg`}
                alt={`Slide ${index}`}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="text-3xl text-black px-48 py-10">World Liver Day</div>
          <div className="flex gap-10 px-10">
            {images3.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`w-60 h-100 rounded-lg`}
                alt={`Slide ${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Listings
