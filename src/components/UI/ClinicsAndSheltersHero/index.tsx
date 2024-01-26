import Image from 'next/image'
import React from 'react'

export const ClinicsAndSheltersHero = ({img}:{img:string}) => {
    return (
        <div className='w-full md:h-[80vh] flex flex-col md:flex-row md:justify-between items-center mt-8 md:mt-12'>
            <div className='md:w-1/2 w-[90%] flex justify-center items-center '>
                <div className='w-[90%] md:w-[80%] h-full flex flex-col justify-center md:space-y-8 space-y-4 text-center md:text-left'>
                    <h1 className='md:text-5xl text-2xl font-bold'>culpa qui officia deserunt </h1>
                    <p className='md:text-xl text-sm md:w-[90%] text-black/70'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur Excepteur sint.
                    </p>
                    <div className='w-full md:space-x-4 flex justify-between'>
                        <button
                            className='bg-petBlue text-white rounded-full hover:bg-white hover:text-petBlue border-2 border-petBlue
                 transition-all duration-500 md:w-[60%] w-[40%] flex items-center justify-center py-4'>Ask Anything</button>
                        <button className='shadow-xl rounded-full hover:bg-white 
                hover:text-petBlue transition-all duration-500 md:w-[60%] w-[40%] py-4'>learn more {`>`}</button>
                    </div>
                </div>

            </div>


            <div className='w-full md:w-1/2 aspect-square flex justify-center items-center' >
                <Image src={img} alt='clinic hero img' width={500} height={500}
                    className='w-[80%]' />
            </div>
        </div>
    )
}

