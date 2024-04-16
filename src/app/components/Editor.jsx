'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'

import diwali from './../../../public/diwali.png'
import diwali2 from './../../../public/diwali2.jpg'

const IMAGES = [diwali, diwali2, diwali, diwali2]

const Editor = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? IMAGES.length - 1 : prevIndex - 1
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === IMAGES.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="image-carousel h-screen flex items-center justify-center">
      <div className="carousel-container relative">
        <motion.div
          key={currentImageIndex}
          className="image-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={IMAGES[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="h-48 w-72 object-contain"
          />
        </motion.div>
        <button
          onClick={prevImage}
          className="prev-button absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
        >
          <IoMdArrowBack size={24} />
        </button>
        <button
          onClick={nextImage}
          className="next-button absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
        >
          <IoMdArrowForward size={24} />
        </button>
      </div>
    </div>
  )
}

export default Editor
