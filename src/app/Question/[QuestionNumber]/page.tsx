import QuestionContainer from '@/components/QuestionPage/QuestionContainer';
import QuestionHoc from '@/components/QuestionPage/QuestionHoc';
import React from 'react'

interface questionNumber {
    params: {
        QuestionNumber: string
    }
}

const QuestionNumber = ({ params }: questionNumber) => {


    return (
        <QuestionHoc step={Number(params.QuestionNumber)}>
            <QuestionContainer questionNumber={Number(params.QuestionNumber)} />
        </QuestionHoc>
    )
}

export default QuestionNumber