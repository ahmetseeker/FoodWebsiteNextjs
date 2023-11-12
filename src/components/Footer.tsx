import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between p-4 uppercase text-xl items-center text-red-500 md:h-24 h-12 lg:px-20 xl:px-40'>
      <Link href="/" className='font-bold'>Massimo</Link>
      <span>All Rights Reserved</span>
    </div>
  )
}

export default Footer