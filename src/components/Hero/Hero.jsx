import React from 'react'
import { useState,useEffect } from 'react'
import {MdArrowForwardIos} from 'react-icons/md'
import slogan from './slogan.png'
import { Link, animateScroll as scroll } from "react-scroll";
import Fade from 'react-reveal/Fade';
const Hero = () => {
const [currentImage,setCurrentImage]=useState(0)
const [transitionImg,setTransitionImg]=useState(true)

const images=["bg-hero","bg-fixedimg"]

  return ( 
    <div name="Hero" className={`relative ${images[currentImage]} flex justify-center bg-cover bg-center w-screen h-screen  `} >

      <div className='absolute bg-black  w-full h-full opacity-[15%]' />
      <div className='absolute w-full  top-0 h-full bg-gradient-to-r from-black to-transparent opacity-[25%]' />
      
      <img className=' lg:hidden absolute top-[10rem]   w-[95%] h-[73px]  ' src={slogan} alt="slogan"  />
      
        <div className=' absolute lg:relative bottom-[-16rem] lg:bottom-0 bg-black  lg:bg-transparent h-[28rem] lg:h-full   flex flex-col lg:items-left   text-white justify-center w-full   lg:left-[3rem] mt-[5rem]'>
        <Fade left>
        <img className=' hidden lg:block lg:relative  lg:top-[10rem]  w-[800px] h-[95px]  ' src={slogan} alt="slogan"  />
        
          <h3 className='text-white  text-[28px] leading-[2rem] h-[7rem] w-[20rem] lg:w-[50%] lg:text-[34px]  lg:mt-[12rem] font-extrabold ml-[2rem] lg:ml-0 text-left italic'>{currentImage==0 ? "Motociclete de inchiriat in Bucuresti cu preturi incepand de la 50 € / zi" :"Fii un rider liber cu ajutorul nostru" }</h3>
          <p className='w-[20rem] lg:w-[32rem] ml-[2rem] lg:ml-[0rem] text-[20px] lg:text-[24px] font-[300]'>
            {currentImage==0 ?"Fara limita de kilometri pe teritoriul Romaniei" :"Haide chiar astazi sa inchiriezi o motocicleta !"}
          </p>
          <Link
            activeClass="active"
            to="Motorcycles"
            spy={true}
            smooth={true}
            offset={-100}
            href="Motociclete"
            delay={500}
          >
        <button className='  w-[10rem] mt-[1rem] ml-[2rem] lg:ml-0 shadow-md flex justify-center items-center rounded-[4px] h-[3.5rem] mb-[4rem] bg-white text-black font-bold animate-[unhoverbtn_.5s_ease-in-out_forwards] hover:animate-[hoverbtn_.5s_ease-in-out_forwards] ' >
      
            Inchiriaza acum <span className='mt-1 text-[18px]'><MdArrowForwardIos /></span>
            
        </button>
        </Link>
        <div className='relative flex left-[3rem] mb-[2rem] lg:mb-[6rem]   italic text-white text-[24px]'><span onClick={()=>{
          if(currentImage>0)
          setCurrentImage(prev=>prev-=1)
          else
          setCurrentImage(images.length-1)
          setTransitionImg(false)
        }} className='text-white rotate-[180deg] mb-[5px] mr-[10px] cursor-pointer' ><MdArrowForwardIos /></span> 0{currentImage+1}/0{images.length}<span onClick={()=>{
          if(currentImage<images.length-1)
          setCurrentImage(prev=>prev+=1)
          else
          setCurrentImage(0)
          setTransitionImg(false)
        }} className='text-white   ml-[10px] mt-[5px] cursor-pointer' ><MdArrowForwardIos /></span></div>
        </Fade>
        </div>
       
       
    </div>
  )
}

export default Hero