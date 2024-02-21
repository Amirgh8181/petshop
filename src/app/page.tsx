import AboutUs from '@/components/Home/About-US'
import BlogPreview from '@/components/Home/BlogPreview'
import HeroSection from '@/components/Home/Hero'
import QuestionContainer from '@/components/Home/QuestionSection'
import ShopPreview from '@/components/Home/ShopPreview'
import React from 'react'

const Home = () => {
  return (
    <div className='space-y-8 md:space-y-20'>
      <HeroSection />
      <AboutUs />
      <ShopPreview />
      <QuestionContainer />

    </div>
  )
}

export default Home


/*
<BlogPreview />
*/