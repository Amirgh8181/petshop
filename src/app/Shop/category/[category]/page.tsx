"use client"
import CategoyPageHeader from '@/components/Shop/CategoyPageHeader';
import ProduceCart from '@/components/UI/ShopItemProduce/ProduceCart';
import { useItemsShop } from '@/stores/shop/useItemsShop';
import { ShopItem } from '@/types';
import { useEffect, useState } from 'react';

interface categprops {
    params: {
        category: string,
    }
}
const Category = ({params}:categprops) => {
    const {category}=params
    
    const [data, setData] = useState<ShopItem[]>([])
    const { products } = useItemsShop()

    useEffect(() => {
        setData(
            category === 'All'
                ? products
                : products.filter(q => q.category === category)
        )
    }, [category, products])
    return (
        <div>
        <div className='w-full mt-6'>
            <CategoyPageHeader type={category}/>
        </div>
        <div>
            <ProduceCart showProduct={data}/>
        </div >
    </div>
    )
}

export default Category;
