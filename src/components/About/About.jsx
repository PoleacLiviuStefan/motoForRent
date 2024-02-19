import React from 'react'
import {TiTickOutline} from 'react-icons/ti'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import moto2 from "../Motorcycles/Images/moto2.jpeg"
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
const About = () => {
  return (
    <div name="About" className='relative bg-[#FFFFFF] flex flex-col items-center w-full h-[50rem] lg:h-[70rem] mt-[10rem] lg:mt-[10rem] '>
       <Fade top>
         <div className=' flex  w-full justify-center items-center '>
            <span className='sticky  w-[20%] h-[3px] bg-black mr-[2rem] ' />
            <span className=' sticky  text-[80px] lg:text-[150px] '> <AiOutlineQuestionCircle/> </span>
            <span className=' sticky  w-[20%] h-[3px] bg-black ml-[2rem] ' />
         </div>
        </Fade>
        <Fade bottom>
        <h1 className='flex items-center text-[28px] lg:text-[56px] mt-[1rem] font-[800]'>DESPRE NOI</h1>
        <h3 className='text-[22px] lg:text-[34px]'>Echipa cu <span className='font-bold text-black' >experienta</span></h3>
        </Fade>
        <Fade bottom>
        <p className='text-[18px] w-[80%] lg:w-[60%] mt-[2rem] text-justify flex-col items-center '>
          Suntem motociclisti si instructori moto cu o puternica dorinta de a vedea cat mai multi motociclisti pe sosele !
          Inchiriem motociclete la un pret accesibil pentru toate lumea !
          <br /><span className='font-bold '>Haide si tu alaturi de noi !</span>

             
        </p>
        </Fade>
    </div>
  )
}

export default About