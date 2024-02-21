"use client"
import React from 'react'
import ProduceCart from '../../UI/CartProduce/ProduceCart'
import { ShopItem } from '@/types'
import { RedirectButtonBgwhite } from '@/components/UI/Buttons/Buttons'

const ProductPreview = ({ products }: { products: ShopItem[] }) => {

    return (
        <div className='w-full flex flex-col items-center'>
            <h6>Top products of this week</h6>
            <div className='w-full flex justify-center'>
                <div className='flex flex-wrap justify-around mx-auto w-[90%] py-6 md:gap-6 gap-4'>
                    <ProduceCart showProduct={products.slice(0, 9)} type='normal'/>
                </div>
            </div>

            <div className='mt-8 w-full'>
                <RedirectButtonBgwhite content='View All' size='md:w-[15%] w-[50%] aspect-[9/2]' redirectLink="/Shop/category/All" />
            </div>

        </div>
    )
}

export default ProductPreview






