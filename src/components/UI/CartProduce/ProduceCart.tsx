import Image from 'next/image'
import React from 'react'
import { ShopItem } from '@/types'
import { Card, CardBody, CardFooter } from '@nextui-org/react'
import Link from 'next/link'


const ProduceCart = ({ showProduct, type }: { showProduct: ShopItem[], type: string }) => {

  return (
    <>
      {
        showProduct?.map(item =>
          <Link href={`/Shop/${item._id}`} key={item._id} className={
            type === "normal" ? `md:min-w-[20%] md:max-w-[25%] min-w-[45%] aspect-[9/11] flex justify-center items-center 
             mt-8 shadow-lg md:rounded-[3rem] rounded-3xl border-1.5 border-petBlue`
              :
              `w-full h-full`
          }

          >

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
                  className="w-full aspect-square md:rounded-[3rem] rounded-3xl shadow-xl"
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
    </ >
  )
}


export default ProduceCart;

