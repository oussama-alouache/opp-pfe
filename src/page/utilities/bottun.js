import React from 'react'

export default function Button(props) {
  return (
    <button className=' bg-indigo-700 text-white py-2 px-6 rounded-lg md:ml-8 hover:bg-indigo-300 duration-300 '>
   {props.children}

    </button>
  )
}
