import React from 'react'
import About from '../About/About'
import Motorcycles from '../Motorcycles/Motorcycles'
import Tururi from "../Tururi/Tururi"
const Body = () => {
  return (
    <div className='relative flex flex-col items-center bg-white w-full h-[200rem] top-[15rem] lg:top-0'>
        <Motorcycles />
        <Tururi />
        <About />
        
    </div>
  )
}

export default Body