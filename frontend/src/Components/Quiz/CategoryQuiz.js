import React, {useContext, useEffect, useState} from "react";
import Wrapper from "../Layout/Wrapper";
import './Quiz.css'
import QuizApi from "./QuizApi";
import {QContext} from "../../StoreContext/Quiz-context";
import axios from "axios";

const Category = () => {
    const {InitialState} = useContext(QContext);
    const [category, setCategory] = useState([])
    const [isLoading, setisLoading] = useState(true)
    // const [amount , setAmount] = useState(0)
    // const [amount , setAmount] = useState(0)
    const [amount , setAmount] = useState(0)
    console.log(amount)

    const dificultyOptions = [
        {id:"easy" ,name:"Easy"},
        {id:"medium" ,name:"Medium"},
        {id:"hard" ,name:"Hard"}
    ]

    const typeOptions = [
        {id:"multiple" ,name:"Multiple Choice"},
        {id:"boolean" ,name:"True/False"},

    ]

    useEffect(() => {
        setisLoading(true)
        const getQuizCategory = async () => {
            const apiQuizCategory = await QuizApi.get("/api_category.php");
            console.log(apiQuizCategory.data.trivia_categories)
            setCategory(apiQuizCategory.data.trivia_categories)
            setisLoading(false)


        }
        getQuizCategory();
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()
        if (amount <= 0 || isNaN(amount)) {
            alert("Please enter a number greater than 0.");
        } else {
            // Value is valid, do something with it
            console.log("Valid number input:", amount);
        }


    }


    return (
        <Wrapper>
            {isLoading
                ? <div className="timed-quiz">
                    loading ...
                </div>
                : <div>
                    <form  onSubmit={onSubmit} className="form">
                        <div className="select">
                            <label className="label" htmlFor="category">Select an Category</label>
                            <select id="category" className="mySelect">
                                <option value="">--select--</option>
                                {category.map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="select">
                            <label className="label" htmlFor="difficulty">Select an Difficulty</label>
                            <select id="difficulty" className="mySelect">
                                <option value="">--select--</option>
                                { dificultyOptions.map(diff => (

                                    <option key={diff.id} value={diff.id}>{diff.name}</option>
                                ))
                                }

                            </select>
                        </div>
                        <div className="select">
                            <label className="label" htmlFor="type">Select an Type</label>
                            <select id="type" className="mySelect">
                                <option value="">--select--</option>
                                { typeOptions.map(type => (
                                    <option key={type.id} value={type.id}>{type.name}</option>
                                ))
                                }

                            </select>
                        </div>
                        <div className="select">
                            <label className="label" htmlFor="question">Select an Amount of question</label>

                            <input id="question"
                                   className="mySelect"
                                   value={amount}
                                   onChange={(e) => setAmount(e.target.value)}
                                   type="number"/>

                        </div>
                        <button style={{width:'37%',
                            height:"30px",
                            backgroundColor:"#5c616e",
                            borderRadius:"5px",
                        marginBottom:"40px"}}>submit</button>


                    </form>
                </div>
            }


        </Wrapper>
    )

}
export default Category

