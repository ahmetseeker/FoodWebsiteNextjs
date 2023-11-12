import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='w-screen text-red-500 overflow-x-scroll no-scrollbar'>
        <div className="flex w-max">
            {featuredProducts.map(item => (
                <div key={item.id} className='w-screen md:w-[50vw] xl:w-[33vw] h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 trantion-all duration-300 xl:h-[90vh]'>
                    {item.img && (
                        <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
                            <Image src={item.img} alt="" fill className='object-contain'/>
                        </div>
                    )}
                    <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 p-4">
                        <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
                        <p className="p-4 2xl:p-8">{item.desc}</p>
                        <span className="text-xl font-bold">{item.price}</span>
                        <button className="bg-red-500 text-white p-2 rounded-md">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Featured