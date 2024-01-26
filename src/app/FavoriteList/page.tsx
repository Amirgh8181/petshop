"use client"
import ProduceCart from '@/components/UI/ShopItemProduce/ProduceCart'
import { useFavoriteList } from '@/stores/shop/useFavoriteList'
import React from 'react'

const FavoriteList = () => {
const {FavoriteList}=useFavoriteList()


  return (
    <div>
      {FavoriteList
      ?
      <ProduceCart showProduct={FavoriteList} />
      :
      <div className='w-full h-screen flex items-center justify-center'>
        <div className='text-xl'>no anything to show you</div>
      </div>
      }
    </div>
  )
}

export default FavoriteList