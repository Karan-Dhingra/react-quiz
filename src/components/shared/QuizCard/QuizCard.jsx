import React, { useEffect, useState } from 'react'
import './QuizCard.scss'

const QuizCard = ({ ques, setQuestion, question, length, marks, setMarks }) => {
    const [select, setSelect] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [completed, setCompleted] = useState(false)
    const [fetch, setFetch] = useState(false)
    const [timer, setTimer] = useState(5)
    const [isCorrect, setCorrect] = useState(false)

    useEffect(() => {
        const changeAns = () => {
            if (question + 1 > length) {
                setQuestion('COMPLETED')
            }
        }

        const startTimer = (duration, display) => {
            console.log('RUN')
            var timer = duration,
                minutes,
                seconds
            var test = setInterval(function () {
                minutes = parseInt(timer / 60, 10)
                seconds = parseInt(timer % 60, 10)

                minutes = minutes < 10 ? '0' + minutes : minutes
                seconds = seconds < 10 ? '0' + seconds : seconds

                display.textContent = minutes + ':' + seconds

                console.log(completed)

                if (--timer < 0) {
                    if (!submitted) {
                        console.log('DONE')
                        setSubmitted(true)
                    }
                    setCompleted(true)
                    // setQuestion(question + 1)
                    clearInterval(test)
                }

                if (completed) {
                    console.log('DONE2')
                    clearInterval(test)
                }
            }, 1000)
            console.log(completed + 'TEST')
        }

        if (!fetch && question !== 'COMPLETED') {
            var display = document.getElementById('time')
            startTimer(timer, display)
            setFetch(true)
        }

        console.log(completed)

        if (completed) {
            // console.log(isCorrect, select, ques.ans)
            if (isCorrect) {
                setMarks(marks + 1)
            }
        }

        return () => {
            changeAns()
        }
    }, [question, fetch, completed])

    return (
        <div className='background'>
            <div className='container'>
                {question !== 'COMPLETED' ? (
                    <>
                        {/* Questions */}
                        <div className='question'>
                            <h2>
                                <b>Ques{question + 1}: </b> {ques?.ques}
                            </h2>
                        </div>
                        {/* 4 Choices */}
                        <div className='choices'>
                            <div className='row'>
                                <div
                                    className='choice'
                                    onClick={() => {
                                        setSelect('a')
                                        if (ques?.ans === 'a') {
                                            setCorrect(true)
                                        } else {
                                            setCorrect(false)
                                        }
                                    }}
                                    style={{
                                        background:
                                            ques?.ans === 'a' && submitted
                                                ? 'green'
                                                : ques?.ans !== 'a' &&
                                                  submitted &&
                                                  !isCorrect
                                                ? 'red'
                                                : select === 'a' && !submitted
                                                ? '#1a1919de'
                                                : '',
                                    }}
                                >
                                    <b>A)</b> {ques?.a}
                                </div>
                                <div
                                    className='choice'
                                    onClick={() => {
                                        setSelect('b')
                                        if (ques?.ans === 'b') {
                                            setCorrect(true)
                                        } else {
                                            setCorrect(false)
                                        }
                                    }}
                                    style={{
                                        background:
                                            ques?.ans === 'b' && submitted
                                                ? 'green'
                                                : ques?.ans !== 'b' &&
                                                  submitted &&
                                                  !isCorrect
                                                ? 'red'
                                                : select === 'b' && !submitted
                                                ? '#1a1919de'
                                                : '',
                                    }}
                                >
                                    <b>B)</b> {ques?.b}
                                </div>
                            </div>
                            <div className='row'>
                                <div
                                    className='choice'
                                    onClick={() => {
                                        setSelect('c')
                                        if (ques?.ans === 'c') {
                                            setCorrect(true)
                                        } else {
                                            setCorrect(false)
                                        }
                                    }}
                                    style={{
                                        background:
                                            ques?.ans === 'c' && submitted
                                                ? 'green'
                                                : ques?.ans !== 'c' &&
                                                  submitted &&
                                                  !isCorrect
                                                ? 'red'
                                                : select === 'c' && !submitted
                                                ? '#1a1919de'
                                                : '',
                                    }}
                                >
                                    <b>C)</b> {ques?.c}
                                </div>
                                <div
                                    className='choice'
                                    onClick={() => {
                                        setSelect('d')
                                        if (ques?.ans === 'd') {
                                            setCorrect(true)
                                        } else {
                                            setCorrect(false)
                                        }
                                    }}
                                    style={{
                                        background:
                                            ques?.ans === 'd' && submitted
                                                ? 'green'
                                                : ques?.ans !== 'd' &&
                                                  submitted &&
                                                  !isCorrect
                                                ? 'red'
                                                : select === 'd' && !submitted
                                                ? '#1a1919de'
                                                : '',
                                    }}
                                >
                                    <b>D)</b> {ques?.d}
                                </div>
                            </div>
                        </div>
                        {/* Timer */}
                        {completed ? (
                            <div className='timer'>01:00</div>
                        ) : (
                            <div className='timer' id='time'>
                                01:00
                            </div>
                        )}
                        {/* Submit Next Option */}
                        <div className='submitOptions'>
                            <button
                                className='submit'
                                disabled={submitted}
                                onClick={() => {
                                    if (isCorrect) {
                                        setMarks(marks + 1)
                                    }
                                    // setCompleted(true)
                                    setTimer(0)
                                    setSubmitted(true)
                                }}
                                style={{
                                    cursor: submitted
                                        ? 'not-allowed'
                                        : 'pointer',
                                }}
                            >
                                SUBMIT
                            </button>
                            <button
                                className='next'
                                disabled={!submitted}
                                onClick={() => {
                                    if (submitted) {
                                        setQuestion(question + 1)
                                    }
                                }}
                                style={{
                                    cursor: !submitted
                                        ? 'not-allowed'
                                        : 'pointer',
                                }}
                            >
                                NEXT
                            </button>
                        </div>
                    </>
                ) : (
                    <div className='completed'>
                        <h1>🎊COMPLETED🎊</h1>
                        <p>Marks: {`${marks}/${length}`}</p>
                        <p className='thankyou'>
                            CONGRATS!! 🎉🎉 You have Completed Quiz.. You can
                            Relazz Noww...
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default QuizCard
