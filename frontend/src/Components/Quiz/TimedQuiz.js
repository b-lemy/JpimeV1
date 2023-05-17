import React, {useEffect, useState} from "react";
import Wrapper from "../Layout/Wrapper";
import './Quiz.css'
import QuizApi from "./QuizApi";

const TimedQuiz = () => {
    const [quiz, setquiz] = useState([])

    useEffect(() => {
        const getQuiz = async () => {
            const apiPosts = await QuizApi.get("");
            console.log(apiPosts.data.results)
            setquiz(apiPosts.data.results)

        }
        getQuiz();
    }, [])
    return (
        <Wrapper>

            <div className='timed-quiz'>
                {quiz.map((item , index) => (
                    <div key={index} className='quiz_body'>
                        <h2 className='quiz_question'> {item.question} <br/>
                            <span className="category">{item.category}</span></h2>
                        <ol className="quiz-option">
                            {/*<li className="selected">Arusha</li>*/}

                            {item.incorrect_answers.map(answers =>(
                                <li>{answers}</li>

                            ))}
                        </ol>
                    </div>
                ))
                }
            </div>

        </Wrapper>
    )

}
export default TimedQuiz