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
    <div name="Motorcycles" className='relative flex flex-col items-center    bg-white w-full h-[120rem] lg:w-[80%] lg:h-[120rem]'>
        <div className='lg:grid lg:grid-cols-2 place-items-center flex flex-col items-center lg:items-left lg:flew-row mt-[5rem]  lg:flex-row  w-full h-full'>
            <div onClick={()=>navigate("/Yamaha-MT07")}>
                <MotorcycleCard  image={yamaha} name={<>YAMAHA <span className='text-[#F9844A]'> MT07 </span></>} pret={<><span className='font-bold'> 40-65</span></>} an="2017" cp="74" rezervor="14" cmc="689" transmisie="6" greutate="179"    />
            </div>
            <div onClick={()=>navigate("/Kawasaki-versys")}>
                <MotorcycleCard  image={kawasaki} name={<>KAWASAKI<span className='text-[#F9844A]'> VERSYS </span></>} pret={<><span className='font-bold'> 50-65</span></>} an="2014" cp="64" rezervor="19" cmc="650"   />
            </div>
            <div className='relative' onClick={()=>navigate("/BMW-r1200gs")}>
                <MotorcycleCard  image={kawasaki} name={<>BMW<span className='text-[#F9844A]'> R 1200 GS </span></>} pret={<><span className='font-bold'> 40-65</span></>} an="2007" cp="98" rezervor="20" cmc="1170"  />
            </div>
        </div>
        
       
    </div>
  )
}

export default Motorcycles