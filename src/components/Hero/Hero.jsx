import React from 'react'
import { useState } from 'react'
import {MdArrowForwardIos} from 'react-icons/md'
import slogan from './slogan.png'
const Hero = () => {
const [currentImage,setCurrentImage]=useState(0)
const images=["bg-hero"]
  return ( 
    <div name="Hero" className={`relative  bg-fixed ${images[currentImage]} flex justify-center bg-cover bg-center w-screen h-screen  `} >

      <div className='absolute bg-black  w-full h-full opacity-[15%]' />
      <div className='absolute w-full  top-0 h-full bg-gradient-to-r from-black to-transparent opacity-[25%]' />

      <img className=' lg:hidden absolute top-[10rem]   w-[95%] h-[73px]  ' src={slogan} alt="slogan"  />
        <div className=' absolute lg:relative bottom-[-16rem] lg:bottom-0 bg-black  lg:bg-transparent h-[28rem] lg:h-full   flex flex-col lg:items-left   text-white justify-center w-full   lg:left-[3rem] mt-[5rem]'>
        <img className=' hidden lg:block lg:relative  lg:top-[10rem]  w-[800px] h-[95px]  ' src={slogan} alt="slogan"  />
          <h3 className='text-white text-[32px] w-[20rem] lg:w-full lg:text-[38px]  lg:mt-[12rem] font-[800] ml-[2rem] lg:ml-0 text-left italic'>Fii un rider liber cu ajutorul nostru</h3>
          <p className='w-[20rem] lg:w-[32rem] ml-[2rem] lg:ml-[0rem] text-[20px] lg:text-[24px] font-[300]'>
            Haide chiar astazi sa inchiriezi o motocicleta !
          </p>

        <button className='  w-[10rem] mt-[1rem] ml-[2rem] lg:ml-0 shadow-md flex justify-center items-center rounded-[4px] h-[3.5rem] mb-[4rem] bg-white text-black font-bold animate-[unhoverbtn_.5s_ease-in-out_forwards] hover:animate-[hoverbtn_.5s_ease-in-out_forwards] ' >
            Inchiriaza acum <span className='mt-1 text-[18px]'><MdArrowForwardIos /></span>
        </button>
        <div className='relative flex left-[3rem] mb-[2rem] lg:mb-[6rem]   italic text-white text-[24px]'><span className='text-white rotate-[180deg] mb-[5px] mr-[10px] cursor-pointer' ><MdArrowForwardIos /></span> 0{currentImage+1}/0{images.length}<span className='text-white   ml-[10px] mt-[5px] cursor-pointer' ><MdArrowForwardIos /></span></div>
        </div>
       
        
    </div>
  )
}

export default Hero