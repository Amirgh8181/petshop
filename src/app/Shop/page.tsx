import ShopHero from '@/components/Shop/ShopHero'
import ProductPreview from '@/components/Shop/ShopItem'
import Category from '@/components/Shop/category'
import OtherSection from '@/components/Shop/othersection'
import React from 'react'

const Shop = () => {

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