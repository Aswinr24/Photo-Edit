import React from 'react'
import Navbar from '../components/Navbar'
import '../.././app/styles.css'

const page = () => {
  const downloads = [
    '/liverDay.jpg',
    '/heritageDay.jpg',
    '/labor_day.jpg',
    '/labor_day3.jpg',
    '/Ramanavami_kannada.jpg',
    '/Ramanavami2.jpg',
  ]

  const saved = [
    '/liverDay2.jpg',
    '/heritageDay2.jpg',
    '/labor_day2.jpg',
    '/labor_day6.jpg',
  ]

  return (
    <>
      <Navbar />
      <main className="bg-purple-50 py-4 pl-6">
        <div className="flex-col columns-2">
          <div className="px-2">
            <h1 className="text-2xl px-6 py-4 text-black">
              Your Businesseses:
            </h1>
            <div className="px-10 text-xl flex">
              <h1 className="text-purple-500 mt-0.5">Next Associates</h1>
              <div className="px-4">
                <button className="rounded-2xl p-2 text-xs border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition delay-100">
                  + Add another Business
                </button>
              </div>
            </div>
          </div>
          <div className="px-2 py-4 flex pl-4 ml-16">
            <h1 className="text-xl mt-9">Logos: </h1>
            <div className="py-2 mx-4 flex gap-4">
              <img src="/logo.png" className="w-36 h-20 mt-2" />
              <div className="grid grid-rows-2 gap-4 mb-1">
                <button className="w-28 h-10 rounded-2xl bg-gray-300 p-1 text-xs text-purple-700 hover:bg-purple-500 hover:text-white transition delay-50">
                  + Add logo
                </button>
                <button className="w-28 h-10 rounded-2xl bg-gray-300 p-0 text-xs text-purple-700 hover:bg-purple-500 hover:text-white transition delay-50">
                  - Remove logo
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 px-8 flex gap-10">
          <div>
            <h1 className="text-xl text-black">Downloads / Selections : </h1>
            <div className="py-4 px-4 flex-col columns-3 gap-6">
              {downloads.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={`w-48 h-48 mb-6 rounded-lg cursor-pointer `}
                  alt={`Slide ${index}`}
                />
              ))}
            </div>
          </div>
          <div className="px-6 ml-6">
            <h1 className="text-xl ml-16 text-black">Saved Images: </h1>
            <div className="py-4 px-4 flex-col ml-20 columns-2 gap-6">
              {saved.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={`w-48 h-48 mb-6 rounded-lg cursor-pointer `}
                  alt={`Slide ${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default page
