import React from "react";
import Wrapper from "../Layout/Wrapper";
import './Quiz.css'

const TimedQuiz = () => {
    return (
        <Wrapper>
            <div className='timed-quiz'>
                <div className='quiz_body'>
                    <h2 className='quiz_question'> What is the capital city of Tanzania</h2>
                    <ul>
                        <li>1.Arusha</li>
                        <li>2.Dodoma</li>
                        <li>3.Dar es Salaam</li>
                    </ul>
                </div>
            </div>
        </Wrapper>
    )

}
export default TimedQuiz