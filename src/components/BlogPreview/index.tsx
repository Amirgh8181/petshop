import React from 'react'
import BlogPreviewUi from '../UI/BlogPreview'

const BlogPreview = () => {
    return (
        <section id="BlogPreview" className='w-full'>
            <div className='flex items-center justify-between md:px-20 px-4'>
                <div className='text-4xl'>Blog</div>
                <div className='text-xl hover:text-petBlue cursor-pointer'>More</div>
            </div>
            <div className='mt-4'>
                <BlogPreviewUi />
            </div>
        </section>
    )
}

export default BlogPreview