import Image from 'next/image'
import { AiOutlineSafety } from "react-icons/ai";
const HeroImage = () => {
    return (
        <div className='flex w-[50%] h-full '>


        </div >
    )
}

export default HeroImage


/*
<div className='h-full'>
                    <div className='absolute aspect-auto rounded-full flex items-center justify-between bg-white z-20 md:text-base text-xs'>
                        <div className='text-3xl bg-petBlue rounded-full flex justify-center items-center text-white ml-2'>
                            <AiOutlineSafety />
                        </div>
                        <p className='text-md font-normal text-center'>
                            100% safe and secured
                        </p>
                    </div>
                </div>

                <div className='absolute h-full flex items-center md:ml-14 ml-6 z-20'>
                    <Image src={'/images/Hero/smal-dog.jfif'} alt='hero-dog' width={50} height={50} priority={true} quality={100}
                        className='aspect-square animate-bounce rounded-full mt-36'
                    />
                </div>
                <div className='absolute w-full h-full flex z-10'>
                    <Image src={'/images/Hero/big-dog.png'} alt='hero-dog' width={400} height={400} priority={true} quality={100}
                        className=''
                    />
                </div>
                <div className='absolute h-full flex  md:mb-0 items-center mb-6 z-20'>
                    <Image src={'/images/Hero/smal-cat.jfif'} alt='hero-dog' width={50} height={50} priority={true} quality={100}
                        className='aspect-square animate-bounce rounded-full'
                    />
                </div>










                
            <div className='flex flex-col'>
                <div className='flex p-1'>
                    <div>
                        <AiOutlineSafety />
                    </div>
                    <p className='md:text-md text-xs text-center'>
                        100% safe and secured
                    </p>
                </div>


                <div className='relative w-full h-full'>
                    <Image src={'/images/Hero/smal-dog.jfif'} alt='hero-dog' width={50} height={50} priority={true} quality={100}
                        className='aspect-square animate-bounce rounded-full'
                    />
                </div>
            </div>


            <div className='relative w-full h-full'>
                <Image src={'/images/Hero/big-dog.png'} alt='hero-dog' width={700} height={700} priority={true} quality={100}
                    className='w-auto h-auto scale-x-150'
                />
            </div>

            <div className='relative w-full h-full'>
                <Image src={'/images/Hero/smal-cat.jfif'} alt='hero-dog' width={50} height={50} priority={true} quality={100}
                    className='aspect-square animate-bounce rounded-full'
                />
            </div>

*/