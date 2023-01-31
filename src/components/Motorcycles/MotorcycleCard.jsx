import React from 'react'
import {RiMotorbikeFill} from 'react-icons/ri'
import {TbEngine} from 'react-icons/tb'
import {RiOilFill} from 'react-icons/ri'
import {MdArrowForwardIos} from 'react-icons/md'

const MotorcycleCard = ({name,image,pret,an,cp,rezervor,cmc}) => {
  return (
    <div className='relative bg-white h-[34rem] lg:h-[37rem] w-full lg:w-[30rem] flex flex-col  items-center mt-[3rem] lg:mt-0 lg:ml-[3rem] '>
          <div className='relative  h-[343px] lg:h-[25rem]'>
           <img className='w-[300px] lg:w-[350px] h-[343px] lg:h-[400px] ' src={image} />
          </div>
          <h2 className='text-black lg:text-[32px] text-[28px] font-bold ' >{name}</h2>
          <h3 className='lg:text-[18px] mt-[0rem]'>{pret} € /zi</h3>
          <div className='flex w-[80%] justify-between text-[11px] lg:text-[14px] '>
            <div className='flex '><span className='mr-2 mt-1 text-[#F9844A] '><RiMotorbikeFill /></span> {an}</div>
            <div className='flex'><span className='mr-2 mt-1 text-[#F9844A]'><TbEngine /></span> {cp} CP</div>
            <div className='flex'><span className='mr-1 mt-1 text-[#F9844A]'><RiOilFill /></span> {rezervor} l rezervor combustibil</div>
            <div className='flex'><span className='mr-1 mt-1 text-[#F9844A]'><TbEngine /></span> {rezervor} cmc</div>
          </div>
          <button className='absolute flex justify-center items-center tracking-[2px] font-bold bottom-0 bg-[#F9844A] rounded-[2px] w-full h-[4rem] text-white animate-[reverseRezervaHoverBtn_.5s_ease-in-out_forwards] hover:animate-[rezervaHoverBtn_.5s_ease-in-out_forwards] text-[14px]'>
            REZERVA ACUM <span className="text-[20px]"><MdArrowForwardIos /></span>

          </button>
    </div>
  )
}

export default MotorcycleCard