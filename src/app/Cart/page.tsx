"use client"
import { useCartItems } from '@/stores/shop/useCartItem'
import { CartItem } from '@/types';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Cart = () => {
  const { CartItem, totalPrice, setDeleteItem, setIncrement, setDecrement } = useCartItems()
  console.log(CartItem);
  console.log(totalPrice);

  return (
    <div className='w-[90vw] min-h-screen relative flex mt-6'>
      <div className='md:w-3/4 w-[65%] min-h-screen flex flex-col items-center gap-4'>
        {
          CartItem?.map(item =>
            <div className='w-[90%] md:h-[40vh] h-[20vh] flex items-center justify-around rounded-2xl shadow-xl' key={item._id}>
              <div className='w-[60%] h-[90%] flex items-center ml-2 space-x-2'>
                <Image src={item.attachmentFile} alt='cart item image' width={300} height={300}
                  className='md:w-[40%] w-[70%] aspect-square rounded-[2rem]' />
                <div className='md:text-2xl'>{item.name}</div>
              </div>

              <div className='w-[40%] flex md:flex-row flex-col items-center justify-evenly'>


                <div className='md:w-2/5 w-[90%] order-2 md:order-1 flex items-center justify-around border-2 border-petBlue rounded-full py-[2px]  text-petBlue '>
                  <div onClick={() => setDecrement(item._id)}
                    className='md:text-3xl text-2xl hover:bg-petBlue hover:text-white transition-all
                   duration-400 rounded-md cursor-pointer'>
                    <CiSquareMinus />
                  </div>
                  <div className='md:text-2xl text-base'>{item.count}</div>
                  <div onClick={() => setIncrement(item._id)}
                    className='md:text-3xl text-2xl hover:bg-petBlue hover:text-white transition-all 
                  duration-400 rounded-md cursor-pointer'>
                    <CiSquarePlus />
                  </div>
                </div>


                <div className='order-1 md:order-2 flex flex-col md:flex-row items-center md:space-x-2'>
                  <span className='order-2 md:order-1 md:text-2xl text-base '>{item.price}</span>
                  <span onClick={() => setDeleteItem(item._id)}
                    className='order-1 md:order-2 self-end md:text-3xl text-2xl hover:text-red-500 
                    transition-all duration-400 cursor-pointer'>
                    <IoMdClose />
                  </span>
                </div>
                
              </div>
            </div>
          )
        }
        <div className='flex justify-around mt-4 w-full text-2xl font-bold'>
          <div>Total Amount</div>
          <div>
            {totalPrice !== 0 && `$${totalPrice}`}
          </div>
        </div>
      </div>

      <div className='md:w-[30%] w-[40%] h-screen flex flex-col space-y-4 rounded-xl sticky top-20'>
        <div className='flex flex-col justify-center bg-white w-full py-4 space-y-2 rounded-3xl'>
          <span className='px-2 text-black/70 md:text-xl text-sm'>Address and Postal cart ....</span>
          <span className='md:text-base text-xs font-bold px-4'>
            Cecilia Chapman<br />
            711-2880 Nulla St.Mankato<br />
            Mississippi 96522<br />
            (257) 563-7401
          </span>
        </div>
        <div className='bg-white px-2 md:text-lg text-xs py-4 rounded-3xl'>
          Any Discount Code?
        </div>
        <div className='bg-white px-2 flex flex-col md:flex-row md:justify-between items-center md:text-lg text-xs py-4 rounded-3xl'>
          <span>Delivery Date</span>
          <span>2024/01/04</span>
        </div>
        <div>
          <Link href={'/Cart/Payment'}
            className='bg-petBlue border-1.5 border-petBlue px-2 flex justify-center items-center md:text-lg text-xs py-4 rounded-3xl 
          text-white hover:bg-white hover:text-petBlue transition-all duration-400 cursor-pointer'>
            CONFIRM PAYMENT
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Cart