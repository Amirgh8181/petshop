"use client"
import { useItemsStore } from '@/stores/shop/useItemsShop';
import { useSearchParams } from 'next/navigation';
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import React from 'react'
import Image from 'next/image';
import { useFavoriteList } from '@/stores/shop/useFavoriteList';
import { ShopItem } from '@/types';

const ProductPage = () => {
    const searchParams = useSearchParams().get('id')
    const { products } = useItemsStore()
    const { setFavoriteList,FavoriteList } = useFavoriteList()
    const ShowProduct = products.find(q => q.id === searchParams) as ShopItem


    

    return (
        <div className='w-full md:h-[90vh] flex justify-center mt-6'>

            <div className='md:w-[80%] h-full flex flex-col md:flex-row md:justify-around justify-center md:items-center'>
                <div className='md:w-1/2 w-[90vw] order-2 md:order-1 space-y-7 mt-6 md:mt-0'>
                    <div>
                        <h1 className='text-3xl'>{ShowProduct?.title}</h1>
                        <p className='text-petBlue'>{ShowProduct?.price}</p>
                    </div>
                    <div className="flex flex-col">
                        <Tabs
                            aria-label="Options"
                            color="primary"
                            variant="underlined"
                            classNames={{
                                tabList: "mx-auto gap-6 w-full relative rounded-none p-0 border-b border-divider",
                                cursor: "w-full bg-[#22d3ee]",
                                tab: " flex justify-center items-center  h-12",
                                tabContent: "group-data-[selected=true]:text-[#06b6d4] md:text-base text-sm"
                            }}
                        >
                            <Tab
                                key="photos"
                                title={
                                    <div className="flex items-center space-x-2">
                                        <span>Product details</span>
                                    </div>
                                }
                            >
                                <Card>
                                    <CardBody >
                                        {ShowProduct?.description}
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab
                                key="music"
                                title={
                                    <div className="flex items-center space-x-2">
                                        <span>Specifications</span>
                                    </div>
                                }
                            >
                                <Card>
                                    <CardBody >
                                        {ShowProduct?.description}
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab
                                key="videos"
                                title={
                                    <div className="flex items-center space-x-2">
                                        <span>reviews</span>
                                    </div>
                                }
                            >
                                <Card>
                                    <CardBody >
                                        {ShowProduct?.description}
                                    </CardBody>
                                </Card>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className='flex space-x-4 items-center w-full'>
                        <div className='font-bold'>Actual Color</div>
                        <div className='w-8 ring-2 ring-petBlue ring-offset-[3px] aspect-square rounded-full bg-yellow-500'></div>
                        <div className='w-8  aspect-square rounded-full bg-violet-500'></div>
                        <div className='w-8  aspect-square rounded-full bg-blue-500'></div>
                    </div>
                    <div className='flex space-x-6'>
                        <div onClick={() => setFavoriteList(ShowProduct)}
                            className='md:w-[calc(50%-5%)] w-[calc(50%-5%)] rounded-full py-2 font-bold md:text-base text-sm bg-petBlue/30
                         text-petBlue border-2 border-petBlue hover:bg-white hover:text-petBlue transition-all
                          duration-400 cursor-pointer flex justify-center items-center space-x-2'>
                            <span className={FavoriteList.includes(ShowProduct)?'text-red-500 text-xl':"text-xl"}><FaRegHeart /></span>
                            <span>{FavoriteList.includes(ShowProduct)?"Remove From List":"Add To List"}</span>
                        </div>
                        <div className='md:w-[calc(50%-5%)] w-[calc(50%-5%)] rounded-full py-2 font-bold md:text-base text-sm bg-petBlue
                         text-white border-2 border-petBlue hover:bg-white hover:text-petBlue transition-all
                          duration-400 cursor-pointer flex justify-center items-center space-x-2'>
                            <span className='text-xl'><MdOutlineAddShoppingCart /></span>
                            <span>Add To Card</span>
                        </div>
                    </div>
                </div>
                <div className='md:w-[40%] w-[90vw] order-1 md:order-2'>
                    <Image src={ShowProduct?.image as string} alt='product image' width={500} height={500}
                        className='w-[100%] aspect-square shadow-xl rounded-[3.75rem]'
                    />
                </div>
            </div>

        </div>
    )
}

export default ProductPage


/*

                              <div>
                        <h1 className='text-3xl'>{ShowProduct?.title}</h1>
                        <p className='text-petBlue'>{ShowProduct?.price}</p>
                    </div>
                    <div className="flex md:w-[80%] flex-col">
                        <Tabs
                            aria-label="Options"
                            color="primary"
                            variant="underlined"
                            classNames={{
                                tabList: "mx-auto gap-6 w-full relative rounded-none p-0 border-b border-divider",
                                cursor: "w-full bg-[#22d3ee]",
                                tab: " flex justify-center items-center  h-12",
                                tabContent: "group-data-[selected=true]:text-[#06b6d4] md:text-base text-sm"
                            }}
                        >
                            <Tab
                                key="photos"
                                title={
                                    <div className="flex items-center space-x-2">
                                        <span>Product details</span>
                                    </div>
                                }
                            >
                                <Card>
                                    <CardBody >
                                        {ShowProduct?.description}
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab
                                key="music"
                                title={
                                    <div className="flex items-center space-x-2">
                                        <span>Specifications</span>
                                    </div>
                                }
                            >
                                <Card>
                                    <CardBody >
                                        {ShowProduct?.description}
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab
                                key="videos"
                                title={
                                    <div className="flex items-center space-x-2">
                                        <span>reviews</span>
                                    </div>
                                }
                            >
                                <Card>
                                    <CardBody >
                                        {ShowProduct?.description}
                                    </CardBody>
                                </Card>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className='flex space-x-4 items-center w-full'>
                        <div className='font-bold'>Actual Color</div>
                        <div className='w-8 ring-2 ring-petBlue ring-offset-[3px] aspect-square rounded-full bg-yellow-500'></div>
                        <div className='w-8  aspect-square rounded-full bg-violet-500'></div>
                        <div className='w-8  aspect-square rounded-full bg-blue-500'></div>
                    </div>
                    <div className='flex space-x-6'>
                        <div className='md:w-[calc(50%-10%)] w-[calc(50%-5%)] rounded-full py-2 font-bold md:text-base text-sm bg-petBlue/30
                         text-petBlue border-2 border-petBlue hover:bg-white hover:text-petBlue transition-all
                          duration-400 cursor-pointer flex justify-center items-center space-x-2'>
                            <span className='text-xl'><FaRegHeart /></span>
                            <span>Add To List</span>
                        </div>
                        <div className='md:w-[calc(50%-10%)] w-[calc(50%-5%)] rounded-full py-2 font-bold md:text-base text-sm bg-petBlue
                         text-white border-2 border-petBlue hover:bg-white hover:text-petBlue transition-all
                          duration-400 cursor-pointer flex justify-center items-center space-x-2'>
                            <span className='text-xl'><MdOutlineAddShoppingCart /></span>
                            <span>Add To Card</span>
                        </div>
                    </div>         
*/