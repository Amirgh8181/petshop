import React from 'react'

const CenterItems = ({ icon, text }: { icon: React.JSX.Element, text: string }) => {
    return (
        <div className=' flex space-x-2'>
            <span className='text-lg'>
                {icon}
            </span>
            <span>
                {text}
            </span>
        </div >
    )
}

export default CenterItems