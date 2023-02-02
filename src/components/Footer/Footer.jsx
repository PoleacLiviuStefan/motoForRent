import React from 'react'
import logo from '../Navbar/logo2.png'
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className='bg-[#222222] w-full h-[25rem] grid grid-cols-3  '>
         <Link
            activeClass="active"
            to="Hero"
            spy={true}
            smooth={true}
            offset={-150}
            href="Hero"
          >
        <img onClick={()=>navigate("/")} src className=' bg-orange-300  cursor-pointer  w-[150px] h-[50px] ' src={logo} />

        </Link>
        <div className='flex flex-col'>
            <h3 className='text-white font-bold text-[20px] lg:text-[28px]' >Contacteaza-ne</h3>    
            
        </div>
    </div>
  )
}

export default Footer