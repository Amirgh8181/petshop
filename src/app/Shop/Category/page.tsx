"use client"
import ProduceCart from '@/components/Shop/ShopItem/ProduceCart';
import { useItemsStore } from '@/stores/shop/useItemsShop';
import { ShopItem } from '@/types';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

const Category = () => {
    const searchParams = useSearchParams().get('type')
    const { products } = useItemsStore()

    return (
        <div>
            <ProduceCart products={products.filter(q=>q.category===searchParams)} />
        </div>
    )
}

export default Category;