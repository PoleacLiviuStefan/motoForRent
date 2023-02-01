import React from 'react'
import { useState } from 'react'
import MotorcycleCard from './MotorcycleCard'
import yamaha from "./Images/yamaha_mt7.png"
import kawasaki from "./Images/kawasakiversys.png"
import {AiOutlineClose} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
const Motorcycles = () => {
  const [showDetails,setShowDetails]=useState(-1)
  const navigate=useNavigate()
  return (
    <div name="Motorcycles" className='relative flex flex-col items-center    bg-white w-full h-[80rem] lg:h-[40rem]'>
        <div className='flex flex-col items-center lg:items-left lg:flew-row mt-[5rem]  lg:flex-row lg:w-[80%] w-full h-full'>
            <div onClick={()=>navigate("/Yamha-MT7")}>
                <MotorcycleCard  image={yamaha} name={<>YAMAHA <span className='text-[#F9844A]'> MT7 </span></>} pret={<><span className='font-bold'> 40-65</span></>} an="2018" cp="80" rezervor="14" cmc="690"   />
            </div>
            <div onClick={()=>navigate("/Kawasaki-versys")}>
                <MotorcycleCard  image={kawasaki} name={<>KAWASAKI<span className='text-[#F9844A]'> VERSYS </span></>} pret={<><span className='font-bold'> 40-65</span></>} an="2012" cp="64" rezervor="19" cmc="650"  />
            </div>
        </div>
        
       
    </div>
  )
}

export default Motorcycles