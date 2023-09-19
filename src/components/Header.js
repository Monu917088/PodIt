import React from 'react'
import logo from '../images/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = (props) => {
  const setMobMenu = props.setmenu;
  const mobMenu= props.menu;
  return (
    <div className=' bg-white'>
        <div className='flex justify-between items-center my-2 mx-4 md:mx-20'>
            <img className='md:h-[65px] md:w-[90px] h-[30px] w-[40px]' src={logo}/>
           <div className='text-4xl  block md:hidden cursor-pointer '> <GiHamburgerMenu onClick={()=>{setMobMenu(!mobMenu)}} className=' border '/> </div>
            <div className='hidden md:block '>
                <ul className='flex space-x-5  text-black font-bold'>
                    <li className='cursor-pointer'>HOME</li>
                    <li className='cursor-pointer'>ABOUT</li>
                    <li className='cursor-pointer'>TECHNICAL CAPABILITIES </li>
                    <li className='cursor-pointer'>CONTACT US </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header