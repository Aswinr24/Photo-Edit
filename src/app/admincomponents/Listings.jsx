'use client'
import { React, useState, useEffect } from 'react'
import Image from 'next/image'
import { MdArrowCircleRight } from 'react-icons/md'
import { MdArrowCircleLeft } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import '../.././app/styles.css'
import { LuUpload } from 'react-icons/lu'
import { MdAdd } from 'react-icons/md'

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
  const [showPopup2, setShowPopup2] = useState(false)
  const [showSpin, setShowSpin] = useState(false)
  const [imageToDelete, setImageToDelete] = useState(null)
  const [categoryname, setCategoryname] = useState('')
  const [categorytype, setCategorytype] = useState('')
  const [categorydate, setCategorydate] = useState('')
  const [file, setFile] = useState(null)
  const [filename, setFilename] = useState('Upload Image')
  const [firstImages, setFirstImages] = useState([])
  const apiUrl = process.env.NEXT_PUBLIC_WEBSITE_URL

  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apiUrl}/api`)
        const data = await res.json()
        const categoryMap = {}
        data.forEach((item) => {
          const category = processCategoryString(item.Category)
          if (!categoryMap[category]) {
            categoryMap[category] = {
              items: [item.Image],
              type: [item.type],
              date: item.date,
              category: [item.category],
            }
          } else {
            categoryMap[category].items.push(item.Image)
            categoryMap[category].type.push(item.type)
          }
        })
        const categoryArrays = Object.entries(categoryMap).map(
          ([categoryName, categoryValue]) => {
            return [
              categoryName,
              categoryValue.type[0],
              categoryValue.date,
              ...categoryValue.items,
            ]
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

  const reprocessCategoryString = (str) => {
    const stringWithoutSpaces = str.replace(/ /g, '_')
    const resultString =
      stringWithoutSpaces.charAt(0).toUpperCase() +
      stringWithoutSpaces.slice(1).toLowerCase()
    return resultString
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

  const onClick = () => {
    setShowPopup2(false)
  }

  const handleDelete = async () => {
    setShowSpin(true)
    try {
      const res = await fetch(`${apiUrl}/api/admin/delete`, {
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
          const res = await fetch(`${apiUrl}/api`)
          const data = await res.json()

          const categoryMap = {}
          data.forEach((item) => {
            const category = processCategoryString(item.Category)
            if (!categoryMap[category]) {
              categoryMap[category] = {
                items: [item.Image],
                type: [item.type],
                date: item.date,
                category: [item.category],
              }
            } else {
              categoryMap[category].items.push(item.Image)
              categoryMap[category].type.push(item.type)
            }
          })
          const categoryArrays = Object.entries(categoryMap).map(
            ([categoryName, categoryValue]) => {
              return [
                categoryName,
                categoryValue.type[0],
                categoryValue.date,
                ...categoryValue.items,
              ]
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

  const handleCategory = () => {
    setShowPopup2(true)
  }

  const handleFileChange = async (e, category, type, date) => {
    const file = e.target.files[0]
    if (!file) return
    const formData = new FormData()
    formData.append('file', file)
    formData.append('category', category)
    formData.append('type', type)
    formData.append('date', date)
    console.log(file)
    console.log(formData)
    try {
      const res = await fetch(`${apiUrl}/api/admin/upload`, {
        method: 'POST',
        body: formData,
      })
      if (res.ok) {
        alert('Image Uploaded Successfully')
        const fetchData = async () => {
          const res = await fetch(`${apiUrl}/api`)
          const data = await res.json()

          const categoryMap = {}
          data.forEach((item) => {
            const category = processCategoryString(item.Category)
            if (!categoryMap[category]) {
              categoryMap[category] = {
                items: [item.Image],
                type: [item.type],
                date: item.date,
                category: [item.category],
              }
            } else {
              categoryMap[category].items.push(item.Image)
              categoryMap[category].type.push(item.type)
            }
          })
          const categoryArrays = Object.entries(categoryMap).map(
            ([categoryName, categoryValue]) => {
              return [
                categoryName,
                categoryValue.type[0],
                categoryValue.date,
                ...categoryValue.items,
              ]
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
        }

        fetchData()
      } else {
        alert('Failed to upload image')
      }
    } catch (error) {
      console.error('Failed to upload image:', error)
    }
  }

  const handleFileChange2 = (e) => {
    setFile(e.target.files[0])
    const formData = new FormData()
    formData.append('file', file)
    setFilename(formData.get('file').name)
  }

  const handleSubmit = async () => {
    setShowSpin(true)
    if (!file || !categoryname) {
      alert('Please provide both a category name and an image.')
      return
    }

    const formData = new FormData()
    formData.append('file', file)
    formData.append('category', categoryname)
    formData.append('type', categorytype)
    formData.append('date', categorydate)

    try {
      const res = await fetch(`${apiUrl}/api/admin/upload`, {
        method: 'POST',
        body: formData,
      })

      if (res.ok) {
        setShowSpin(false)
        setFile(null)
        alert('Image Uploaded Successfully')
        onClick()
        const fetchData = async () => {
          const res = await fetch(`${apiUrl}/api`)
          const data = await res.json()

          const categoryMap = {}
          data.forEach((item) => {
            const category = processCategoryString(item.Category)
            if (!categoryMap[category]) {
              categoryMap[category] = {
                items: [item.Image],
                type: [item.type],
                date: item.date,
                category: [item.category],
              }
            } else {
              categoryMap[category].items.push(item.Image)
              categoryMap[category].type.push(item.type)
            }
          })
          const categoryArrays = Object.entries(categoryMap).map(
            ([categoryName, categoryValue]) => {
              return [
                categoryName,
                categoryValue.type[0],
                categoryValue.date,
                ...categoryValue.items,
              ]
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
        }

        fetchData()
      } else {
        alert('Failed to upload image')
      }
    } catch (error) {
      console.error('Failed to upload image:', error)
    }
  }

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
            className="absolute top-20 mt-4 -left-0.5 w-9 cursor-pointer h-10 text-amber-500"
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
              style={{
                transform: `translateX(-${
                  (currentIndex1 * 100) / (category1.length + 1)
                }%)`,
                width: `${(category1.length + 1) * 20}%`,
              }}
            >
              {category1.slice(3).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={`w-60 h-60 rounded-lg cursor-pointer ${
                    index === currentIndex1
                      ? 'translate-x-60'
                      : 'translate-x-full'
                  }`}
                  alt={`Slide ${index}`}
                  onClick={() => handleClick(image)}
                />
              ))}
              <div className="w-60 h-100 ml-60 relative rounded-xl cursor-pointer flex items-center justify-center border-4 border-dashed border-amber-400">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleFileChange(
                      e,
                      reprocessCategoryString(category1[0]),
                      category1[1],
                      category1[2]
                    )
                  }
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="text-amber-400">
                  <div className="flex items-center justify-center">
                    <LuUpload className="w-14 h-16 mb-4 text-amber-400" />
                  </div>
                  Upload Image
                </div>
              </div>
            </div>

            <MdArrowCircleLeft
              onClick={prevSlide1}
              className="absolute top-20 mt-4 -left-0.5 w-9 cursor-pointer h-10 text-amber-500"
            />
            <MdArrowCircleRight
              onClick={() =>
                nextSlide1(currentIndex1, setCurrentIndex1, category1)
              }
              className="absolute top-20 mt-4 w-9 h-10 cursor-pointer -right-0.5 text-amber-500"
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
              style={{
                transform: `translateX(-${
                  (currentIndex2 * 100) / (category2.length + 1)
                }%)`,
                width: `${(category2.length + 1) * 20}%`,
              }}
            >
              {category2.slice(3).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={`w-60 h-60 rounded-lg cursor-pointer ${
                    index === currentIndex2
                      ? 'translate-x-60'
                      : 'translate-x-full'
                  }`}
                  alt={`Slide ${index}`}
                  onClick={() => handleClick(image)}
                />
              ))}
              <div className="w-60 h-100 ml-60 relative rounded-xl cursor-pointer flex items-center justify-center border-4 border-dashed border-amber-400">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleFileChange(
                      e,
                      reprocessCategoryString(category2[0]),
                      category2[1],
                      category2[2]
                    )
                  }
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="text-amber-400">
                  <div className="flex items-center justify-center">
                    <LuUpload className="w-14 h-16 mb-4 text-amber-400" />
                  </div>
                  Upload Image
                </div>
              </div>
            </div>
            <MdArrowCircleLeft
              onClick={prevSlide2}
              className="absolute top-20 mt-4 -left-0.5 w-9 cursor-pointer h-10 text-amber-500"
            />
            <MdArrowCircleRight
              onClick={() =>
                nextSlide2(currentIndex2, setCurrentIndex2, category2)
              }
              className="absolute top-20 mt-4 w-9 h-10 cursor-pointer -right-0.5 text-amber-500"
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
              style={{
                transform: `translateX(-${
                  (currentIndex3 * 100) / (category3.length + 1)
                }%)`,
                width: `${(category3.length + 1) * 20}%`,
              }}
            >
              {category3.slice(3).map((image, index) => (
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
              <div className="w-60 h-100 ml-60 relative rounded-xl cursor-pointer flex items-center justify-center border-4 border-dashed border-amber-400">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleFileChange(
                      e,
                      reprocessCategoryString(category3[0]),
                      category3[1],
                      category3[2]
                    )
                  }
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="text-amber-400">
                  <div className="flex items-center justify-center">
                    <LuUpload className="w-14 h-16 mb-4 text-amber-400" />
                  </div>
                  Upload Image
                </div>
              </div>
            </div>
            <MdArrowCircleLeft
              onClick={prevSlide3}
              className="absolute top-20 mt-4 -left-0.5 w-9 cursor-pointer h-10 text-amber-500"
            />
            <MdArrowCircleRight
              onClick={() =>
                nextSlide3(currentIndex3, setCurrentIndex3, category3)
              }
              className="absolute top-20 mt-4 w-9 h-10 cursor-pointer -right-0.5 text-amber-500"
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
              style={{
                transform: `translateX(-${
                  (currentIndex4 * 100) / (category4.length + 1)
                }%)`,
                width: `${(category4.length + 1) * 20}%`,
              }}
            >
              {category4.slice(3).map((image, index) => (
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
              <div className="w-60 h-100 ml-60 relative rounded-xl cursor-pointer flex items-center justify-center border-4 border-dashed border-amber-400">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleFileChange(
                      e,
                      reprocessCategoryString(category4[0]),
                      category4[1],
                      category4[2]
                    )
                  }
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="text-amber-400">
                  <div className="flex items-center justify-center">
                    <LuUpload className="w-14 h-16 mb-4 text-amber-400" />
                  </div>
                  Upload Image
                </div>
              </div>
            </div>
            <MdArrowCircleLeft
              onClick={prevSlide4}
              className="absolute top-20 mt-4 -left-0.5 w-9 cursor-pointer h-10 text-amber-500"
            />
            <MdArrowCircleRight
              onClick={() =>
                nextSlide4(currentIndex4, setCurrentIndex4, category4)
              }
              className="absolute top-20 mt-4 w-9 h-10 cursor-pointer -right-0.5 text-amber-500"
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
              style={{
                transform: `translateX(-${
                  (currentIndex5 * 100) / (category5.length + 1)
                }%)`,
                width: `${(category5.length + 1) * 20}%`,
              }}
            >
              {category5.slice(3).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={`w-60 h-60 rounded-lg cursor-pointer ${
                    index === currentIndex5
                      ? 'translate-x-60'
                      : 'translate-x-full'
                  }`}
                  alt={`Slide ${index}`}
                  onClick={() => handleClick(image)}
                />
              ))}
              <div className="w-60 h-100 ml-60 relative rounded-xl cursor-pointer flex items-center justify-center border-4 border-dashed border-amber-400">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleFileChange(
                      e,
                      reprocessCategoryString(category5[0]),
                      category5[1],
                      category5[2]
                    )
                  }
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="text-amber-400">
                  <div className="flex items-center justify-center">
                    <LuUpload className="w-14 h-16 mb-4 text-amber-400" />
                  </div>
                  Upload Image
                </div>
              </div>
            </div>
            <MdArrowCircleLeft
              onClick={prevSlide4}
              className="absolute top-20 mt-4 -left-0.5 w-9 cursor-pointer h-10 text-amber-500"
            />
            <MdArrowCircleRight
              onClick={() =>
                nextSlide4(currentIndex5, setCurrentIndex5, category5)
              }
              className="absolute top-20 mt-4 w-9 h-10 cursor-pointer -right-0.5 text-amber-500"
            />
          </div>
        </div>
      )}
      <div className="pt-16 pb-4 px-10">
        <div className="flex">
          <button
            onClick={handleCategory}
            className="text-amber-500 px-2 rounded-md flex"
          >
            <MdAdd className="w-10 h-9 text-amber-500" />
            Add New Category
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-amber-100 p-8 rounded-xl shadow-lg text-center">
            <p className="px-2">Delete this image?</p>
            <div className="flex pt-8 px-20">
              <button
                onClick={handleDelete}
                className="bg-red-600 rounded-2xl text-white text-xl p-3 pb-10 px-4 h-12 w-36"
              >
                {showSpin ? (
                  <div className="flex text-sm px-1.5 py-1">
                    Deleting...
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 px-2 ml-4 border-b-2 border-r-2 border-white"></div>
                  </div>
                ) : (
                  <div className="m"> Delete</div>
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
      {showPopup2 && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-amber-100 p-8 rounded-xl shadow-lg text-center">
            <p className="px-2">Add a new Category:</p>
            <div className="py-4">
              <input
                type="text"
                id="category"
                onChange={(e) => setCategoryname(e.target.value)}
                className="bg-amber-100 text-lg border-2 border-amber-500 my-2 focus:border-amber-600 placeholder:text-amber-500 rounded-xl block w-full ps-4 p-2.5 text-amber-600"
                placeholder="Category Name"
                required
              />
              <input
                type="text"
                id="categoryType"
                onChange={(e) => setCategorytype(e.target.value)}
                className="bg-amber-100 text-lg border-2 border-amber-500 my-2 focus:border-amber-600 placeholder:text-amber-500 rounded-xl block w-full ps-4 p-2.5 text-amber-600"
                placeholder="Category Type"
                required
              />
              <input
                type="date"
                id="categoryDate"
                onChange={(e) => setCategorydate(e.target.value)}
                className="bg-amber-100 text-lg border-2 border-amber-500 my-2 focus:border-amber-600 rounded-xl block w-full ps-4 p-2.5 text-amber-600"
                required
              />
              <div className="pt-4 pb-2 relative">
                <input
                  type="file"
                  name="file"
                  id="file"
                  accept="image/*"
                  formEncType="multipart/form-data"
                  onChange={handleFileChange2}
                  className="text-lg absolute opacity-0 inset-0 cursor-pointer"
                />
                <div className="flex px-4">
                  <LuUpload className="w-10 h-10 mb-4 text-amber-400" />
                  <span className="text-amber-500 px-2 pt-2 text-xl">
                    {filename}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex items-start justify-start px-2 mt-2 h-14 w-36">
                <button
                  onClick={handleSubmit}
                  className="bg-amber-500 rounded-2xl text-white text-xl p-2 px-3"
                >
                  {showSpin ? (
                    <div className="flex text-sm">
                      Uploading image...
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 px-2 ml-4 mt-2.5 border-b-2 border-r-2 border-white"></div>
                    </div>
                  ) : (
                    <div className="px-2 py-1"> Submit</div>
                  )}
                </button>
              </div>
              <div className="flex w-full justify-end items-end mb-4">
                <button className="text-lg" onClick={onClick}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Listings
