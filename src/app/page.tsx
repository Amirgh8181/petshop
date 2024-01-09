import AboutUs from '@/components/About-US'
import BlogPreview from '@/components/BlogPreview'
import HeroSection from '@/components/Hero'
import QuestionContainer from '@/components/QuestionSection'
import ShopPreview from '@/components/ShopPreview'
import React from 'react'

const Home = () => {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div className='mt-16'>
        <AboutUs />
      </div>
      <div>
        <ShopPreview />
      </div>
      <div>
        <QuestionContainer/>
      </div>
      <div>
        <BlogPreview />
      </div>
    </div>
  )
}

export default Home