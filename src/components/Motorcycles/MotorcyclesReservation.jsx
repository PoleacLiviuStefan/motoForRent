import React from 'react'
import { useState,useEffect,useRef,useTimeout } from 'react'
import helmet from "./Images/helmet.png"
import cagula from "./Images/cagula.png"
import manusi from './Images/manusi.png'
import genunchiere from './Images/genunchiere.png'
import topCaseImg from './Images/topCase.png'
import gentiLateraleImg from './Images/gentiLaterale.png'
import {AiOutlinePhone} from 'react-icons/ai'
import Fade from 'react-reveal/Fade';

const MotorcyclesReservation = ({locked,name,imagini,preturi,descriere,an,cp,rezervor,cmc,greutate,garantie,transmisie,autonomie,abs,inaltime,topCase,gentiLaterale=false}) => {
  
  const [currentImage,setCurrentImage]=useState(0)
  const[animateImg,setAnimateImg]=useState(false)
  const [btnText,setBtnText]=useState("Suna Acum")


  return (
    <div className="relative bg-gray-100  left-0 top-[7rem] lg:top-0  w-full  h-[137rem] lg:h-[130rem] flex justify-center   ">
      <div className='relative mt-[15rem] lg:mt-[3rem] flex flex-col z-40 lg:flex-row justify-center lg:items-center  w-full lg:w-[80%] h-[90rem]  ' >
        <div className='  flex flex-col justify-end items-center h-[44%]  w-full'>
         <img  className={`relative lg:absolute  lg:top-[7rem] w-[300px] lg:w-[500px] h-[343px] lg:h-[571px] ${animateImg && "animate-[appear_1s_ease-in-out_forwards]"} `} src={imagini[currentImage]} />
         
         <div className='flex'>
         {
          imagini.map((imagine,value)=>{
            return <><div onClick={()=>{setCurrentImage(value); setAnimateImg(true);}} className={`flex justify-center mr-[1px] items-center cursor-pointer w-[70px] lg:w-[120px] h-[79px] lg:h-[139px] ${currentImage==value && "border-[1px] border-[#F9844A]"}`}><img className=' w-[70px] lg:w-[120px] h-[79px] lg:h-[137px]  ' src={imagini[value]} /></div></>
          })
         }
         </div>
         <Fade bottom>
            <div className='relative   text-[20px] lg:text-[24px] text-white mt-[1rem]'  >
                {
                  preturi.map((pret,index)=>{
                    return <> <h3 className='flex rounded-[5px] text-[18px] justify-between items-center px-4 w-[20rem] h-[3rem] mt-[.5rem] bg-gradient-to-r from-[#F9844A] to-[#FF712B] '>{index==0 ? "Mai putin de 3 zile" : "Mai mult de 3 zile"} <span className='absolute font-bold right-4  text-[28px] lg:text-[32px]  '>{pret} € / <sub>zi</sub> </span></h3></>
                  })
                }
                <h3 className='absolute flex rounded-[5px]  lg:text-[20px] justify-center items-center px-4 w-[20rem] h-[3rem] mt-[.5rem] bg-gray-400 '>GARANTIE :  <span className='font-bold ml-2'> {garantie} €</span>  </h3>
            </div>
            </Fade>
         </div>
         <Fade right>
          <div className='relative flex flex-col  items-center   mt-[2rem] justify-start h-[80%] lg:h-[70%] w-full lg:w-[70%] ' >
            <h1 className='lg:text-[38px] mt-[4rem] lg:mt-[2rem]  text-[32px] font-bold text-center w-full'>{name}</h1>
            <p className='lg:text-[16px] mt-[1rem] text-gray-500 text-[14px] w-[80%]  text-left'>
            {descriere}
            </p>
            <h2 className='text-[32px] lg:text-[38px]  font-bold mt-[2rem]'>Detalii tehnice</h2>
            <div className='relative mt-[1rem] text-[14px] text-center lg:text-[18px] grid grid-cols-2 place-items-center bg-gray-50 rounded-[8px]  h-[20rem] w-[90%]'>
                <h3 className='' >Motor :<span className='font-bold'> {cmc} cmc , {cp} cp</span></h3>
                <h3>An Fabricatie : <span className='font-bold'>{an}</span> </h3>
                <h3>Capacitate Rezervor :<span className='font-bold'> {rezervor} l</span> </h3>
                <h3>Greutate :<span className='font-bold'> {greutate} kg </span></h3>
                <h3>Transmisie :<span className='font-bold'> {transmisie} trepte </span> </h3>
                <h3>Autonomie : <span className='font-bold'>{autonomie} km  </span></h3>
                <h3>ABS : <span className='font-bold'> {abs} </span>  </h3>
                <h3>Inaltime :<span className='font-bold'>  {inaltime} mm </span>  </h3>
            </div>
            <div onClick={()=>setBtnText("0751030171")}  className='relative mb-[2rem] flex flex-col items-center justify-center cursor-pointer border-[2px] border-[#FF712B] mt-[1rem] text-white bg-[#FF712B] w-[90%] h-[4rem] rounded-[5px] animate-[reverseAnimContact_.5s_ease-in-out_forwards] hover:animate-[animContact_.5s_ease-in-out_forwards]'>
              <a href="tel:+40-751-030-171" className='font-bold text-[18px] lg:text-[22px] flex' >{btnText=="0751030171" && <span className='mt-1 mr-2'><AiOutlinePhone /></span>} {btnText}</a>
            </div>
            <h3 className='lg:text-[22px] text-[18px]'>Relatii cu clientii <span className='font-bold'  > 24/7</span></h3>
          </div>
          </Fade>
          <Fade bottom>
          <div className='relative lg:absolute  lg:top-[75rem] z-40 flex flex-col items-center w-full  bg-gray-100 h-[50rem] w-full'>
             
              <h2 className='relative text-[38px] lg:text-[48px] bg-black text-white px-4  font-bold mt-[6rem] lg:mt-[2rem]'> <span  className='absolute top-[-1.2rem] lg:top-[-1.5rem] z-10  w-[19rem] lg:w-[24rem] h-[4.5rem] lg:h-[5.7rem] bg-transparent border-[2px] border-black' /> <span className='z-20'>Ce Mai Oferim ?</span></h2> 
              <h2 className='text-[28px] lg:text-[32px]'>( Inclus in pret )</h2>
              <div className='flex flex-col mt-[2rem] w-full items-center text-white justify-center   '>
                <div className='relative flex w-[80%] lg:w-[60%] justify-between items-center h-[4rem]  '>
                  
                  <img className='relative right-4 w-[60px] h-[54px]  ' src={helmet} />
                  <div className='flex w-full justify-between items-center h-[4rem] rounded-[5px] px-4 bg-gradient-to-r from-[#F9844A] to-[#FF712B]'>
                  <h3 className=' text-[20px] font-bold lg:text-[24px]'>Casca Moto</h3>
                  <h3 className=' font-bold ' >Gratis</h3>
                  </div>
               
                </div>
                <div className='relative flex mt-[.5rem] w-[80%] lg:w-[60%] justify-between items-center h-[4rem]  '>
                  
                  <img className='relative right-4 w-[60px] h-[54px]  ' src={cagula} />
                  <div className='flex w-full justify-between items-center h-[4rem] rounded-[5px] px-4 bg-gradient-to-r from-[#F9844A] to-[#FF712B]'>
                  <h3 className=' text-[20px] font-bold lg:text-[24px]'>Cagula</h3>
                  <h3 className=' font-bold ' >Gratis</h3>
                  </div>
              

                </div>
                <div className='relative flex mt-[.5rem] w-[80%] lg:w-[60%] justify-between items-center h-[4rem]  '>
                  
                  <img className='relative right-4 w-[60px] h-[54px]  ' src={manusi} />
                  <div className='flex w-full justify-between items-center h-[4rem] rounded-[5px] px-4 bg-gradient-to-r from-[#F9844A] to-[#FF712B]'>
                  <h3 className=' text-[20px] font-bold lg:text-[24px]'>Manusi</h3>
                  <h3 className=' font-bold ' >Gratis</h3>
                  </div>
              

                </div>
                <div className='relative flex mt-[.5rem] w-[80%] lg:w-[60%] justify-between items-center h-[4rem]  '>
                  
                  <img className='relative right-4 w-[60px] h-[54px]  ' src={genunchiere} />
                  <div className='flex w-full justify-between items-center h-[4rem] rounded-[5px] px-4 bg-gradient-to-r from-[#F9844A] to-[#FF712B]'>
                  <h3 className=' text-[20px] font-bold lg:text-[24px]'>Genunchiere</h3>
                  <h3 className=' font-bold ' >Gratis</h3>
                  </div>
              

                </div>
                <div className={`relative ${!topCase && "hidden"} flex mt-[.5rem] w-[80%] lg:w-[60%] justify-between items-center h-[4rem]  `}>
                  
                  <img className='relative right-4 w-[52px] h-[54px]  ' src={topCaseImg} />
                  <div className='flex w-full justify-between items-center h-[4rem] rounded-[5px] px-4 bg-gradient-to-r from-[#F9844A] to-[#FF712B]'>
                  <h3 className=' text-[20px] font-bold lg:text-[24px]'>Top Case</h3>
                  <h3 className=' font-bold ' >Gratis</h3>
                  </div>
              

                </div>
                <div className={`relative ${!gentiLaterale && "hidden"} flex mt-[.5rem] w-[80%] lg:w-[60%] justify-between items-center h-[4rem]  `}>
                  
                  <img className='relative right-4 w-[52px] h-[54px]  ' src={gentiLateraleImg} />
                  <div className='flex w-full justify-between items-center h-[4rem] rounded-[5px] px-4 bg-gradient-to-r from-[#F9844A] to-[#FF712B]'>
                  <h3 className=' text-[20px] font-bold lg:text-[24px]'>Genti Laterale</h3>
                  <h3 className=' font-bold ' >Gratis</h3>
                  </div>
              

                </div>
              </div>
            </div>
            </Fade>
      </div>
     
    </div>
  )
}

export default MotorcyclesReservation