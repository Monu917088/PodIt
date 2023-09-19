import React from 'react'
import img4 from'../images/img4.jpg'

const Values = () => {
  return (
    <div className='bg-black w-full'>
    <div className='md:mx-20 mx-2 py-12 md:py-16 md:flex items-center text-white space-x-0 md:space-x-5  '>
        
    <div className='mb-12 md:mb-0'>
            <img src={img4}/>
        </div> 

        <div className='flex-col w-full md:w-[57%]   space-y-8'>
            <p className='text-3xl md:text-5xl font-bold' >
            We are driven by values             
            </p>
            <p className='text-lg '>
            These values serve as the foundation of our organisation and guide us in everything we do. We believe that by upholding these values, we can deliver outstanding services and foster strong
             relationships with our clients and partners.
            </p>

            <div><button className='bg-yellow-500 text-black px-6 py-3 text-2xl font-bold '>LEARN MORE</button></div>
        </div>
       
    </div>
    </div>
  )
}

export default Values