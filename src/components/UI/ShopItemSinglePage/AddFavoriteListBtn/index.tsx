"use client"
import { useFavoriteList } from '@/stores/shop/useFavoriteList'
import { ShopItem } from '@/types'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa6'

const AddFavoriteListBtn = ({itemDetails}:{itemDetails:ShopItem}) => {
    const { setFavoriteList, FavoriteList } = useFavoriteList()
    const chekIncludes=FavoriteList.find(q=>q._id===itemDetails._id)
    
    return (
        <>
            <div onClick={() => setFavoriteList(itemDetails)}
                className='md:w-[calc(50%-5%)] w-[calc(50%-5%)] rounded-full py-2 font-bold md:text-base text-sm bg-petBlue/30
                         text-petBlue border-2 border-petBlue hover:bg-white hover:text-petBlue transition-all
                          duration-400 cursor-pointer flex justify-center items-center space-x-2'>
                <span className={chekIncludes ? 'text-red-500 text-xl' : "text-xl"}><FaRegHeart /></span>
                <span>{chekIncludes ? "Remove From List" : "Add To List"}</span>
            </div>
        </>
    )
}

export default AddFavoriteListBtn