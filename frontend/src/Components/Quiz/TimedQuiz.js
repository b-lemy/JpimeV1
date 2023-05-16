import React, {useEffect} from "react";
import Wrapper from "../Layout/Wrapper";
import './Quiz.css'
import QuizApi from "./QuizApi";
import quizApi from "./QuizApi";

const TimedQuiz = () => {

    useEffect(() => {
        const getQuiz = async () => {
            const apiPosts = await QuizApi.get("");
            console.log(apiPosts.data.results)
        }
        getQuiz();
    }, [])
    return (
        <Wrapper>
            <div className='timed-quiz'>
                <div className='quiz_body'>
                    <h2 className='quiz_question'> What is the capital city of Tanzania <br/>
                    <span className="category">Geography</span></h2>
                    <ol className="quiz-option">
                        {/*<li className="selected">Arusha</li>*/}
                        <li>Arusha</li>
                        <li>Dodoma</li>
                        <li>Dar es Salaam</li>
                    </ol>
                </div>
            </div>
        </Wrapper>
    )

}
export default TimedQuiz