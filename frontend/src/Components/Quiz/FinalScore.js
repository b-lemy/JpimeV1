import React from 'react';
import {useLocation} from "react-router-dom";
import Wrapper from "../Layout/Wrapper";


const FinalScore = () => {
    const location = useLocation();
    const finaScore = location.state?.score;
    // console.log(finaScore)
    return (
        <Wrapper>
            <div> {finaScore}</div>
        </Wrapper>
    );
}

export default FinalScore