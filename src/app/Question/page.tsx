import QuestionHoc from '@/components/QuestionPage/QuestionHoc'
import Link from 'next/link'
import React from 'react'

const Question = () => {
  return (
    <div>
      <QuestionHoc step={0}>
        <Link href={'/Question/1'} className='w-[80%] py-2 bg-green-500 rounded-full text-white text-center text-xl hover:bg-green-600 transition-all duration-400 '>
          go to start question
        </Link>
      </QuestionHoc>
    </div>
  )
}

export default Question