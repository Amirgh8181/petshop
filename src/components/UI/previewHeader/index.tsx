import Link from 'next/link'
import React from 'react'

const PreviewSectionsHeader = ({ previewSectionName, previewLink }: { previewSectionName: string, previewLink: string }) => {
    return (
        <div className='flex items-center justify-between md:px-20 px-4'>
            <h4>{previewSectionName}</h4>
            <Link href={previewLink} aria-label='redirect to other section'
                className='text-xl hover:text-petBlue cursor-pointer font-semibold'>
                More
            </Link>
        </div>
    )
}

export default PreviewSectionsHeader