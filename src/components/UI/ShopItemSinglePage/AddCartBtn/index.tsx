"use client"
import { useCartItems } from '@/stores/shop/useCartItem'
import { ShopItem } from '@/types'
import React from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'

const AddCartBtn = ({ itemDetails }: { itemDetails: ShopItem }) => {
    const { setCartItem,CartItem } = useCartItems()
    const chekIncludes=CartItem.find(q=>q.id===itemDetails.id)
    
    return (
        <>
            <div onClick={() => setCartItem(itemDetails)}
                className='md:w-[calc(50%-5%)] w-[calc(50%-5%)] rounded-full py-2 font-bold md:text-base text-sm bg-petBlue
                         text-white border-2 border-petBlue hover:bg-white hover:text-petBlue transition-all
                          duration-400 cursor-pointer flex justify-center items-center space-x-2'>
                <span className='text-xl'><MdOutlineAddShoppingCart /></span>
                <span>{chekIncludes ? "Remove From Cart" : "Add To Cart"}</span>
            </div>
        </>
    )
}

export default AddCartBtn