import React, {useEffect, useState} from "react";
import Wrapper from "../Layout/Wrapper";
import './Quiz.css'
import {Link} from "react-router-dom";
import LaravelApi from "../../api/LaravelApi";

const Quiz = () => {
    const [Results, setResults] = useState([])

    useEffect(() => {
        const quizResults = async () => {
            const results = await LaravelApi.get('get-results')
            // console.log(results.data.data)
            setResults(results.data.data)
        }
        quizResults()

    }, [])


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
                            <th style={{textAlign:"center"}}>Quiz Type</th>
                            <th style={{textAlign:"center"}}>Date</th>
                            <th style={{textAlign:"center"}}>Score</th>
                            <th style={{textAlign:"center"}}>Attempts</th>

                        </tr>
                        </thead>
                        <tbody>

                        {Results.map((item, id) => (
                            <tr key={id}>

                                <td>H2H</td>
                                <td> {item.created_at}</td>
                                <td> {item.score} %</td>
                                <td> {item.quiz}</td>

                            </tr>
                        ))}
                        </tbody>
                        <tbody>
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