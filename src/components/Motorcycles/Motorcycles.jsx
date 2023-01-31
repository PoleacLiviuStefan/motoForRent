import React from 'react'
import { useState } from 'react'
import MotorcycleCard from './MotorcycleCard'
import yamaha from './Images/yamaha_mt7.png'
import kawasaki from "./Images/kawasakiversys.png"
import moto1 from './Images/moto1.jpeg'
import MotorcyclesReservation from './MotorcyclesReservation'
import useBodyScrollLock from "../Functions/useBodyScrollLock";
import {AiOutlineClose} from 'react-icons/ai'
const Motorcycles = () => {
  const [showDetails,setShowDetails]=useState(-1)
  const [isLocked,setLock]=useBodyScrollLock(true);
  return (
    <div name="Motorcycles" className='relative flex flex-col items-center    bg-white w-full h-[80rem] lg:h-[40rem]'>
        <div className='flex flex-col items-center lg:items-left lg:flew-row   lg:flex-row lg:w-[80%] w-full h-full'>
            <div onClick={()=>setShowDetails(0)}>
                <MotorcycleCard  image={yamaha} name={<>YAMAHA <span className='text-[#F9844A]'> MT7 </span></>} pret={<><span className='font-bold'> 40-65</span></>} an="2018" cp="80" rezervor="14" cmc="690"   />
            </div>
            <div onClick={()=>setShowDetails(1)}>
                <MotorcycleCard  image={kawasaki} name={<>KAWASAKI<span className='text-[#F9844A]'> VERSYS </span></>} pret={<><span className='font-bold'> 40-65</span></>} an="2012" cp="64" rezervor="19" cmc="650"  />
            </div>
        </div>
        
        <div className={`fixed top-0 left-0  overflow-x-hidden flex justify-center items-center ${showDetails!=1 && "hidden"}   z-40 w-screen h-full`}>
          <div onClick={()=>setShowDetails(-1)} className={`absolute cursor-pointer bg-black ${showDetails==-1 && "hidden"} z-40 bg-opacity-70 w-screen h-[64rem]`} />
          
          <MotorcyclesReservation locked={isLocked} imagini={[kawasaki,moto1]} name={<>KAWASAKI<span className='text-[#F9844A]'> VERSYS </span></>} preturi={["65","55","50"]} an="2012" cp="64" rezervor="19" cmc="650" greutate="90"  />
        </div>
    </div>
  )
}

export default Motorcycles