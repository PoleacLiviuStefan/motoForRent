import React from 'react'
import { useState } from 'react'
import {GiPathDistance} from 'react-icons/gi'
import moto1 from '../Motorcycles/Images/moto1.jpeg'
import {AiOutlineCheckSquare} from 'react-icons/ai'
import {MdArrowForwardIos} from 'react-icons/md'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
const Tururi = () => {
  const [showText,setShowText]=useState(1)
  return (
    <div name="Tururi" className='relative flex flex-col items-center w-full h-[100rem] lg:h-[80rem]    '>
      <Fade top>
        <div className='flex items-center justify-center w-full' >
          <span className='w-[20%] h-[3px] bg-black mr-[2rem] ' />
          <span className='text-[80px] lg:text-[150px] ' ><GiPathDistance /></span>
          <span className='w-[20%] h-[3px] bg-black rounded-[2px] ml-[2rem]' />
        </div>
      </Fade>
      <Fade top>
        <h1 className='text-[28px] mt-[1rem] w-[70%] lg:w-full lg:text-center text-left lg:text-[56px] font-[800]'>CURSURI DE PERFECTIONARE</h1>
        </Fade> 
        <Fade bottom>
        <div className='w-[80%] lg:w-[60%] mt-[2rem]'>
          <div className='flex lg:flex-row flex-col'>
        <img src={moto1} className="w-[350px]" />
        <div className='text-gray-500 mt-[2rem] lg:mt-0 lg:ml-[2rem]'>
            <h3 className='text-black font-extrabold text-[28px] lg:text-[32px]'>ROMANIA</h3>
            <ul className='text-black font-bold  text-[24px] mt-[1rem] '>
              <li  className='relative flex flex-col  w-[20rem]'>
                <div onClick={()=>{
                if(showText==1)
                  setShowText(-1)
                  else
                setShowText(1)
                
                }} className='flex items-center cursor-pointer'><span className='text-[#F9844A] text-[20px] mr-2'><AiOutlineCheckSquare /></span> Tura De Weekend <span className={`absolute right-0 ${showText==1 ? "animate-[rotateArrow_.5s_ease-in-out_forwards]" :"animate-[reverseRotateArrow_.5s_ease-in-out_forwards]"}`}><MdArrowForwardIos /></span>
                </div>
                <p className={`${showText!=1 ? "hidden" : "animate-[appearText_.5s_ease-in-out_forwards]"}   text-[14px] lg:text-[16px] mt-[.5rem] text-gray-600 font-[300] `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt dignissimos perferendis impedit, veritatis eos obcaecati pariatur maiores explicabo asperiores excepturi doloribus praesentium error minus temporibus voluptas odit in distinctio?</p>
              </li>
              <li  className='relative flex flex-col mt-[1rem] w-[20rem]'>
                <div onClick={()=>{
                if(showText==2)
                  setShowText(-1)
                  else
                setShowText(2)
                
                }} className='flex items-center cursor-pointer'> <span className='text-[#F9844A] text-[20px] mr-2 '><AiOutlineCheckSquare /></span > Tura De O Zi <span className={`absolute right-0  ${showText==2 ? "animate-[rotateArrow_.5s_ease-in-out_forwards]" :"animate-[reverseRotateArrow_.5s_ease-in-out_forwards]"} `}><MdArrowForwardIos /></span></div>
                <p className={`${showText!=2 ? "hidden" : "animate-[appearText_.5s_ease-in-out_forwards]"}  text-[14px] lg:text-[16px] mt-[.5rem] text-gray-600 font-[300] `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt dignissimos perferendis impedit, veritatis eos obcaecati pariatur maiores explicabo asperiores excepturi doloribus praesentium error minus temporibus voluptas odit in distinctio?</p>
              </li>
              <li  className='relative flex flex-col mt-[1rem] w-[20rem]'>
                  <div onClick={()=>{
                  if(showText==3)
                    setShowText(-1)
                    else
                setShowText(3)}} className='flex items-center cursor-pointer'>
                     <span className='text-[#F9844A] text-[20px] mr-2'><AiOutlineCheckSquare /></span> Tura Urbana <span className={`absolute right-0   ${showText==3 ? "animate-[rotateArrow_.5s_ease-in-out_forwards]" :"animate-[reverseRotateArrow_.5s_ease-in-out_forwards]"}`}><MdArrowForwardIos /></span>
                  </div>
                  <p className={`${showText!=3 ? "hidden":"animate-[appearText_.5s_ease-in-out_forwards]"}  text-[14px] lg:text-[16px] mt-[.5rem] text-gray-600 font-[300]  `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt dignissimos perferendis impedit, veritatis eos obcaecati pariatur maiores explicabo asperiores excepturi doloribus praesentium error minus temporibus voluptas odit in distinctio?</p>
                 </li>

            </ul>
      
       
         </div>
          </div>
        
        </div>
        </Fade>
      <div className='relative   h-full w-full mt-[10rem] h-[20rem] ' >
          <div className='absolute  flex justify-center items-center top-0 bg-fixed w-full h-[20rem] bg-fixedimg bg-cover' >
          <div className='absolute z-10 top-0 bg-black bg-opacity-40 w-full h-[20rem]' />
            <Fade>
              <h3 className='relative  w-[18rem] lg:w-[40rem]  z-40  text-[28px] lg:text-[38px] font-bold text-left  text-white'>ITI OFERIM O EXPERIENTA UNICA</h3>
            </Fade>
            </div>
          
      </div>
    </div>
  )
}

export default Tururi