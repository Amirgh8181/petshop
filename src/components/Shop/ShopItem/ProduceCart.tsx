"use client"
import Image from 'next/image'
import React from 'react'
import { ShopItem } from '@/types'
import Link from 'next/link'


const ProduceCart = ({showProduct}:{showProduct:ShopItem[]}) => {


  return (
    <div className='flex flex-wrap justify-center w-full min-h-screen gap-4'>
      {
        showProduct?.map(item =>
          <div key={item.image} className='md:w-[25.1%] w-[45%] flex justify-center mt-8'>
            <Link href={`/Shop/ProductPage?id=${item.id}`}
              className='w-[70%] md:aspect-[9/11] aspect-square h-full flex flex-col items-center 
          justify-center border border-petBlue md:rounded-3xl rounded-lg bg-white shadow-md 
          cursor-pointer hover:scale-105 transition-all duration-400 space-y-1'
            >
              <Image src={item.image} alt='BlogPreview' width={200} height={200} className='w-[90%] aspect-square' />
              <div className='mx-auto md:text-lg text-sm text-center'>{item.title}</div>
              <div className='mx-auto md:text-sm text-xs text-black/70'>{item.price}</div>
            </Link>
          </div>
        )


      }

    </div >
  )
}

export default ProduceCart;
