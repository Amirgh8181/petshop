"use client"
import { useItemsStore } from '@/stores/shop/useItemsShop'
import { ShopItem } from '@/types'
import Image from 'next/image'
import React from 'react'
import ShopItemLeftSide from './LeftSide'

const ShopItemSinglePageContainer = ({ productId }: { productId: String }) => {
    const { products } = useItemsStore()
    const ShowProduct = products.find(q => q.id === productId) as ShopItem

  return (
    <div className='w-full md:h-[90vh] flex justify-center mt-6'>

    <div className='md:w-[80%] h-full flex flex-col md:flex-row md:justify-around justify-center md:items-center'>
        <div className='md:w-1/2 w-[90vw] order-2 md:order-1 space-y-7 mt-6 md:mt-0'>
            <ShopItemLeftSide product={ShowProduct}/>   
        </div>
        <div className='md:w-[40%] w-[90vw] order-1 md:order-2'>
            <Image src={ShowProduct?.image as string} alt='product image' width={500} height={500}
                className='w-[100%] aspect-square shadow-xl rounded-[3.75rem]'
            />
        </div>
    </div>
</div>
  )
}

export default ShopItemSinglePageContainer