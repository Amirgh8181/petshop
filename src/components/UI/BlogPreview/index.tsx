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
    <div className='flex flex-wrap justify-center items-center w-full h-full'>
      {BlogPreviewItem.map(item =>
        <div key={item.image} className='max-w-[30%] py-4 flex justify-center items-center'>
            <motion.div
              className='w-[90%] flex flex-col border border-petBlue md:rounded-[3.5rem] rounded-lg'
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
            >
              <Image src={item.image} alt='BlogPreview' width={200} height={200} className='w-full md:h-[40vh] h-[20vh] md:rounded-t-[3.5rem] rounded-t-lg' />
              <div className='text-left text-bold md:text-lg text-sm md:px-8 font-bold'>{item.title}</div>
              <div className='text-left md:px-8 md:pb-6 px-1 pb-4 text-xs truncate'>{item.description}</div>
            </motion.div>
          </div>
      )
      }
    </div>
  )
}

export default BlogPreviewUi


