import React from 'react'
import kawasaki from './Images/kawasakiversys.png'
import {GiFullMotorcycleHelmet} from 'react-icons/gi'
import Step from './Step'

const EtapeInchiriere = () => {
  return (
    <div className='relative flex flex-col items-center   mt-[10rem] h-[80rem] lg:h-[60rem] w-full  '>
        <div className='flex justify-center items-center text-white w-[75px] h-[75px] text-[40px] lg:text-[50px] bg-gray-500 rounded-[100%]' >
            <GiFullMotorcycleHelmet />
        </div>
        <h2 className='font-[800] text-center w-[20rem] lg:w-full text-[22px] lg:text-[34px] mt-[1rem]'>
            CAT DE USOR ESTE SA INCHIRIEZI O MOTOCICLETA ?
        </h2>
        <h3 className='text-gray-400 text-[18px] lg:text-[24px] font-bold'>
            Doar 3 etape simple
        </h3>
        <div className='flex justify-between items-center'>
            <img className='hidden lg:block w-[300px]  lg:w-[350px] h-[343px] lg:h-[400px]' src={kawasaki} />
            <div className='flex lg:flex-row flex-col mt-[2rem] lg:mt-0 '>
                <Step number="1" title="Alege motocicleta dorita" />
                <Step number="2" title="Contacteaza-ne pentru a face inchirierea" />
                <Step number="3" title="Bucurate de experienta"  />
            </div>
        </div>
    </div>
  )
}

export default EtapeInchiriere