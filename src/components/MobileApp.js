import React from 'react'
import img3 from '../images/img3.png'

const MobileApp = () => {
  return (
    <div className='bg-gray-200 w-full'>
    <div className='md:mx-20 mx-2 py-12 md:py-16 md:flex  space-x-0 md:space-x-5  '>
        <div className='flex-col w-full md:w-[57%] mb-12 md:mb-0  space-y-8'>
            <p className='text-3xl md:text-5xl font-bold' >
                Mobile Application Development       
            </p>
            <p className='text-lg '>
            We specialise in mobile application development, creating innovative and user-friendly mobile solutions for various platforms, including iOS and Android. Our team of experienced developers and designers is passionate about delivering high-quality mobile applications that cater to your unique business needs. Whether you require a consumer-facing app, an enterprise solution, or a mobile extension of your existing systems, we have the expertise to bring your vision to life.


            </p>

            <div><button className='bg-yellow-500 text-black px-6 py-3 text-2xl font-bold '>LEARN MORE</button></div>
        </div>
         <div className=''>
            <img src={img3}/>
        </div>   
    </div>
    </div>
  )
}

export default MobileApp