import React from 'react'
import { useState } from 'react'
import {GiPathDistance} from 'react-icons/gi'
import moto1 from '../Motorcycles/Images/moto1.jpeg'
import {AiOutlineCheckSquare} from 'react-icons/ai'
import {MdArrowForwardIos} from 'react-icons/md'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
const Tururi = () => {
  const [showText,setShowText]=useState(2)
  return (
    <div name="Tururi" className='relative mt-[5rem] flex flex-col items-center w-full h-[100rem] lg:h-[80rem]    '>
      <Fade top>
        <div className='flex items-center justify-center w-full' >
          <span className='w-[20%] h-[3px] bg-black mr-[2rem] ' />
          <span className='text-[80px] lg:text-[150px] ' ><GiPathDistance /></span>
          <span className='w-[20%] h-[3px] bg-black rounded-[2px] ml-[2rem]' />
        </div>
      </Fade>
      <Fade top>
        <h2 className='text-[28px] mt-[1rem] w-[70%] lg:w-full text-center text-left lg:text-[56px] font-[800]'>CURSURI DE PERFECTIONARE</h2>
        </Fade> 
        <Fade bottom>
        <div className='w-[80%] lg:w-[60%] mt-[2rem]'>
          <div className='flex lg:flex-row flex-col items-center justify-center'>
        <img src={moto1} className="w-[350px]" alt="motocicleta Kawasaki Versys" />
        <div className='text-gray-500 mt-[2rem] lg:mt-0 lg:ml-[2rem]'>
            <h2 className='text-black font-extrabold text-[28px] lg:text-[32px]'>ROMANIA</h2>
            <ul className='text-black font-bold  text-[24px] mt-[1rem] '>
              <li  className='relative flex flex-col  w-[20rem]'>
                <div  className='flex items-center cursor-pointer'><span className='text-[#F9844A] text-[20px] mr-2'><AiOutlineCheckSquare /></span> Tura De Weekend <span className={`absolute right-0 ${showText==1 ? "animate-[rotateArrow_.5s_ease-in-out_forwards]" :"animate-[reverseRotateArrow_.5s_ease-in-out_forwards]"}`}><MdArrowForwardIos /></span>
                </div>
                <p className={`${showText!=1 ? "hidden" : "animate-[appearText_.5s_ease-in-out_forwards]"}   text-[14px] lg:text-[16px] mt-[.5rem] text-gray-600 font-[300] `}></p>
              </li>
              <li  className='relative flex flex-col mt-[1rem] w-[20rem]'>
                <div onClick={()=>setShowText(2)}  className='flex items-center cursor-pointer'> <span className='text-[#F9844A] text-[20px] mr-2 '><AiOutlineCheckSquare /></span > Tura De O Zi <span className={`absolute right-0  ${showText==2 ? "animate-[rotateArrow_.5s_ease-in-out_forwards]" :"animate-[reverseRotateArrow_.5s_ease-in-out_forwards]"} `}><MdArrowForwardIos /></span></div>
                <p className={`${showText!=2 ? "hidden" : "animate-[appearText_.5s_ease-in-out_forwards]"}  text-[14px] lg:text-[16px] mt-[.5rem] text-gray-600 font-[300] `}>
                <span className='font-bold text-[18px]'>Tură de o zi în care veti invata :</span>
                <br />Abordarea virajelor
                <br />Franarea corecta la viteze ridicate
                <br />Franarea corecta in viraje
                <br />Incadrarea corectă pe banda
                <br />Efectuarea depasirilor în siguranta
                <br />Folosirea corecta a treptelor de viteza
                <br />Mersul în grup
                <br /><span className='font-bold text-[18px]'>Pret </span> : 1000 lei cu motocicleta personala !

                </p>
              </li>
              <li  className='relative flex flex-col mt-[1rem] w-[20rem]'>
                  <div onClick={()=>setShowText(3)}  className='flex items-center cursor-pointer'>
                     <span className='text-[#F9844A] text-[20px] mr-2'><AiOutlineCheckSquare /></span> Tura Urbana <span className={`absolute right-0   ${showText==3 ? "animate-[rotateArrow_.5s_ease-in-out_forwards]" :"animate-[reverseRotateArrow_.5s_ease-in-out_forwards]"}`}><MdArrowForwardIos /></span>
                  </div>
                    <p className={`${showText!=3 ? "hidden":"animate-[appearText_.5s_ease-in-out_forwards]"}  text-[14px] lg:text-[16px] mt-[.5rem] text-gray-600 font-[300]  `}>
                    <span className='font-bold text-[18px]'> Durata </span> : 4 ore
                    <br /> <span className='font-bold text-[18px]'>Pret </span> : 500 lei cu motocicleta personală!

                  </p>
                 </li>

            </ul>
      
       
         </div>
          </div>
        
        </div>
        </Fade>
      <div className='relative   h-full w-full mt-[10rem] h-[20rem] ' >
          <div className='absolute  flex justify-center items-center top-0 lg:bg-fixed w-full h-[20rem] bg-fixedimg bg-cover' >
          <div className='absolute z-10 top-0 bg-black bg-opacity-40 w-full h-full' />
            <Fade>
              <h3 className='relative  w-[18rem] lg:w-[40rem]  z-40  text-[28px] lg:text-[38px] font-bold text-left  text-white'>ITI OFERIM O EXPERIENTA UNICA</h3>
            </Fade>
            </div>
          
      </div>
    </div>
  )
}

export default Tururi