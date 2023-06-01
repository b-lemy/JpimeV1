import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import Wrapper from "../Layout/Wrapper";
import laravelApi from "../../api/LaravelApi";


const FinalScore = () => {
    const location = useLocation();
    const [final , setFinal] =useState(location.state?.score + 1)
    const finalScore = location.state?.score + 1;

    useEffect(() =>{
        const sendFinalScore = async () =>{
             const data = await laravelApi.post("/insert-results",{final})
        }
        sendFinalScore()

    },[final])

    return (
        <Wrapper>
            <div className="finalScoreDiv">
            <h3>Final Score</h3>
            <span className="finalScore">{finalScore}</span>
            </div>
        </Wrapper>
    );
}

export default FinalScore