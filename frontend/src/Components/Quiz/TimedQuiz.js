import React, {useEffect, useState} from "react";
import Wrapper from "../Layout/Wrapper";
import './Quiz.css'
import axios from "axios";
import {useLocation} from 'react-router-dom';

const TimedQuiz = () => {
    const location = useLocation();
    const myData = location.state?.myData;
    const [quiz, setquiz] = useState([])
    const [isLoading, setisLoading] = useState(true)
    console.log(myData)

    useEffect(() => {
        setisLoading(true);
        const getQuiz = async () => {
            let apiPosts = `https://opentdb.com/api.php?amount=${myData[0]}`;

            if (myData[1]) {
                apiPosts = apiPosts.concat(`&category=${myData[1]}`);

            }
            if (myData[2]) {
                apiPosts = apiPosts.concat(`&difficulty=${myData[2]}`);
            }
            if (myData[3]) {
                apiPosts = apiPosts.concat(`&type=${myData[3]}`);
                console.log(apiPosts)
            }
            const apiQuiz = await axios.get(apiPosts);
            console.log(apiQuiz.data)
            setquiz(apiQuiz.data.results)
            setisLoading(false)
        }
        getQuiz();
    }, [myData])
    return (
        <Wrapper>
            <div className='timed-quiz'>
                {isLoading
                    ? <div style={{display:"flex",alignItems:"center",justifyContent:"center", height:"70vh" }}>
                        <div className="spinner-grow text-success" role="status">
                        </div>
                </div>
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