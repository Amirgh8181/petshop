"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

interface BlogItem {
  image: string,
  title: string,
  description: string
}

const BlogPreviewUi = () => {

  const BlogPreviewItem: BlogItem[] = [
    { image: "/images/BlogPreview/1.jfif", title: "sunt in", description: "sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { image: "/images/BlogPreview/2.jfif", title: "sunt in", description: "sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { image: "/images/BlogPreview/3.jfif", title: "sunt in", description: "sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { image: "/images/BlogPreview/4.jfif", title: "sunt in", description: "sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { image: "/images/BlogPreview/5.jfif", title: "sunt in", description: "sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { image: "/images/BlogPreview/6.jfif", title: "sunt in", description: "sunt in culpa qui officia deserunt mollit anim id est laborum." },
  ]

  return (
    <>
      {BlogPreviewItem.map(item =>
        <motion.div key={item.description}
          className='max-w-[30vw] h-auto   flex flex-col border border-petBlue rounded-[3.5rem]'
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
        >
          <Image src={item.image} alt='BlogPreview' width={200} height={200} className='w-full h-[40vh] relative inset-0 rounded-t-[3.5rem]' />
          <div className='text-left text-bold md:text-lg text-base px-8 font-bold'>{item.title}</div>
          <div className='text-left px-8 pb-6 text-xs text-ellipsis overflow-hidden text-nowrap'>{item.description}</div>
        </motion.div>
      )
      }
    </>
  )
}

export default BlogPreviewUi