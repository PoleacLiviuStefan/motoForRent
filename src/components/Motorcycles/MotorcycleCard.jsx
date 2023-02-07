import React from 'react'
import {RiMotorbikeFill} from 'react-icons/ri'
import {TbEngine} from 'react-icons/tb'
import {RiOilFill} from 'react-icons/ri'
import {MdArrowForwardIos} from 'react-icons/md'
import { Route, Routes } from "react-router-dom"
import Fade from 'react-reveal/Fade';
const MotorcycleCard = ({name,image,pret,an,cp,rezervor,cmc}) => {
  return (
    <Fade bottom>
    <div onClick={()=>{window.scrollTo({top: 0, left: 0})}} className='relative bg-white h-[34rem] lg:h-[37rem] w-full lg:w-[30rem] flex flex-col  items-center mt-[3rem] lg:mt-0  '>
          <div className='relative  h-[343px] lg:h-[25rem]'>
           <img className='w-[300px] lg:w-[350px] h-[343px] lg:h-[400px] scale-100 hover:scale-110 transition-all duration-500 cursor-pointer' src={image} />
          </div>
          <h2 className='text-black lg:text-[28px] text-[24px] font-bold ' >{name}</h2>
          <h3 className='lg:text-[18px] mt-[0rem]'>{pret} € /zi</h3>
          <div className='flex w-full justify-between text-[11px] lg:text-[14px] '>
            <div className='flex '><span className='mr-2 mt-1 text-[#F9844A] '><RiMotorbikeFill /></span> {an}</div>
            <div className='flex'><span className='mr-2 mt-1 text-[#F9844A]'><TbEngine /></span> {cp} CP</div>
            <div className='flex'><span className='mr-1 mt-1 text-[#F9844A]'><RiOilFill /></span> {rezervor} l rezervor combustibil</div>
            <div className='flex'><span className='mr-1 mt-1 text-[#F9844A]'><TbEngine /></span> {rezervor} cmc</div>
          </div>
          <button className='absolute flex justify-center items-center tracking-[2px] font-bold bottom-0 bg-[#F9844A] rounded-[5px] w-full h-[4rem] text-white animate-[reverseRezervaHoverBtn_.5s_ease-in-out_forwards] hover:animate-[rezervaHoverBtn_.5s_ease-in-out_forwards] text-[14px]'>
            REZERVA ACUM <span className="text-[20px]"><MdArrowForwardIos /></span>

          </button>
    </div>
    </Fade>
  )
}

export default MotorcycleCard