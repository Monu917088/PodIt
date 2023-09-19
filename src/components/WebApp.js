import React from 'react'
import img2 from '../images/img2.jpg'

const WebApplication = () => {
  return (
    <div className='bg-white w-full'>
    <div className='md:mx-20 mx-2 py-12 md:py-16 md:flex  space-x-0 md:space-x-5  '>
        
    <div className='mb-12 md:mb-0'>
            <img src={img2}/>
        </div> 

        <div className='flex-col w-full md:w-[57%]   space-y-8'>
            <p className='text-3xl md:text-5xl font-bold' >
                Web Application Design & Development              
            </p>
            <p className='text-lg '>
              We specialise in creating bespoke web applications tailored to meet your specific
               business needs. Whether you require a simple web-based tool or a complex enterprise-level application, our
               team of experienced designers and developers is here to bring your vision to life.
            </p>

            <div><button className='bg-yellow-500 text-black px-6 py-3 text-2xl font-bold '>LEARN MORE</button></div>
        </div>
       
    </div>
    </div>
  )
}

export default WebApplication