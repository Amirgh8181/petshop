import Image from 'next/image'


interface HeroImage {
    mainImage: string,
    width: string,
    animateImg: boolean,
    animateImg1?: string,
    animateImg2?: string
}
const HeroImage = ({ mainImage, width, animateImg, animateImg1, animateImg2 }: HeroImage) => {

    return (
        <div className='heroSection'>

            <div className='w-full h-full relative flex justify-center items-center px-4'>

                <Image
                    src={mainImage}
                    alt='hero-pic'
                    width={500}
                    height={500}
                    priority={true}
                    quality={100}
                    className={`${width} aspect-square`}
                />
                {
                    animateImg &&
                    <div className='absolute md:w-[65%] w-[70%] h-[60%] flex justify-between items-end'>

                        <div className='absolute right-0 max-w-40 flex justify-center items-center 2xl:p-16
                         md:p-8 p-6'
                        >
                            <Image
                                src={animateImg1 as string}
                                alt='animate-hero-pic1'
                                width={75}
                                height={75}
                                className='aspect-square absolute animate-bounce'
                            />
                        </div>

                        <div className='absolute left-0 max-w-40 flex justify-center items-center 2xl:p-16
                         md:p-8 p-6'
                        >
                            <Image
                                src={animateImg2 as string}
                                alt='animate-hero-pic2'
                                width={75}
                                height={75}
                                className='aspect-square absolute animate-bounce delay-1000'
                            />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default HeroImage
