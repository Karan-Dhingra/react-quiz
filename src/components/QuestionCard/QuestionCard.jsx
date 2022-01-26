import React, { useEffect, useState } from 'react'
import { Data } from '../../Data'
import QuizCard from '../shared/QuizCard/QuizCard'

const QuestionCard = () => {
    const [marks, setMarks] = useState(0)
    const [question, setQuestion] = useState(0)

    useEffect(() => {
        const changeAns = () => {
            if (question > Data.length) {
                setQuestion('COMPLETED')
            }
            console.log('QUESTION: ' + question)
        }
        return () => {
            changeAns()
        }
    }, [question])

    return (
        <div>
            {question < Data.length ? (
                Data.slice(question, question + 1).map((ques) => (
                    <QuizCard
                        ques={ques}
                        key={ques._id}
                        setQuestion={setQuestion}
                        question={question}
                        length={Data.length}
                        marks={marks}
                        setMarks={setMarks}
                    />
                ))
            ) : (
                <QuizCard
                    setQuestion={setQuestion}
                    question={question}
                    marks={marks}
                    setMarks={setMarks}
                    length={Data.length}
                />
            )}
        </div>
    )
}

export default QuestionCard
