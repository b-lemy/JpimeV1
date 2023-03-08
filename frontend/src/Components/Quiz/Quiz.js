import React from "react";
import Wrapper from "../Layout/Wrapper";
import './Quiz.css'

const Quiz = () => {
    return(
        <Wrapper>
        <div className="QuizButtons">
            <div className="Btns">Head to Head</div>
            <div className="Btns">Timed Quiz</div>
            <div className="Btns">Survival Quiz</div>
        </div>
            <section>
                <h4 style={{textAlign:"center"}}>Quiz Summary</h4>
                <div>
                    <h6>Recent Quizzes</h6>
                    <table>
                        <tr>1</tr>
                        <tr>2</tr>
                        <tr>3</tr>
                    </table>

                </div>
                <span>30</span>
            </section>
        </Wrapper>
    )
}
export default Quiz;