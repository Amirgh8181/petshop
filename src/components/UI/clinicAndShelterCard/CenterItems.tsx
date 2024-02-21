import React from 'react'

const CenterItems = ({ icon, text }: { icon: React.JSX.Element, text: string }) => {
    return (
        <div className='flex space-x-2 w-full justify-center md:justify-start'>
            <span className='text-lg lg:text-2xl'>
                {icon}
            </span>
            <p className='w-[70%] md:w-[90%] md:text-sm text-xs xl:text-lg  font-normal'>
                {text}
            </p>
        </div >
    )
}

export default CenterItems