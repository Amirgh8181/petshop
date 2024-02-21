import React from 'react'

interface HeroText {
    titleh1?: string,
    titleh2?: string,
    description: string
}
const HeroText = ({ titleh1, titleh2, description }: HeroText) => {
    return (
        <div className='heroSection flex justify-center items-center '>

            <div className='flex flex-col items-center justify-center md:text-left text-center
         text-white p-4 md:p-8 mt-4 space-y-4'>
                {titleh1 && <h1 className='w-full md:w-[80%]'>{titleh1}</h1>}
                {titleh2 && <h2 className='w-full md:w-[80%]'>{titleh2}</h2>}
                <h6 className='font-medium md:w-[80%]'>
                    {description}
                </h6>
            </div>
        </div>
    )
}

export default HeroText


/*

*/