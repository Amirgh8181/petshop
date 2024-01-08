"use client"
import Image from 'next/image'
import {motion} from 'framer-motion'

interface BlogItem {
  image: string,
  title: string,
  description: string
}

const BlogPreviewUi = () => {

  const BlogPreviewItem :BlogItem[]= [
    { image: "/images/BlogPreview/1.jfif", title: "sunt in", description: "sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { image: "/images/BlogPreview/2.jfif", title: "sunt in", description: "sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { image: "/images/BlogPreview/3.jfif", title: "sunt in", description: "sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { image: "/images/BlogPreview/4.jfif", title: "sunt in", description: "sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { image: "/images/BlogPreview/5.jfif", title: "sunt in", description: "sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { image: "/images/BlogPreview/6.jfif", title: "sunt in", description: "sunt in culpa qui officia deserunt mollit anim id est laborum." },
  ]

  return (
    <motion.div className='w-full flex flex-wrap gap-4 justify-center my-4'>
      {BlogPreviewItem.map(item =>
        <motion.div key={item.description} 
        className='max-w-[27vw] flex flex-col border-2 border-petBlue rounded-[3.5rem]'
        initial={{scale:0,opacity:0}}
        whileInView={{scale:1,opacity:1}}
        >
          <Image src={item.image} alt='BlogPreview' width={200} height={200} className='w-full h-[40vh] relative inset-0 rounded-t-[3.5rem]'/>
          <div className='text-left text-bold text-lg p-2 font-bold'>{item.title}</div>
          <div className='text-left px-4 pb-4'>{item.description}</div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default BlogPreviewUi