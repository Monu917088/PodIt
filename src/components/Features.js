import React from 'react'
import {BsCheckLg} from 'react-icons/bs'
import {IoDiamondOutline} from 'react-icons/io5'
import {ImPower} from 'react-icons/im'

const Features = () => {
  return (
    <div className='md:flex md:mx-20  mx-3  my-16'>
        <div className='flex-col text-center mb-16 md:mb-0   space-y-3'>
        <div className='flex justify-center text-4xl'><BsCheckLg/></div>
            <p className='text-2xl font-bold'>
            Fixed Price Projects
            </p>
            <p className='text-xl'>
            Clear Scope Definition, Detailed Proposal, Cost Predictability and Transparent Process
            </p>
        </div>

        <div className='flex-col text-center mb-16 md:mb-0  space-y-3'>
        <div className='flex justify-center text-4xl'> <IoDiamondOutline/></div>
            <p className='text-2xl  font-bold'>
            Receive on time
            </p>
            <p className=' text-xl'>
            On-time Delivery, Expert Development Team, Quality Assurance
            </p>
        </div>

        <div className='flex-col text-center space-y-3'>
           <div className='flex justify-center text-4xl'> <ImPower className='' /></div> 
            <p className='text-2xl  font-bold'>
            Fast work turnaround
            </p>
            <p className='text-xl'>
            Product Oriented Delivery model, Post-Project Support
            </p>
        </div>
    </div>
  )
}

export default Features