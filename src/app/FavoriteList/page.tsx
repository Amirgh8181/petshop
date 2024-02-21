"use client"
import ProduceCart from '@/components/UI/CartProduce/ProduceCart'
import { useFavoriteList } from '@/stores/shop/useFavoriteList'
import React from 'react'

const FavoriteList = () => {
const {FavoriteList}=useFavoriteList()
console.log(FavoriteList);
console.log(FavoriteList.length);


  return (
    <div>
      {FavoriteList.length>0
      ?
      <ProduceCart showProduct={FavoriteList} />
      :
      <div className='w-full h-screen flex items-center justify-center'>
        <div className='text-3xl'>no anything to show you</div>
      </div>
      }
    </div>
  )
}

export default FavoriteList