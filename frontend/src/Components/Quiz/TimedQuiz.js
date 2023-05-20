import React, {useEffect, useState} from "react";
import Wrapper from "../Layout/Wrapper";
import './Quiz.css'
import QuizApi from "./QuizApi";

const TimedQuiz = () => {
    const [quiz, setquiz] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {

        setisLoading(true);
        const getQuiz = async () => {
            const apiPosts = await QuizApi.get("api.php?amount=1");
            console.log(apiPosts.data.results)
            setquiz(apiPosts.data.results)
            setisLoading(false)

        }
        getQuiz();
    }, [])
    return (
        <Wrapper>

            <div className='timed-quiz'>

                {isLoading
                    ? <div style={{display:"flex",alignItems:"center",justifyContent:"center", height:"70vh" }}> Loading ...</div>
                    : <div>
                        {quiz.map((item, index) => (
                            <div key={index} className='quiz_body'>
                                <h2 className='quiz_question'> {item.question.replace(/&quot;/g, '').replace(/&#039;/g, "'")}<br/>
                                    <span className="category">{item.category}</span></h2>
                                <ol className="quiz-option">
                                    {/*<li className="selected">Arusha</li>*/}

                                    {item.incorrect_answers
                                        .concat(item.correct_answer)
                                        .sort(() => Math.random() - 0.5)
                                        .map((answers, index) => (
                                            <li key={index}>{answers}</li>
                                        ))}
                                    {item.correct_answer}

                                </ol>
                            </div>
                        ))
                        }
                    </div>
                }
            </div>

        </Wrapper>
    )

}
export default TimedQuiz