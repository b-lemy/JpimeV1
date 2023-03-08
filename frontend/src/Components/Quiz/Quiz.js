import React from "react";
import Wrapper from "../Layout/Wrapper";
import './Quiz.css'
import {Link} from "react-router-dom";

const Quiz = () => {
    return (
        <Wrapper>
            <div className="QuizButtons">
                <Link className="Btns">Head to Head</Link>
                <Link className="Btns">Timed Quiz</Link>
                <Link className="Btns">Survival Quiz</Link>
            </div>
            <section>
                <h4 style={{textAlign: "center"}}>Quiz Summary</h4>
                <h6>Recent Quizzes :</h6>
                <div>
                    <table>
                        <tr>
                            <th>Quiz Type</th>
                            <th>Date</th>
                            <th>Score</th>
                        </tr>
                        <tr>
                            <td>H2H</td>
                            <td>19/jan/2020</td>
                            <td>70 %</td>
                        </tr>
                        <tr>
                            <td>Timed</td>
                            <td>5 days ago</td>
                            <td> 60 %</td>
                        </tr>
                        <tr>
                            <td>H2H</td>
                            <td>3 hrs ago</td>
                            <td>40 %</td>
                        </tr>
                    </table>

                </div>
                <span className="spn">
                    <p style={{fontSize: '12px',marginBottom:"0"}}>Average</p>
                    <p style={{textAlign:"center",marginBottom:"0"}}> 56%</p>
                </span>
            </section>
        </Wrapper>
    )
}
export default Quiz;