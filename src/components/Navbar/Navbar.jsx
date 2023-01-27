import React from 'react'
import { useState } from 'react'
import {AiOutlinePhone} from 'react-icons/ai'
import {MdArrowForwardIos} from 'react-icons/md'
import {FaMotorcycle} from 'react-icons/fa'
import {AiFillQuestionCircle} from 'react-icons/ai'
import {GiCartwheel} from 'react-icons/gi'
import logo from './logo.png'
const Navbar = () => {

  const [activeMobileMenu,setActiveMobileMenu]=useState(false)

 

  return (
    <div className='fixed flex z-50 justify-center items-center top-0 left-0 w-full h-[5rem] bg-white '>

        <img src className='lg:absolute z-30 lg:right-[4rem] w-[120px] h-[55px] ' src={logo} />
        <div className='absolute top-0 z-20 lg:hidden bg-white h-[5rem] w-full' />
        <div className=' hidden lg:flex left-[2rem] w-[30rem] justify-between ' >
        <button className='flex'>DESPRE <span className=' ml-2 text-[25px]'><AiFillQuestionCircle /></span></button>
        <button className='flex'>MOTOCICLETE <span className='  ml-2 text-[25px]'><FaMotorcycle /></span></button>
        <button className='flex'>TURURI GHIDATE <span className='  text-[25px] ml-2'><GiCartwheel /></span></button>
        </div>
        <div onClick={()=>{setActiveMobileMenu(prev=>!prev)}} className='fixed z-20 lg:hidden left-[2rem] top-[2rem] flex flex-col  z-50  '>
            <div className={`absolute z-20 top-[-1rem] left-[-.7rem] rounded-[15px]  w-[50px] h-[50px] ${activeMobileMenu ? "bg-black":"bg-transparent"}`} >
                <div  className='w-full h-full z-50' />
              </div>
            <div className={`absolute z-20 w-[1.7rem]  h-[3px] bg-black ${activeMobileMenu ? "animate-[rotatearrowtop_.3s_linear_forwards] ":"animate-[revertrotatearrowtop_.3s_linear_forwards]"}`}/>
            <div className={`absolute z-20 w-[1.7rem] h-[3px] top-[4px] bg-black mt-[5px] ${activeMobileMenu ? "animate-[rotatearrow_.3s_linear_forwards]":"animate-[revertrotatearrow_.3s_linear_forwards] " }`}/>
            <div className={`absolute z-20 top-[13px] w-[1.7rem] h-[3px] bg-black mt-[5px] ${activeMobileMenu ? "animate-[animarrowbottom_.3s_linear_forwards]":"animate-[revertanimarrowbottom_.3s_linear_forwards]"}`}/>
         
        </div>
        <div className={`absolute z-20 text-black  text-[18px] tracking-[1.5px] flex justify-center items-center bottom-[-2rem] left-0 bg-[#EEEEEE] h-[2rem] w-full`}>
        <a href="tel:+40-751-030-171" className='flex'> <span className='mr-2  text-[20px]'><AiOutlinePhone /></span>0751030171</a>
        </div>
        <div className={`fixed ${activeMobileMenu ? "animate-[appearMenu_.5s_ease-in-out_forwards]":"animate-[reverseAppearMenu_.5s_ease-in-out_forwards]"}  bg-white w-full h-[11rem] left-0 `} >
          <div className='absolute flex flex-col lg:hidden left-[33%] text-left w-full h-[9rem]  justify-between ' >
            <button className='flex mt-[1.5rem] '><span className=' mr-2 text-[25px]'><AiFillQuestionCircle /></span>DESPRE </button>
            <button className='flex '><span className='  mr-2 text-[25px]'><FaMotorcycle /></span>MOTOCICLETE </button>
            <button className='flex'><span className='  text-[25px] mr-2'><GiCartwheel /></span>TURURI GHIDATE </button>
          </div>
        </div>
    </div>
  )
}

export default Navbar