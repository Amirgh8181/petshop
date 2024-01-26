import AboutUs from '@/components/Home/About-US'
import BlogPreview from '@/components/Home/BlogPreview'
import HeroSection from '@/components/Home/Hero'
import QuestionContainer from '@/components/Home/QuestionSection'
import ShopPreview from '@/components/Home/ShopPreview'
import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <div>
        <HeroSection />
      </div>
      <div className='mt-12 md:mt-24'>
        <AboutUs />
      </div>
      <div className='mt-12 md:mt-24'>
        <ShopPreview />
      </div>
      <div className='mt-12 md:mt-24'>
        <QuestionContainer/>
      </div>
      <div className='mt-12 md:mt-24'>
        <BlogPreview />
      </div>
    </div>
  )
}

export default Home