import { RedirectButtonBgTransParent } from '@/components/UI/Buttons/Buttons'
import Image from 'next/image'
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
        <h3 className='md:text-2xl text-xl'>Made for all lifs’s advantures.</h3>
        <p className='md:text-sm text-xs w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <div className='w-full flex justify-center'>
          <RedirectButtonBgTransParent content='Collection' size='w-[60%] lg:w-[40%] aspect-[9/2]' redirectLink='/Shop/category/All'/>
        </div>
      </div>
    </div>
  )
}

export default UiCart
