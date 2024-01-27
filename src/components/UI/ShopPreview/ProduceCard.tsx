import React from 'react'
import Image from 'next/image'
import { ShopItem } from '@/types'
import Link from 'next/link'
import { Card, CardBody, CardFooter } from '@nextui-org/react'


interface hardcodeshop {
    image: string,
    title: string,
    price: string
}

const ProduceCard = ({ data }: { data: ShopItem[] }) => {



    return (
        <>
            {data.map(item =>
                <Card key={item._id}
                    isPressable
                    isHoverable
                    className='md:min-w-[25vw] min-w-[40vw] flex justify-center items-center border border-petBlue shadow-xl'
                >
                    <CardBody className="relative top-0 w-full h-full flex justify-center items-start max-h-[60%] md:max-h-[80%] overflow-hidden">
                        <Image
                            width={500}
                            height={500}
                            alt={item.name}
                            className="w-[90%]  aspect-square md:rounded-[3rem] rounded-3xl shadow-xl"
                            src={item.attachmentFile}
                        />
                    </CardBody>
                    <CardFooter className="text-small flex flex-col items-center space-y-2">
                        <b>{item.name}</b>
                        <p className="text-default-500">{item.price}</p>
                        <Link href={`/Shop/${item._id}`} className="text-center text-sm md:text-lg w-[60%] py-2 rounded-full text-white bg-petBlue hover:bg-blue-800 transition-all duration-400">ShowMore</Link>
                    </CardFooter>
                </Card>
            )}
        </>
    )
}

export default ProduceCard

//className='md:min-w-[25vw] min-w-[40vw] flex justify-center items-center bg-blue-400'


/*
                    <div className='rounded-3xl border border-petBlue shadow-lg shadow-petBlue/50
                        flex flex-col justify-center items-center space-y-3 py-5'>
                        <div className='w-full flex justify-center'>
                            <Image src={item.attachmentFile} alt='preview shop' width={200} height={200}
                                className="pointer-events-none rounded-lg aspect-square w-[85%] shadow-md shadow-gray-500"
                            />
                        </div>
                        <div className='text-sm md:text-lg'>{item.name}</div>
                        <div className='text-xs text-[#525252]'>{item.price}</div>
                        <Link href={`/Shop/${item._id}`} className="text-center text-sm md:text-lg w-[60%] py-2 rounded-full text-white bg-petBlue hover:bg-blue-800 transition-all duration-400">ShowMore</Link>

                    </div>


*/