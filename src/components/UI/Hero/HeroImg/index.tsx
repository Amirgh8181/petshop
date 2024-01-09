import Image from 'next/image'

const HeroImage = () => {

    return (
        <div className='w-full h-full flex justify-center items-center relative inset-0'>

            <div className='md:absolute flex justify-center items-center'>
                <div className='relative md:left-[5vw] md:top-[20vh] left-[20vw] top-[10vh]'>
                    <Image src={'/images/Hero/smal-dog.jfif'} alt='hero-dog' width={75} height={75} priority={true} quality={100}
                        className='relative    2xl:top-44 md:left-9 z-20 aspect-square rounded-full animate-bounce'
                    />
                </div>
                <div>
                    <Image src={'/images/Hero/big-dog.png'} alt='hero-dog' width={700} height={700} priority={true} quality={100}
                        className='w-[80%] h-[80%] mx-auto md:w-[100%] md:h-[100%]'
                    />
                </div>
                <div className='relative md:right-[8vw] right-[20%]'>
                    <Image src={'/images/Hero/smal-cat.jfif'} alt='hero-dog' width={75} height={75} priority={true} quality={100}
                        className='z-20 aspect-square rounded-full animate-bounce'
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