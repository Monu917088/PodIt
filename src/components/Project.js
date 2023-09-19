import React from 'react'

const Project = () => {
  return (
    <div className='bg-white  flex items-center  w-full' >
        <div className=' mx-3 md:mx-20 flex-col md:mt-20 mt-16 mb-8   space-y-10'>
            <p className='md:text-5xl text-3xl leading-snug  font-bold text-center'>
            Let’s work together on yournext project
           </p>
            <p className='text-3xl text-center '>
            To get started, we would love to learn more about your project requirements and objectives. Whether you have a clear vision or need assistance in defining the scope, our team
             of experts is here to assist you every step of the way.
            </p>
            <div className='flex justify-center'>
            <button className='bg-yellow-500 text-black px-6 py-3 text-2xl font-bold '>LEARN MORE</button>
            </div>
        </div>

    </div>
  )
}

export default Project