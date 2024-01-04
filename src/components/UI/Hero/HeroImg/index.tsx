import Image from 'next/image'
import { AiOutlineSafety } from "react-icons/ai";
const HeroImage = () => {
    return (
        <div >
            <div className='p-1 w-44 relative top-48 -left-28 rounded-full flex items-center bg-white z-20'>
                <div className='w-12 h-10 text-3xl bg-petBlue rounded-full flex justify-center items-center text-white ml-2'>
                    <AiOutlineSafety />
                </div>
                <p className='text-md font-normal text-center'>
                    100% safe and secured
                </p>
            </div>
            <div className='flex h-[50vh]'>
                <Image src={'/images/Hero/smal-dog.jfif'} alt='hero-dog' width={100} height={100} priority={true} quality={100}
                    className='w-[4.75rem] h-14 relative top-56 left-3 rounded-full z-20 animate-bounce' />
                <Image src={'/images/Hero/big-dog.png'} alt='hero-dog' width={400} height={400} priority={true} quality={100}
                    className='relative top-8 w-full h-full scale-150' />
                <Image src={'/images/Hero/smal-cat.jfif'} alt='hero-dog' width={100} height={100} priority={true} quality={100}
                    className='w-[4.75rem] h-14 relative top-32 right-3 rounded-full z-20 animate-bounce' />

            </div>
        </div>
    )
}

export default HeroImage