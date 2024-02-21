import BlogPreviewUi from '../../UI/BlogPreview'
import PreviewSectionsHeader from '@/components/UI/previewHeader'
const BlogPreview = () => {
    return (
        <section id="BlogPreview" className='w-full'>
                <PreviewSectionsHeader previewLink='/Blog' previewSectionName='Blog' />
                <BlogPreviewUi />
        </section>
    )
}

export default BlogPreview