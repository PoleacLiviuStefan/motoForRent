import React from 'react'
import moto from './Images/icon-moto.png'
const Step = ({number,title}) => {
  return (
    <div className='relative shadow-xl flex flex-col  items-center bg-gray-200 w-[230px] h-[250px] mt-8 lg:mt-0 lg:ml-8' >
            <h3 className=' mt-[1.5rem] lg:mt-[2rem] font-bold text-gray-600 text-[17px] lg:text-[18px] w-[80%]'> {title} </h3>
            <img className=' absolute top-[6rem] left-[1.7rem] w-[140px] h-[101px]' src={moto} alt="Motocicleta de inchiriat in Bucuresti" />
            <h3 className='absolute bottom-[-3rem] right-[-.4rem] font-bold text-[130px] text-gray-400 '>{number}</h3>
    </div>
  )
}

export default Step