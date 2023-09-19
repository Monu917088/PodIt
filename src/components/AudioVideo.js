import React from 'react'
import img1 from '../images/img1.jpeg'

const AudioVideo = () => {
  return (
    <div className='bg-gray-200 w-full'>
    <div className='md:mx-20 mx-2 py-12 md:py-16 md:flex  space-x-0 md:space-x-5  '>
        <div className='flex-col w-full md:w-[57%] mb-12 md:mb-0  space-y-8'>
            <p className='text-3xl md:text-5xl font-bold' >Audio/ Video Solutions </p>
            <p className='text-lg '>
            We offer comprehensive audio and video solutions to meet your diverse needs.
             Whether you require professional audio production, video editing, live streaming services, or audio/video equipment setup, our team of experts is here to deliver high-quality solutions that exceed your expectations.
            </p>

            <div><button className='bg-yellow-500 text-black px-6 py-3 text-2xl font-bold '>LEARN MORE</button></div>
        </div>
         <div className=''>
            <img src={img1}/>
        </div>   
    </div>
    </div>
  )
}

export default AudioVideo