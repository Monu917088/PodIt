import React from 'react'
import {MdOutlineCancelPresentation} from 'react-icons/md'

const Menu = (props) => {
    const setMobMenu = props.setmenu;
  const mobMenu= props.menu;
  return (
    <div className='w-full   block md:hidden'>
        <div className='text-4xl mb-8 flex justify-end mx-4'>
        <MdOutlineCancelPresentation   onClick={()=>{setMobMenu(!mobMenu)}} className='cursor-pointer'/>
        </div>
        <div>
        <ul className='flex-col space-y-4 mx-6 text-black font-bold'>
                    <li className='cursor-pointer'>HOME</li>
                    <li className='cursor-pointer'>ABOUT</li>
                    <li className='cursor-pointer'>TECHNICAL CAPABILITIES </li>
                    <li className='cursor-pointer'>CONTACT US </li>
                </ul>
        </div>
    </div>
  )
}

export default Menu