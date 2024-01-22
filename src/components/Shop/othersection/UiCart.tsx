import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UiCart = () => {
  return (
    <div className='md:w-[60vw] w-[90vw] md:aspect-[16/6]  flex md:flex-row flex-col items-center justify-between rounded-[3.5rem] bg-petBlue overflow-hidden'>
      <div className='md:w-1/2 w-full'>
        <Image src={'/images/Shop/uicart.jfif'} alt='ui cart img' width={700} height={700}
          className='w-full h-full' />
      </div>
      <div className='flex flex-col items-center text-center md:text-left md:justify-center md:items-start
        md:w-1/2 max-h-full h-full space-y-4 p-4 text-white'>
        <div className='md:text-2xl text-xl'>Made for all lifs’s advantures.</div>
        <div className='md:text-sm text-xs w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
        <div className='w-full flex justify-center'>
          <Link href={'/Shop/All'} className='w-[70%] bg-transparent border-4 border-white text-white mx-auto 
           md:py-1 py-2 rounded-full hover:bg-white hover:text-petBlue
           transition-all duration-400 md:text-base text-sm'>Collection</Link>
        </div>
      </div>
    </div>
  )
}

export default UiCart