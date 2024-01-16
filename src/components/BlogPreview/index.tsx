import React from 'react'
import BlogPreviewUi from '../UI/BlogPreview'
const BlogPreview = () => {
    return (
        <section id="BlogPreview">
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='w-full flex items-center justify-between md:px-20 px-4'>
                    <div className='text-4xl'>Blog</div>
                    <div className='text-xl hover:text-petBlue cursor-pointer'>More</div>
                </div>
                <div className='w-full h-full md:mt-10 mt-6'>
                    <BlogPreviewUi/>
                </div>
            </div>
        </section>
    )
}

export default BlogPreview