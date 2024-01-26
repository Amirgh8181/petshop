import ShopHero from '@/components/Shop/ShopHero'
import ProductPreview from '@/components/Shop/ShopItem'
import Category from '@/components/Shop/ShowCategory'
import OtherSection from '@/components/Shop/othersection'
import getShopItems from '@/lib/getShopItems'
import React from 'react'

const Shop = async() => {
  const req=await getShopItems()
  console.log(req);
  
  return (
    <div className='space-y-10'>

      <div className='w-full h-[60vh]'>
        <ShopHero />
      </div>
      <div className='w-full'>
        <Category />
      </div>
      <div className='w-full'>
        <ProductPreview />
      </div>
      <div>
        <OtherSection/>
      </div>
    </div>
  )
}

export default Shop