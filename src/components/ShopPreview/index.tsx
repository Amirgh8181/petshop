"use client"
import Slider from '../UI/ShopPreview/Slider';
const ShopPreview = () => {
    return (
        <section id="ShopPreview" className='w-full'>
            <div className='flex items-center justify-between md:px-20 px-4'>
                <div className='text-4xl'>Shop</div>
                <div className='text-xl hover:text-petBlue cursor-pointer'>More</div>
            </div>
            <div className='w-full md:mt-10 mt-6'>
                <Slider />
            </div>
        </section>
    )
}

export default ShopPreview