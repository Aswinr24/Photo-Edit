import React from 'react'

const Popup = ({ onClick }) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-amber-100 p-8 rounded-xl shadow-lg text-center">
        <p className="px-2">Add a new Category?</p>
        <div className="py-4">
          <input
            type="text"
            id="category"
            onChange={(e) => setCategoryname(e.target.value)}
            className="bg-violet-200 border my-2 border-gray-300 focus:border-purple-600 text-black  placeholder:text-purple-500 text-md rounded-xl block w-full ps-4 p-2.5"
            placeholder="Category Name"
            required
          />
        </div>
        <div className="flex pt-8 px-20">
          <button
            //onClick={handleDelete}
            className="bg-red-600 rounded-2xl text-white text-xl p-3 px-4"
          ></button>
          <button className="text-lg pl-6" onClick={onClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup
