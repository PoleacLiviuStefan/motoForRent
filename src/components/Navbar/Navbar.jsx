import React from 'react'
import { useState } from 'react'
import {AiOutlinePhone} from 'react-icons/ai'
import {MdArrowForwardIos} from 'react-icons/md'
import {FaMotorcycle} from 'react-icons/fa'
import {AiFillQuestionCircle} from 'react-icons/ai'
import {GiCartwheel} from 'react-icons/gi'
import logo from './logo2.png'
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
const Navbar = () => {

  const [activeMobileMenu,setActiveMobileMenu]=useState(false)
  const navigate = useNavigate();
 

  return (
    <div className='fixed flex z-50 justify-center items-center top-0 left-0 w-full h-[5rem] bg-white '>
      <div className='lg:absolute top-[1rem] z-30  lg:right-[4rem]'>
           <Link
            activeClass="active"
            to="Hero"
            spy={true}
            smooth={true}
            offset={-150}
            href="Hero"
          >
        <img onClick={()=>navigate("/")} src className='  cursor-pointer  w-[150px] h-[50px] ' src={logo} />

        </Link>
        </div>
        <div className='absolute top-0 z-10 lg:hidden bg-white h-[5rem] w-full' />
        <div className=' hidden lg:flex left-[2rem] w-[30rem] justify-between ' >
        <Link
            activeClass="active"
            to="Motorcycles"
            spy={true}
            smooth={true}
            offset={-150}
            href="Motociclete"
            delay={500}
          >
            <button onClick={()=>navigate("/")} className='flex'>MOTOCICLETE <span className='  ml-2 text-[25px]'><FaMotorcycle /></span></button>
          </Link>
          <Link
            activeClass="active"
            to="Tururi"
            spy={true}
            smooth={true}
            offset={-150}
            href="Tururi Ghidate"
          >
            <button onClick={()=>navigate("/")} className='flex'>CURSURI PERFECTIONARE <span className='  text-[25px] ml-2'><GiCartwheel /></span></button>
          </Link>
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-150}
            href="Despre Noi"
          >
            <button onClick={()=>navigate("/")} className='flex'>DESPRE <span className=' ml-2 text-[25px]'><AiFillQuestionCircle /></span></button>
          </Link>
        </div>
        <div onClick={()=>{setActiveMobileMenu(prev=>!prev)}} className='fixed z-20 lg:hidden left-[2rem] top-[2rem] flex flex-col  z-50  '>
            <div className={`absolute z-20 top-[-1rem] left-[-.7rem] rounded-[15px]  w-[50px] h-[50px] ${activeMobileMenu ? "bg-black":"bg-transparent"}`} >
                <div  className='w-full h-full z-50' />
              </div>
            <div className={`absolute z-20 w-[1.7rem]  h-[3px] bg-black ${activeMobileMenu ? "animate-[rotatearrowtop_.3s_linear_forwards] ":"animate-[revertrotatearrowtop_.3s_linear_forwards]"}`}/>
            <div className={`absolute z-20 w-[1.7rem] h-[3px] top-[4px] bg-black mt-[5px] ${activeMobileMenu ? "animate-[rotatearrow_.3s_linear_forwards]":"animate-[revertrotatearrow_.3s_linear_forwards] " }`}/>
            <div className={`absolute z-20 top-[13px] w-[1.7rem] h-[3px] bg-black mt-[5px] ${activeMobileMenu ? "animate-[animarrowbottom_.3s_linear_forwards]":"animate-[revertanimarrowbottom_.3s_linear_forwards]"}`}/>
         
        </div>
        <div className={`absolute z-20 text-black  text-[18px] tracking-[1.5px] flex justify-center items-center bottom-[-2rem] left-0 bg-[#EEEEEE] h-[2rem] w-full`}>
        <a href="tel:+40-751-030-171" className='flex'> <span className='mr-2 mt-1  text-[20px]'><AiOutlinePhone /></span>0751030171</a>
        </div>
        <div className={`fixed ${activeMobileMenu ? "animate-[appearMenu_.5s_ease-in-out_forwards]":"animate-[reverseAppearMenu_.5s_ease-in-out_forwards]"}  bg-white w-full h-[11rem] left-0 `} >
          <div className='absolute flex flex-col lg:hidden items-center text-left w-full h-[9rem]  justify-between ' >
          <Link
            activeClass="active"
            to="Motorcycles"
            spy={true}
            smooth={true}
            offset={-100}
            href="Contact"
          >
             <button className='flex mt-[1.5rem] px-[6rem] '><span className='  mr-2 text-[25px]'><FaMotorcycle /></span>MOTOCICLETE </button>
          </Link>
          <Link
            activeClass="active"
            to="Tururi"
            spy={true}
            smooth={true}
            offset={-150}
            href="Tururi Ghidate"
          >
            <button className='flex px-[6rem] ml-[1rem]'><span className='  text-[25px] mr-2'><GiCartwheel /></span>CURSURI PERFECTIONARE </button>
          </Link>
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-150}
            href="Despre Noi"
          >
            <button className='flex px-[6rem] mr-[3rem] '><span className=' mr-2 text-[25px]'><AiFillQuestionCircle /></span>DESPRE </button>
          </Link>
           
          </div>
        </div>
    </div>
  )
}

export default Navbar