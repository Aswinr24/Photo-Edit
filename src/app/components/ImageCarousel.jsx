'use client'
import React, { useState } from 'react'

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="relative">
      <div className="text-center">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="mx-auto"
        />
      </div>
      <div className="absolute bottom-0 right-0 flex space-x-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`h-12 w-auto cursor-pointer border border-transparent hover:border-blue-500 ${
              index === currentIndex ? 'border-blue-500' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <button
        className="absolute bottom-0 left-0 ml-2 mb-2"
        onClick={handlePrev}
      >
        Previous
      </button>
      <button
        className="absolute bottom-0 right-0 mr-2 mb-2"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  )
}

export default ImageCarousel
