import React from 'react'

import SliderPreviewShop from '../UI/ShopPreview';
const ShopPreview = () => {




    return (
        <section id="ShopPreview" className='w-full'>
            <div className='flex items-center justify-between md:px-20 px-4'>
                <div className='text-4xl'>Shop</div>
                <div className='text-xl hover:text-petBlue cursor-pointer'>More</div>
            </div>

            <SliderPreviewShop />
        </section>
    )
}

export default ShopPreview