import React from 'react';
import {useLocation} from "react-router-dom";
import Wrapper from "../Layout/Wrapper";


const FinalScore = () => {
    const location = useLocation();
    const finaScore = location.state?.score;
    // console.log(finaScore)
    return (
        <Wrapper>
            <div className="finalScoreDiv">
            <h3>Final Score</h3>
            <span className="finalScore">{finaScore} </span>
            </div>
        </Wrapper>
    );
}

export default FinalScore