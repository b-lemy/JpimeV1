import React from "react";
import Wrapper from "../Layout/Wrapper";
import './Quiz.css'

const TimedQuiz = () => {
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