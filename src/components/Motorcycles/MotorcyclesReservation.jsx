import React from 'react'
import { useState } from 'react'

const MotorcyclesReservation = ({locked,name,imagini,preturi,an,cp,rezervor,cmc,greutate}) => {
  
  const [currentImage,setCurrentImage]=useState(0)

  return (
    <div className="relative overflow-x-hidden overflow-y-scroll left-0 top-[7rem]  h-full w-full   flex justify-center items-center  ">
      <div className='relative flex flex-col z-40 lg:flex-row justify-center lg:items-center bg-gray-100 w-full lg:w-[80%] h-[150rem] ' >
        <div className='  flex flex-col justify-end items-center h-[44%]  w-full'>
         <img className='relative w-[300px] lg:w-[500px] h-[343px] lg:h-[571px]  ' src={imagini[currentImage]} />
         <div className='flex'>
         {
          imagini.map((imagine,value)=>{
            return <><div onClick={()=>setCurrentImage(value)} className={`flex justify-center mr-[1px] items-center cursor-pointer w-[70px] lg:w-[120px] h-[79px] lg:h-[139px] ${currentImage==value && "border-[1px] border-[#F9844A]"}`}><img className=' w-[70px] lg:w-[120px] h-[79px] lg:h-[137px]  ' src={imagini[value]} /></div></>
          })
         }
         </div>
            <div className='relative  text-[20px] lg:text-[24px] text-white mt-[1rem]'  >
              <h3 className='flex justify-between items-center w-[20rem] h-[3rem] px-4 bg-[#F9844A]'>1 ZI <span className='absolute text-[28px] lg:text-[32px] right-4 font-bold'> {preturi[0]} € / <sub>zi</sub></span></h3>
                <h3 className='flex justify-between items-center px-4 w-[20rem] h-[3rem] mt-[.5rem] bg-[#F9844A] '>2-3 ZILE <span className='absolute font-bold right-4  text-[28px] lg:text-[32px]  '>{preturi[1]} € / <sub>zi</sub> </span></h3>
                <h3 className='flex justify-between items-center px-4 w-[20rem] h-[3rem] mt-[.5rem] bg-[#F9844A] '>4-7 ZILE <span className='absolute font-bold right-4  text-[28px] lg:text-[32px]  '>{preturi[2]} € / <sub>zi</sub> </span></h3>
            </div>
         </div>
          <div className='relative flex flex-col  items-center  justify-end w-full lg:w-[70%] ' >
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
          <div className='absolute top-[125rem] lg:top-[110rem] z-40 flex flex-col items-center  h-[20rem] w-full'>
              <h2 className='text-[32px] lg:text-[38px]  font-bold mt-[2rem]'>Ce Mai Oferim ?</h2> 
              <h2 className='text-[28px] lg:text-[32px]'>(inclus in pret)</h2>
            </div>
      </div>
     
    </div>
  )
}

export default MotorcyclesReservation