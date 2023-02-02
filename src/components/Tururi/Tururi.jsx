import React from 'react'
import {GiPathDistance} from 'react-icons/gi'
import moto1 from '../Motorcycles/Images/moto1.jpeg'
import {AiOutlineCheckSquare} from 'react-icons/ai'
const Tururi = () => {
  return (
    <div name="Tururi" className='relative flex flex-col items-center w-full h-[70rem]    '>
      <div className='flex items-center justify-center w-full' >
        <span className='w-[20%] h-[3px] bg-black mr-[2rem] ' />
        <span className='text-[80px] lg:text-[150px] ' ><GiPathDistance /></span>
        <span className='w-[20%] h-[3px] bg-black rounded-[2px] ml-[2rem]' />
      </div>
        <h1 className='text-[28px] mt-[1rem] w-[70%] lg:w-full lg:text-center text-left lg:text-[56px] font-[800]'>CURSURI DE PERFECTIONARE</h1>
        <div className='w-[60%] mt-[2rem]'>
          <div className='flex lg:flex-row flex-col'>
        <img src={moto1} className="w-[350px]" />
        <div className='text-gray-500 mt-[2rem] lg:mt-0 lg:ml-[2rem]'>
            <h3 className='text-black font-extrabold text-[28px] lg:text-[32px]'>ROMANIA</h3>
            <ul className='text-black font-bold  text-[20px] mt-[1rem] '>
              <li className='flex items-center'>
                <span className='text-[#F9844A] text-[20px] mr-2'><AiOutlineCheckSquare /></span> Tura De Weekend
              </li>
              <li className='flex items-center mt-[1rem]'> <span className='text-[#F9844A] text-[20px] mr-2 '><AiOutlineCheckSquare /></span> Tura De O Zi</li>
              <li className='flex items-center mt-[1rem]'> <span className='text-[#F9844A] text-[20px] mr-2'><AiOutlineCheckSquare /></span> Tura Urbana</li>
            </ul>
         <p className='mt-[1rem]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nisi provident labore quidem, expedita dolore dolorum inventore laboriosam explicabo mollitia facere eius, tempora asperiores vero, quos voluptatum? Maxime tempore vitae a distinctio voluptas sapiente asperiores quae iure explicabo! Natus doloremque dolore enim quae laboriosam praesentium incidunt porro molestiae excepturi fuga?
          <br/>
        </p>
       
         </div>
          </div>
        
        </div>
      <div className='relative   h-full w-full mt-[10rem] h-[20rem] ' >
          <div className='absolute  flex justify-center items-center top-0 bg-fixed w-full h-[20rem] bg-fixedimg bg-cover' >
          <div className='absolute z-10 top-0 bg-black bg-opacity-40 w-full h-[20rem]' />
              <h3 className='relative  w-[18rem] lg:w-[40rem]  z-40  text-[28px] lg:text-[38px] font-bold text-left  text-white'>ITI OFERIM O EXPERIENTA UNICA</h3>
            </div>
          
      </div>
    </div>
  )
}

export default Tururi