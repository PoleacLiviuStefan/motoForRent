import React from 'react'
import logo from '../Navbar/logo2.png'
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import {AiOutlinePhone} from 'react-icons/ai'
import {FiMapPin} from 'react-icons/fi'
import {MdArrowForwardIos} from 'react-icons/md'
import {FaMotorcycle} from 'react-icons/fa'
import {AiFillQuestionCircle} from 'react-icons/ai'
import {GiCartwheel} from 'react-icons/gi'

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div name="Footer" className='relative mt-[10rem] bg-orange-400 w-full h-[50rem] lg:h-[30rem] flex flex-col items-center lg:justify-between py-[6rem] lg:py-0 lg:px-[10rem] lg:grid lg:grid-cols-3  '>
         <Link
            activeClass="active"
            to="Hero"
            spy={true}
            smooth={true}
            offset={-150}
            href="Hero"
          >
        <img onClick={()=>navigate("/")} src className=' mt-[2rem] lg:mt-0 lg:mb-[2rem] lg:mb-0  cursor-pointer  w-[210px] h-[70px] ' src={logo} />

        </Link>
        <div className='flex flex-col text-white items-center h-[12rem] mt-[2rem] '>
            <a href="tel:+40-751-030-171" className='flex justify-center items-center rounded-[5px] cursor-pointer  font-bold text-[20px] lg:text-[24px] w-[15rem] h-[4rem] border-[2px] border-white mb-[1rem]' >Contacteaza-ne</a>
            <div className='flex flex-col items-left w-[15rem]  '>    
            <h3 className=' flex'><span className='mr-2 mt-1'><FiMapPin /></span>Calea Vitan nr. 17 A , Etaj 1 , Bucuresti</h3>
            <h3 className=' flex'><span className='mr-2 mt-1'><FiMapPin /></span>Punct Ridicare: Soseaua Electronicii nr. 48</h3>
            <a href="tel:+40-751-030-171"  className='flex '> <span className='mt-1 mr-2'><AiOutlinePhone/></span> 0751030171 </a>
            </div>
        </div>
        <div className='flex flex-col text-white items-center h-[12rem] mt-[2rem] '>
            <h3 className='flex  justify-center items-center rounded-[5px] cursor-pointer  font-bold text-[20px] lg:text-[24px] w-[15rem] h-[4rem] border-[2px] border-white ' > Navigheaza
          </h3>
            <div className='flex flex-col items-left mt-[1rem] w-[15rem]  '>    
            <Link
            activeClass="active"
            to="Motorcycles"
            spy={true}
            smooth={true}
            offset={-150}
            href="Motociclete"
            delay={500}
          >
            <h3 onClick={()=>navigate("/")} className='relative flex  '><span className='  mr-2 mt-1'><FaMotorcycle /></span> Motociclete </h3>
          </Link>
          <Link
            activeClass="active"
            to="Tururi"
            spy={true}
            smooth={true}
            offset={-150}
            href="Tururi Ghidate"
          >
            <h3 onClick={()=>navigate("/")} className='flex  '> <span className='relative    mr-2  mt-1'><GiCartwheel /></span> Cursuri Perfectionare </h3>
          </Link>
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-150}
            href="Despre Noi"
          >
            <h3 onClick={()=>navigate("/")} className='flex'><span className=' mr-2 mt-1'><AiFillQuestionCircle /></span>Despre </h3>
          </Link>
            </div>
        </div>
        <div className='absolute w-full flex justify-center items-center h-[2rem] bottom-0 text-white' > @ 2023 4MotoForRent  </div>
    </div>
  )
}

export default Footer