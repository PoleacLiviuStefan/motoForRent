import React from 'react'
import About from '../About/About'
import Footer from '../Footer/Footer'
import EtapeInchiriere from '../Motorcycles/EtapeInchiriere'
import Motorcycles from '../Motorcycles/Motorcycles'
import Tururi from "../Tururi/Tururi"
const Body = () => {
  return (
    <div className='relative flex flex-col items-center bg-white w-full h-[450rem] lg:h-[300rem] top-[15rem] lg:top-0'>
        <Motorcycles />
        <EtapeInchiriere />
        <Tururi />
        <About />
        <Footer />
    </div>
  )
}

export default Body