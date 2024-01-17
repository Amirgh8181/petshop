"use client"
import { useItemsStore } from '@/stores/shop/useItemsShop'
import React from 'react'
import ProduceCart from './ProduceCart'

const ProductPreview = () => {
    const { products } = useItemsStore()

    return (
        <div className='w-full flex flex-col items-center'>
            <div>Top products of this week</div>
            <ProduceCart products={products} />
            <div className='mt-8'>
                <button className='px-12 py-2 bg-white border-2 border-[#262A96] text-[#262A96]
                 font-bold rounded-full hover:bg-[#262A96] hover:text-white transition-all duration-400'>View All</button>
            </div>

        </div>
    )
}

export default ProductPreview