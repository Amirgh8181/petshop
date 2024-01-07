import Image from 'next/image'
import { AiOutlineSafety } from "react-icons/ai";

const AboutUsImage = () => {
    return (
        <div className='order-2 md:order-1 flex justify-end items-center md:w-1/2 mt-8 md:mt-0'>

            <div className='aspect-square w-[70vw] md:w-auto 2xl:w-[20vw] border-[15px] md:border-[30px]
                        border-l-petBlue border-b-petBlue border-t-petBlue  rounded-full 
                        overflow-hidden'
            >
                <Image src={'/images/about-us/about-us.png'} alt='about-us' width={400} height={400}
                    className='rounded-full aspect-square object-center scale-125 origin-bottom'
                />

            </div>

        </div>
    )
}

export default AboutUsImage