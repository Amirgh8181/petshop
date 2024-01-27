import Image from 'next/image'
import React from 'react'
import { ShopItem } from '@/types'
import { Card, CardBody, CardFooter } from '@nextui-org/react'
import Link from 'next/link'


const ProduceCart = ({ showProduct }: { showProduct: ShopItem[] }) => {



  return (
    <div className='flex flex-wrap justify-center w-full py-6 md:gap-6 gap-4'>
      {
        showProduct?.map(item =>
          <Link href={`/Shop/${item._id}`} key={item._id} className='
          md:w-[25.1%] w-[45%] aspect-[9/11] flex justify-center items-center mt-8 shadow-lg md:rounded-[3rem] rounded-3xl border-1.5 border-petBlue
          '>

            <Card key={item._id}
              isPressable
              isHoverable
              className='w-full h-full md:rounded-[3rem] rounded-3xl p-4'
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
              </CardFooter>
            </Card>
          </Link>
        )}
    </div >
  )
}


export default ProduceCart;


/*
          <div key={item.image} className='md:w-[25.1%] w-[45%] flex justify-center mt-8'>
            <Link href={`/Shop/ProductPage?id=${item.id}`}
              className='w-[70%] md:aspect-[9/11] aspect-square h-full flex flex-col items-center 
          justify-center border border-petBlue md:rounded-3xl rounded-lg bg-white shadow-md 
          cursor-pointer hover:scale-105 transition-all duration-400 space-y-1'
            >
              <Image src={item.image} alt='BlogPreview' width={200} height={200} className='w-[90%] aspect-square' />
              <div className='mx-auto md:text-lg text-sm text-center'>{item.title}</div>
              <div className='mx-auto md:text-sm text-xs text-black/70'>{item.price}</div>
            </Link>
          </div>

*/