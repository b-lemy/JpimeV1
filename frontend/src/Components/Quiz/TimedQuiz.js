import React, {useEffect, useState} from "react";
import Wrapper from "../Layout/Wrapper";
import './Quiz.css'
// import axios from "axios";
import {useLocation, useNavigate} from 'react-router-dom';
import {decode} from "html-entities";
import quizApi from "../../api/QuizApi";
import LaravelApi from "../../api/LaravelApi";

const TimedQuiz = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const myData = location.state?.myData;
    const [quiz, setQuiz] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true)
    // console.log(myData)


    const handleAnswerClick = (correct_answer, answer) => {
        // setSelectedAnswerIndex(2)
        // console.log(answer)
        // console.log(correct_answer)
        // console.log(selectedAnswerIndex)
         if (correct_answer === answer) {
        setScore(score + 1);
        }
        // Move to the next question
        nextQuestion();
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < quiz.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            navigate('/quiz/timed_quiz/finalScore', {state: {score}})

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
                // console.log(apiPosts)
            }
            const apiQuiz = await quizApi.get(apiPosts);
            // console.log(apiQuiz.data.results)
            setQuiz(apiQuiz.data.results);
            const dataToBackend = apiQuiz.data.results
            setIsLoading(false)
            const response = await LaravelApi.post('/insert-questions', {dataToBackend});
             // console.log(response)

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
                    : <div className='quiz_body'>
                        <h1 className="title">Question {currentQuestionIndex + 1}</h1>
                        <h2 className='quiz_question'> {decode(quiz[currentQuestionIndex].question)}<br/>
                            <span className="category">
                                {decode(quiz[currentQuestionIndex].category)}
                            </span>
                        </h2>

                        <ol className="quiz-option">
                            {/*<li className="selected">Arusha</li>*/}
                            {decode(quiz[currentQuestionIndex].incorrect_answers
                                .concat(quiz[currentQuestionIndex].correct_answer)
                                .sort(() => Math.random() - 0.5)
                                .map((answer, index) => (
                                    <li
                                        onClick={() => handleAnswerClick(quiz[currentQuestionIndex].correct_answer, answer)}
                                        key={index}
                                        className={index === selectedAnswerIndex ? 'selected' : ''}
                                    >{decode(answer)}</li>
                                )))}
                            {quiz[currentQuestionIndex].correct_answer}
                            {/*<button onClick={handleAnswerClick}> done</button>*/}

                        </ol>
                        <h1 className="title">Score ( {score} / {quiz.length})</h1>


                    </div>


                }
            </div>

        </Wrapper>
    )

}
export default TimedQuiz