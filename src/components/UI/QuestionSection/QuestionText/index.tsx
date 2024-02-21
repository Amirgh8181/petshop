
import Link from 'next/link';
import React from 'react'
import { RedirectButtonBgwhite } from '../../Buttons/Buttons';

const QuestionText = () => {
    return (
        <div className='flex flex-col items-center justify-center md:text-left text-center text-white md:space-y-8 space-y-4 md:w-[70%] w-[90%]'>
            <h2>culpa qui officia deserunt </h2>
            <p className='md:text-xl text-sm'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur Excepteur sint.
            </p>
            <div className='w-full aspect-[9/1] md:space-x-4 flex '>
                <div className='md:w-1/2 w-full h-full '>
                    <RedirectButtonBgwhite content='Ask Anything' size='w-full aspect-[10/3]' redirectLink='/Question' />
                </div>
                <button className='shadow-xl rounded-full hover:bg-white hover:text-petBlue transition-all duration-500 md:w-1/2 w-full aspect-[10/3]'>learn more {`>`}</button>
            </div>
        </div>
    )
}

export default QuestionText;


