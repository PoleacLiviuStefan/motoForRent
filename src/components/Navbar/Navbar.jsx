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
import {GiCarWheel} from 'react-icons/gi'
import {AiOutlineInstagram} from 'react-icons/ai'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade'
import { Link as RouterLink } from 'react-router-dom'
const Navbar = () => {

  const [activeMobileMenu,setActiveMobileMenu]=useState(false)
  const [activAnim,setActivAnim]=useState(-1)
  const navigate = useNavigate();
 

  return (
    <Slide top>
    <div className='fixed flex z-50 justify-center shadow-xl items-center top-0 left-0 w-full h-[5rem] bg-white '>
    
      <div className='lg:absolute top-[1rem] z-30  right-[2rem]'>
        <Fade>
           <RouterLink
            activeClass="active"
            to="/"
          >
        <img onClick={()=>window.scrollTo({top:0,left:0})} src className='  cursor-pointer  w-[150px] h-[50px] ' src={logo} alt="4MotoForRent logo" />

        </RouterLink>
        </Fade>
        </div>
        <div className='absolute top-0 z-10 lg:hidden bg-white h-[5rem] w-full' />
        <Fade>
        <div className=' hidden lg:flex left-[2rem] w-[30rem] justify-between ' >
        <Link
            activeClass="active"
            to="Motorcycles"
            spy={true}
            smooth={true}
            offset={-150}
            href="Motociclete"
            duration={500}
            delay={500}
          >
            <button onMouseEnter={()=>setActivAnim(0)} onMouseLeave={()=>setActivAnim(-1)} onClick={()=>navigate("/")} className='relative flex right-[5rem] animate-[reverseTransformToOrange_.5s_ease-in-out_forwards] hover:animate-[transformToOrange_.5s_ease-in-out_forwards]'>MOTOCICLETE <span className='  ml-2 text-[25px]'><FaMotorcycle /></span>
            <span className={`absolute  bottom-[-.9rem] left-0 w-full flex items-center  ${activAnim==0 ? "animate-[appear_.2s_linear_forwards]" :"animate-[disappear_.5s_linear_forwards]"}`}><span className={`bg-[#F9844A] w-0 h-[2px] ${activAnim==0 ? "animate-[lineToRight_.5s_linear_forwards]" :"animate-[reverseLineToRight_.5s_linear_forwards]"} `} /><GiCarWheel /></span>
            </button>
          </Link>
          <Link
            activeClass="active"
            to="Tururi"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            href="Tururi Ghidate"
          >
            <button onMouseEnter={()=>setActivAnim(1)} onMouseLeave={()=>setActivAnim(-1)} onClick={()=>navigate("/")} className='relative flex w-[15.5rem] animate-[reverseTransformToOrange_.5s_ease-in-out_forwards] hover:animate-[transformToOrange_.5s_ease-in-out_forwards] '>CURSURI PERFECTIONARE <span className='relative    text-[25px] ml-2 '><GiCartwheel /></span>
            <span className={`absolute  bottom-[-.9rem] left-0 w-full flex items-center  ${activAnim==1 ? "animate-[appear_.2s_linear_forwards]" :"animate-[disappear_.5s_linear_forwards]"}`}><span className={`bg-[#F9844A] w-0 h-[2px] ${activAnim==1 ? "animate-[lineToRight_.5s_linear_forwards]" :"animate-[reverseLineToRight_.5s_linear_forwards]"} `} /><GiCarWheel /></span>
            </button>
          </Link>
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            href="Despre Noi"
          >
            <button onMouseEnter={()=>setActivAnim(2)} onMouseLeave={()=>setActivAnim(-1)}  onClick={()=>navigate("/")} className='relative flex left-[5rem] animate-[reverseTransformToOrange_.5s_ease-in-out_forwards] hover:animate-[transformToOrange_.5s_ease-in-out_forwards]'>DESPRE <span className=' ml-2 text-[25px]'><AiFillQuestionCircle /></span><span className={`absolute  bottom-[-.9rem] left-0 w-full flex items-center  ${activAnim==2 ? "animate-[appear_.2s_linear_forwards]" :"animate-[disappear_.5s_linear_forwards]"}`}><span className={`bg-[#F9844A] w-0 h-[2px] ${activAnim==2 ? "animate-[lineToRight_.5s_linear_forwards]" :"animate-[reverseLineToRight_.5s_linear_forwards]"} `} /><GiCarWheel /></span></button>
          </Link>
        </div>
        </Fade>
        <div onClick={()=>{setActiveMobileMenu(prev=>!prev)}} className='fixed z-20 lg:hidden left-[2rem] top-[2rem] flex flex-col  z-50  '>
            <div className={`absolute z-20 top-[-1rem] left-[-.7rem] rounded-[15px]  w-[50px] h-[50px] ${activeMobileMenu ? "bg-black":"bg-transparent"}`} >
                <div  className='w-full h-full z-50' />
              </div>
            <div className={`absolute z-20 w-[1.7rem]  h-[3px] bg-black ${activeMobileMenu ? "animate-[rotatearrowtop_.3s_linear_forwards] ":"animate-[revertrotatearrowtop_.3s_linear_forwards]"}`}/>
            <div className={`absolute z-20 w-[1.7rem] h-[3px] top-[4px] bg-black mt-[5px] ${activeMobileMenu ? "animate-[rotatearrow_.3s_linear_forwards]":"animate-[revertrotatearrow_.3s_linear_forwards] " }`}/>
            <div className={`absolute z-20 top-[13px] w-[1.7rem] h-[3px] bg-black mt-[5px] ${activeMobileMenu ? "animate-[animarrowbottom_.3s_linear_forwards]":"animate-[revertanimarrowbottom_.3s_linear_forwards]"}`}/>
         
        </div>
        
        <div className={`absolute shadow-lg z-20 text-black  text-[18px] tracking-[1.5px] flex justify-center items-center bottom-[-2rem] left-0 bg-[#EEEEEE] h-[2rem] w-full`}>
        <Fade>
        <a href="tel:+40-751-030-171" className='flex'> <span className='mr-2 mt-1  text-[20px]'><AiOutlinePhone /></span>0751030171</a>
        <a href="https://www.instagram.com/instructor.moto.adriandon/" className='relative cursor-pointer text-[24px]  ml-[1rem]'><AiOutlineInstagram /></a>
        </Fade>
        </div>
        
        <div className={`flex justify-left fixed  ${activeMobileMenu ? "animate-[appearMenu_.5s_ease-in-out_forwards]":"animate-[reverseAppearMenu_.5s_ease-in-out_forwards]"}  bg-white w-full h-[11rem] left-0 `} >
          <div className='w-[20rem] h-full' >
          <div className='absolute flex flex-col lg:hidden items-center text-left w-full h-[9rem]  justify-between ' >
          <Link
            activeClass="active"
            to="Motorcycles"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            href="Contact"
          >
             <button onClick={()=>{navigate("/") ; setActiveMobileMenu(prev=>!prev)}}  className='relative mt-[1.5rem]  flex items-center w-full text-left w-[10rem] justify-left'><span className='  mr-2 text-[25px]'><FaMotorcycle /></span>MOTOCICLETE </button>
          </Link>
          <Link
            activeClass="active"
            to="Tururi"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            href="Tururi Ghidate"
          >
            <button onClick={()=>{navigate("/") ; setActiveMobileMenu(prev=>!prev)}} className='relative  flex items-center w-full text-left w-[10rem] justify-left '><span className='  text-[25px] mr-2'><GiCartwheel /></span>CURSURI<br /> PERFECTIONARE </button>
          </Link>
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            href="Despre Noi"
          >
            <button onClick={()=>{navigate("/") ; setActiveMobileMenu(prev=>!prev)}} className='relative  flex items-center w-full text-left w-[10rem] justify-left'><span className=' mr-2 text-[25px]'><AiFillQuestionCircle /></span>DESPRE </button>
          </Link>
           
          </div>
          </div>
        </div>
    </div>
    </Slide>
  )
}

export default Navbar