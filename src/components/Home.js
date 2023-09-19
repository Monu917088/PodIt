import React from 'react'


const Home = () => {
  return (
    <div className='bg-gray-200  flex items-center  w-full' >
        <div className=' mx-3 md:mx-20 flex-col my-28   space-y-10'>
            <p className='md:text-5xl text-3xl leading-snug  font-bold text-center'>
            Develop and amplify your exceptional concept, set the stage for its exponential growth.
            </p>
            <p className='text-3xl text-center '>
            With our “Product Oriented Delivery” model we will build your ideas quickly into reality.
            </p>
            <div className='flex justify-center'>
            <button className='bg-yellow-500 text-black px-6 py-3 text-2xl font-bold '>LEARN MORE</button>
            </div>
        </div>

    </div>
  )
}

export default Home