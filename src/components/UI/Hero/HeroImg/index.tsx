import Image from 'next/image'

const HeroImage = () => {

    return (
        <div className='w-full h-full flex justify-center relative inset-0'>

            <div className='md:absolute translate-y-4 flex justify-center items-center'>
                <div className='md:block hidden'>
                    <Image src={'/images/Hero/smal-dog.jfif'} alt='hero-dog' width={75} height={75} priority={true} quality={100}
                        className='relative top-[15%] left-[13%] md:top-20  2xl:top-44 md:left-9 z-20 aspect-square rounded-full animate-bounce'
                    />
                </div>
                <div>
                    <Image src={'/images/Hero/big-dog.png'} alt='hero-dog' width={400} height={400} priority={true} quality={100}
                        className='2xl:scale-150 md:scale-110 scale-90 max-w-[100%] aspect-[10/11]'
                    />
                </div>
                <div className='md:block hidden'>
                    <Image src={'/images/Hero/smal-cat.jfif'} alt='hero-dog' width={75} height={50} priority={true} quality={100}
                        className='relative right-[14%] md:right-10 z-20 aspect-square rounded-full animate-bounce'
                    />
                </div>

            </div>


        </div>
    )
}

export default HeroImage


/*

                    <Image src={'/images/Hero/smal-dog.jfif'} alt='hero-dog' width={75} height={75} priority={true} quality={100}
                        className='aspect-square rounded-full animate-bounce'
                    /> 
                    

                                        <Image src={'/images/Hero/smal-cat.jfif'} alt='hero-dog' width={75} height={75} priority={true} quality={100}
                        className='aspect-square rounded-full animate-bounce'
                    />

*/