import React, { useEffect, useState } from 'react'

const Navbar = () => {

  const [first, setfirst] = useState([])

  const fetchdata = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/photos")
    let data = await a.json()
    setfirst(data)
    console.log(data)
  }

  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <div className='min-h-screen bg-gray-100'>

      {/* Navbar */}
      <ul className='first flex items-center justify-between bg-blue-800 text-white px-6 py-3 '>

        {/* Logo */}
        <li>
          <img
            src="favicon.svg"
            alt="logo"
            className='w-10 h-10'
          />
        </li>

        {/* Links */}
        <div className='flex gap-8 font-semibold'>
          <li className='cursor-pointer hover:text-gray-300'>Home</li>
          <li className='cursor-pointer hover:text-gray-300'>About</li>
          <li className='cursor-pointer hover:text-gray-300'>Contact Us</li>
        </div>

      </ul>
      <div className="shop my-auto text-5xl py-6">Shop Now...</div>

      {/* Cards */}
      <div className='container my-36 mx-auto p-6 ml-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-fit mt-20' >

        {first.map((card) => {

          return (
            <div
              key={card.id}
              className='bg-white mb-4 rounded-xl shadow-md p-4 hover:shadow-xl transition'
            >

              <img
                src={card.thumbnailUrl}
                alt={card.title}
                className='w-full h-48 object-cover rounded-lg'
              />

              <h1 className='text-lg font-bold text-gray-800 mt-4'>
                {card.title}
              </h1>

              <p className='text-gray-500 mt-2'>
                Album ID: {card.albumId}
              </p>

              <p className='text-blue-600 font-semibold mt-2'>
                Photo ID: {card.id}
              </p>

            </div>
          )

        })}

      </div>

    </div>
  )
}

export default Navbar