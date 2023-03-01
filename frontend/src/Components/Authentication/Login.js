import React, {useState} from "react";
import "./Auth.css"
import AuthWrapper from "./AuthWrapper";
import {useNavigate} from "react-router-dom";
import axios from "../../api/axios";


const Login = () => {
       const [email , setEmail] = useState("");
       const [password , setPassword] = useState("");
       const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post("/login", {
            email,
            password,
        },{withCredentials:true})
            .then((response) => {
                console.log(response.status)
                // console.log("post created")
                if (response.status === 200) {
                    navigate("/forum")
                }
            })
            .catch(e =>{
                console.log(e.response.data.errors)
            })
    }


    return(
        <AuthWrapper>
        <div className="body">
            <form  className="container" onSubmit={onSubmit}>
                <h5 className="title">Login.</h5>
                <label>EmailAddress</label>
                <input
                    placeholder="Email"
                    value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>error</span>
                <label>Password</label>
                <input
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span>error</span>
                <button  type="submit">Login</button>
            </form>
        </div>
        </AuthWrapper>
    )
}

export default Login