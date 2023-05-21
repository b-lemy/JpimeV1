// step 1
import React, {createContext} from "react";
// import axios from "axios";
// import {useNavigate} from "react-router-dom";



const InitialState = {
    quizCategory: "",
    quizDifficulty: "",
    quizType: "",
    quizAmount: 20,
    score: 0
}

// const postReducer = (state, action) => {
//     return InitialState;
// }

// step 2
export const QContext = createContext(InitialState);



// step 3
export const QuizProvider = ({children}) => {


    const quizContext = {
        amount: 20,
        InitialState

    }

    return (
        <QContext.Provider value={quizContext}>
            {children}
        </QContext.Provider>
    )
}

