import React from 'react'
import BlogPreviewUi from '../UI/BlogPreview'
const BlogPreview = () => {
    return (
        <section id="BlogPreview" className='w-full'>
            <div className='w-full space-y-[4%] flex flex-wrap justify-center my-4'>
                <div className='w-full flex items-center justify-between md:px-20 px-4'>
                    <div className='text-4xl'>Blog</div>
                    <div className='text-xl hover:text-petBlue cursor-pointer'>More</div>
                </div>
                <div className='w-full min-h-screen px-8 flex flex-wrap justify-center gap-4'>
                    <BlogPreviewUi />
                </div>
            </div>
        </section>
    )
}

export default BlogPreview