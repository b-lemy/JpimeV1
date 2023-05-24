import React from "react";
import Wrapper from "../Layout/Wrapper";
import './Quiz.css'
import {Link} from "react-router-dom";

const Quiz = () => {

    return (
        <Wrapper>
            <div className="QuizButtons">
                <Link to='' className="Btns">Head to Head</Link>
                <Link to='/quiz/category' className="Btns">Timed Quiz</Link>
                <Link to='' className="Btns">Survival Quiz</Link>
            </div>

            <section className="QuizSection">
                <h4 style={{textAlign: "center"}}>Quiz Summary</h4>
                <h6>Recent Quizzes :</h6>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Quiz Type</th>
                            <th>Date</th>
                            <th>Score</th>
                            <th>Attempts</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>H2H</td>
                            <td>19/jan/2020</td>
                            <td>70 %</td>
                            <td>7</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Timed</td>
                            <td>5 days ago</td>
                            <td> 60 %</td>
                            <td>2</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>H2H</td>
                            <td>3 hrs ago</td>
                            <td>40 %</td>
                            <td>1</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <span className="spn">
                    <p style={{fontSize: '12px', marginBottom: "0",fontWeight:"bolder"}}>Average</p>
                    <p style={{textAlign: "center", marginBottom: "0",fontWeight:"bolder"}}> 56%</p>
                </span>
            </section>
        </Wrapper>
    )
}
export default Quiz;