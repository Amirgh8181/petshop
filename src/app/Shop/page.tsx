"use client"
import ShopHero from '@/components/Shop/ShopHero'
import ProductPreview from '@/components/Shop/ShopItem'
import Category from '@/components/Shop/ShowCategory'
import OtherSection from '@/components/Shop/othersection'
import { useItemsShop } from '@/stores/shop/useItemsShop'
import React, { useEffect } from 'react'

const Shop = () => {
  const { fetchProductItems, products } = useItemsShop()

  useEffect(() => {
    fetchProductItems()
  }, [fetchProductItems])
  
  return (
    <div className='space-y-10'>

      <div className='w-full h-[60vh]'>
        <ShopHero />
      </div>
      <div className='w-full'>
        <Category />
      </div>
      <div className='w-full'>
        <ProductPreview products={products} />
      </div>
      <div>
        <OtherSection />
      </div>
    </div>
  )
}

export default Shop