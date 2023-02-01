import React from 'react'
import { useState } from 'react'
import helmet from "./Images/helmet.png"
import cagula from "./Images/cagula.png"
import manusi from './Images/manusi.png'
const MotorcyclesReservation = ({locked,name,imagini,preturi,an,cp,rezervor,cmc,greutate,garantie}) => {
  
  const [currentImage,setCurrentImage]=useState(0)

  return (
    <div className="relative  left-0 top-[7rem] lg:top-0  w-full  h-[180rem] flex justify-center   ">
      <div className='relative flex flex-col z-40 lg:flex-row justify-center lg:items-center bg-gray-100 w-full lg:w-[80%] h-[90rem]  ' >
        <div className='  flex flex-col justify-end items-center h-[44%]  w-full'>
         <img className='relative w-[300px] lg:w-[500px] h-[343px] lg:h-[571px]  ' src={imagini[currentImage]} />
         <div className='flex'>
         {
          imagini.map((imagine,value)=>{
            return <><div onClick={()=>setCurrentImage(value)} className={`flex justify-center mr-[1px] items-center cursor-pointer w-[70px] lg:w-[120px] h-[79px] lg:h-[139px] ${currentImage==value && "border-[1px] border-[#F9844A]"}`}><img className=' w-[70px] lg:w-[120px] h-[79px] lg:h-[137px]  ' src={imagini[value]} /></div></>
          })
         }
         </div>
            <div className='relative   text-[20px] lg:text-[24px] text-white mt-[1rem]'  >
                {
                  preturi.map((pret)=>{
                    return <> <h3 className='flex rounded-[5px] justify-between items-center px-4 w-[20rem] h-[3rem] mt-[.5rem] bg-[#F9844A] '>4-7 ZILE <span className='absolute font-bold right-4  text-[28px] lg:text-[32px]  '>{pret} € / <sub>zi</sub> </span></h3></>
                  })
                }
                <h3 className='absolute flex rounded-[5px]  lg:text-[20px] justify-center items-center px-4 w-[20rem] h-[3rem] mt-[.5rem] bg-gray-400 '>GARANTIE : <span className='font-bold'> {garantie} €</span>  </h3>
            </div>
            
         </div>
          <div className='relative flex flex-col  items-center  mt-[2rem] justify-start h-[70%] w-full lg:w-[70%] ' >
            <h1 className='lg:text-[38px] mt-[2rem] text-[32px] font-bold text-left'>{name}</h1>
            <p className='lg:text-[16px] mt-[1rem] text-gray-500 text-[14px] w-[80%]  text-left'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum perspiciatis ipsam rerum ratione officiis consequatur, amet aut magnam, perferendis soluta quia tenetur sint vitae aspernatur quas at? Alias illo ducimus provident, obcaecati debitis quisquam pariatur quaerat perferendis? Impedit repellendus debitis nostrum suscipit doloribus quia, voluptate possimus numquam asperiores perspiciatis fuga.
            </p>
            <h2 className='text-[32px] lg:text-[38px]  font-bold mt-[2rem]'>Detalii tehnice</h2>
            <div className='relative mt-[1rem] text-[14px] text-center lg:text-[18px] grid grid-cols-2 place-items-center bg-gray-50 rounded-[8px]  h-[10rem] w-[80%]'>
                <h3 className='' >Motor : {cmc} cmc , {cp} cp</h3>
                <h3>An Fabricatie : {an} </h3>
                <h3>Capacitate Rezervor : {rezervor} l </h3>
                <h3>Greutate : {greutate} kg</h3>
            </div>
            
          </div>
          <div className='absolute top-[82rem] lg:top-[75rem] z-40 flex flex-col items-center w-full  bg-gray-100 h-[60rem] w-full'>
              <div className='absolute top-[82rem] bg-black w-[20rem] h-[5rem]' />
              <h2 className='text-[38px] lg:text-[48px] bg-black text-white px-4  font-bold mt-[2rem]'>Ce Mai Oferim ?</h2> 
              <h2 className='text-[28px] lg:text-[32px]'>(inclus in pret)</h2>
              <div className='flex flex-col mt-[2rem] w-full items-center text-white justify-center   '>
                <div className='relative flex w-[80%] lg:w-[40%] justify-between items-center h-[4rem]  '>
                  
                  <img className='relative right-4 w-[50px] h-[54px]  ' src={helmet} />
                  <div className='flex w-full justify-between items-center h-[4rem] rounded-[5px] px-4 bg-[#F9844A]'>
                  <h3 className=' text-[20px] font-bold lg:text-[24px]'>Casca Moto</h3>
                  <h3 className=' font-bold ' >Gratis</h3>
                  </div>
               
                </div>
                <div className='relative flex mt-[.5rem] w-[80%] lg:w-[40%] justify-between items-center h-[4rem]  '>
                  
                  <img className='relative right-4 w-[60px] h-[54px]  ' src={cagula} />
                  <div className='flex w-full justify-between items-center h-[4rem] rounded-[5px] px-4 bg-[#F9844A]'>
                  <h3 className=' text-[20px] font-bold lg:text-[24px]'>Cagula</h3>
                  <h3 className=' font-bold ' >Gratis</h3>
                  </div>
              

                </div>
                <div className='relative flex mt-[.5rem] w-[80%] lg:w-[40%] justify-between items-center h-[4rem]  '>
                  
                  <img className='relative right-4 w-[60px] h-[54px]  ' src={manusi} />
                  <div className='flex w-full justify-between items-center h-[4rem] rounded-[5px] px-4 bg-[#F9844A]'>
                  <h3 className=' text-[20px] font-bold lg:text-[24px]'>Manusi</h3>
                  <h3 className=' font-bold ' >Gratis</h3>
                  </div>
              

                </div>
              </div>
            </div>
      </div>
     
    </div>
  )
}

export default MotorcyclesReservation