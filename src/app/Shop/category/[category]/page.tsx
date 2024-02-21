import CategoyPageHeader from '@/components/Shop/CategoyPageHeader';
import ProduceCart from '@/components/UI/CartProduce/ProduceCart';
import getShopItems from '@/lib/getShopItems';
import { ShopItem } from '@/types';
import { useEffect, useState } from 'react';

interface categprops {
    params: {
        category: string,
    }
}
const Category =async ({params}:categprops) => {
    const {category}=params
    const request:ShopItem[]=await getShopItems()
    const data=category === 'All'
    ? request
    : request.filter(q => q.category === category)
   
    return (
        <div>
        <div className='w-full mt-6'>
            <CategoyPageHeader type={category}/>
        </div>
        <div className='flex flex-wrap w-full justify-around gap-8'>
            <ProduceCart showProduct={data} type='normal'/>
        </div >
    </div>
    )
}

export default Category;
