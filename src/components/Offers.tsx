import React from 'react'
import CountDown from './CountDown'
import Image from 'next/image'

const Offers = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url("/offerBg.png")] md:h-[70vh] gap-8'>
      <div className="flex-1 flex flex-col text-white justify-center items-center gap-8 p-6 text-center">
        <h1 className='text-5xl font-bold xl:text-6xl'>Delicious Burger & French Fry</h1>
        <p className='xl:text-xl'>Progressively simplify effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel.</p>
        <CountDown/>
        <button className="bg-red-500 py-3 px-6 rounded-md">Order Now</button>
      </div>
      <div className="flex-1 relative w-full md:h-full">
        <Image src="/offerProduct.png" alt="" fill className='object-contain pl-8 md:pl-0'/>
      </div>
    </div>
  )
}

export default Offers