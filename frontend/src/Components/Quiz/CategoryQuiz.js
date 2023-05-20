import React, {useEffect, useState} from "react";
import Wrapper from "../Layout/Wrapper";
import './Quiz.css'
import QuizApi from "./QuizApi";

const TimedQuiz = () => {
    // const [quiz, setquiz] = useState([])

    useEffect(() => {
        // const getQuiz = async () => {
        //     const apiPosts = await QuizApi.get("");
        //     console.log(apiPosts.data.results)
        //     setquiz(apiPosts.data.results)
        //
        // }
        // getQuiz();
    }, [])
    return (
        <Wrapper>
        </Wrapper>
    )

}
export default TimedQuiz