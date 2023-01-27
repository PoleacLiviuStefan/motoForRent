import React from 'react'
import About from '../About/About'
import Motorcycles from '../Motorcycles/Motorcycles'

const Body = () => {
  return (
    <div className='relative bg-white w-full h-[200rem] top-[15rem] lg:top-[4rem]'>
        <About />
        <Motorcycles />
    </div>
  )
}

export default Body