import React, {useState} from "react";
import "./Auth.css"
import AuthWrapper from "./AuthWrapper";
import {useNavigate} from "react-router-dom";
import axios from "axios";
// import axios from "../../api/axios";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/login", {
            email,
            password
        })
            .then((response) => {
                const accessToken = response.data.token;
                localStorage.setItem('token', accessToken);
                console.log('Access token:', accessToken)
                navigate('/')
            })
            .catch(error => {
                // console.error(error.response.data.message)
                setError(error.response.data)
            })
    }
    return (
        <AuthWrapper>
            <div className="body">
                <form className="container" onSubmit={onSubmit}>
                    <h5 className="title">Login.</h5>
                    {error && <span style={{textAlign: "center", color: "red"}}>{error.message}</span>}
                    <label>EmailAddress</label>
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        placeholder="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </AuthWrapper>
    )
}
export default Login