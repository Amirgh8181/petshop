import axios, { AxiosResponse } from 'axios';
import Slider from '../../UI/ShopPreview/Slider';
import { ShopItem } from '@/types';
import Link from 'next/link';
const ShopPreview =async () => {
    const req: AxiosResponse<ShopItem[]>=await axios.get('http://localhost:5000/api/products')
    

    
    return (
        <section id="ShopPreview" className='w-full'>
            <div className='flex items-center justify-between md:px-20 px-4'>
                <div className='text-4xl'>Shop</div>
                <Link href={'/Shop'} className='text-xl hover:text-petBlue cursor-pointer'>More</Link>
            </div>
            <div className='w-full md:mt-10 mt-6'>
                <Slider data={req.data.slice(0,12)}/>
            </div>
        </section>
    )
}

export default ShopPreview