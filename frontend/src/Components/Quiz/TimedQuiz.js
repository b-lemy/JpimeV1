import React, {useEffect, useState} from "react";
import Wrapper from "../Layout/Wrapper";
import './Quiz.css'
import axios from "axios";
import {useLocation} from 'react-router-dom';
import {decode} from "html-entities";

const TimedQuiz = () => {
    const location = useLocation();
    const myData = location.state?.myData;
    const [quiz, setquiz] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true)
    console.log(myData)


    const correctAnswerHandler = (index) => {

    }

    // const handleAnswerClick = (item ,answer) => {
    //     // setSelectedAnswerIndex(2)
    //     console.log(selectedAnswerIndex)
    //      if (item.correct_answer === answer) {
    //     setScore(score + 1);
    //     }
    //     // Move to the next question
    //     nextQuestion();
    // };

    const handleAnswerClick = () => {
        // setSelectedAnswerIndex(2)
        console.log(selectedAnswerIndex)
        if (true) {
            setScore(score + 1);
        }
        // Move to the next question
        nextQuestion();
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < quiz.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            console.log('No more questions');
            console.log('Final Score:', score);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        const getQuiz = async () => {
            let apiPosts = `https://opentdb.com/api.php?amount=${myData[0]}`;

            if (myData[1]) {
                apiPosts = apiPosts.concat(`&category=${myData[1]}`);

            }
            if (myData[2]) {
                apiPosts = apiPosts.concat(`&difficulty=${myData[2]}`);
            }
            if (myData[3]) {
                apiPosts = apiPosts.concat(`&type=${myData[3]}`);
                console.log(apiPosts)
            }
            const apiQuiz = await axios.get(apiPosts);
            console.log(apiQuiz.data.results)
            setquiz(apiQuiz.data.results)
            setIsLoading(false)
        }
        getQuiz();
    }, [myData])
    return (
        <Wrapper>
            <div className='timed-quiz'>
                {isLoading
                    ? <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "70vh"}}>
                        <div className="spinner-grow text-success" role="status">
                        </div>
                    </div>
                    :

                    <div className='quiz_body'>
                        <h1 className="title">Question {currentQuestionIndex + 1}</h1>
                        <h2 className='quiz_question'> {decode(quiz[currentQuestionIndex].question)}<br/>
                            <span className="category">{decode(quiz[currentQuestionIndex].category)}</span>
                        </h2>

                        <ol className="quiz-option">
                            {quiz[currentQuestionIndex].incorrect_answers
                                .concat(quiz[currentQuestionIndex].correct_answer)
                                .sort(() => Math.random() - 0.5)
                                .map((answer, index) => (
                                    <li
                                        // onClick={() => handleAnswerClick(item, answer)}
                                        key={index}
                                        // className={index === selectedAnswerIndex ? 'selected' : ''}
                                    >{decode(answer)}</li>
                                ))}
                            {quiz[currentQuestionIndex].correct_answer}
                            {/*<button onClick={handleAnswerClick}> done</button>*/}

                        </ol>
                        <h1 className="title">Score ( {score} / {quiz.length})</h1>


                    </div>



                    // <div>
                    //     {quiz.map((item, index) => (
                    //         <div key={index} className='quiz_body'>
                    //             <h1 className="title">Question {index + 1}</h1>
                    //             <h2 className='quiz_question'> {decode(item.question)}<br/>
                    //                 <span className="category">{item?.category}</span></h2>
                    //             <ol className="quiz-option">
                    //                 {/*<li className="selected">Arusha</li>*/}
                    //
                    //                 {item.incorrect_answers
                    //                     .concat(item.correct_answer)
                    //                     .sort(() => Math.random() - 0.5)
                    //                     .map((answer, index) => (
                    //                         <li
                    //                             onClick={() => handleAnswerClick(item ,answer)}
                    //                             key={index}
                    //                             // className={index === selectedAnswerIndex ? 'selected' : ''}
                    //                         >{decode(answer)}</li>
                    //                     ))}
                    //                 {item.correct_answer}
                    //
                    //             </ol>
                    //             <h1 className="title">Score ( {score} / {quiz.length})</h1>
                    //         </div>
                    //     ))
                    //     }
                    // </div>
                }
            </div>

        </Wrapper>
    )

}
export default TimedQuiz