"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { CustomRadio } from '../CustomRadio'
import { useQuestionScore } from '@/stores/Question/useQuestionScore'
import Link from 'next/link'


interface questionData {
    [key: number]: { 5: string, 10: string, 15: string, 20: string }
}

const QuestionContainer = ({ questionNumber }: { questionNumber: number }) => {
    const questionData: questionData = {
        1: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        2: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        3: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        4: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        5: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        6: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        7: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        8: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        9: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        10: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        11: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        12: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        13: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        14: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        15: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        16: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        17: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        18: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        19: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
        20: { 5: "lorem5", 10: "lorem10", 15: "lorem15", 20: "lorem20" },
    }
    const router = useRouter()
    const { QuestionScore, setQuestionState, setQuestionScore } = useQuestionScore()
    const [disableFlag, setDisableFlag] = useState<boolean>(false)

    const handleQusetionRadio = (questionValue: number) => {
        setDisableFlag(true)
        setQuestionState(questionValue, questionNumber)

        if (questionNumber <= 20) {
            let nextPage = questionNumber + 1;
            router.push(`/Question/${nextPage}`)
        }
        if (questionNumber + 1 === 21) {
            setQuestionScore()
        }

    }



    return (
        <div className='w-full flex flex-col items-center space-y-4'>

            {questionNumber <= 20 ?
                <div className='w-[80%] space-y-4'>
                    <CustomRadio Score={5} title={questionData[questionNumber][5]} number={1} disable={disableFlag} handleQuestion={handleQusetionRadio} />
                    <CustomRadio Score={10} title={questionData[questionNumber][10]} number={2} disable={disableFlag} handleQuestion={handleQusetionRadio} />
                    <CustomRadio Score={15} title={questionData[questionNumber][15]} number={3} disable={disableFlag} handleQuestion={handleQusetionRadio} />
                    <CustomRadio Score={20} title={questionData[questionNumber][20]} number={4} disable={disableFlag} handleQuestion={handleQusetionRadio} />
                </div>
                :
                <div className='w-full flex flex-col items-center space-y-4'>
                    <div className='text-lg font-bold'>your score:</div>
                    <div className='text-lg font-bold'>{QuestionScore}</div>
                    <Link href={'/'} className='w-[80%] py-2 bg-green-500 rounded-full text-white text-center text-xl hover:bg-green-600 transition-all duration-400 '>
                        go to Home
                    </Link>
                </div>
            }
        </div>
    )
}

export default QuestionContainer