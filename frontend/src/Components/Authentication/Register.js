import React, {useState} from "react"
import "./Auth.css"
import {Link} from "react-router-dom";
import axios from "axios";
import AuthWrapper from "./AuthWrapper";

const Register = () => {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [phone, setPhone] = useState("")
    console.log(first)

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/register", {
            first_name: first,
            last_name: last,
            email: email,
            phone: phone,
            password: password,
            confirm_password: confirm
        }).then((response) => console.log(response.data))
        console.log("already")
    }
    return (
        <AuthWrapper>
            <div className="body">
                <form onSubmit={onSubmit} className="container">
                    <h5 className="title">Register.</h5>
                    <label>FirstName</label>
                    <input
                        placeholder="FirstName"
                        type="text"
                        value={first}
                        onChange={(e) => setFirst(e.target.value)}

                    />
                    <label className="mt-3">LastName</label>
                    <input
                        placeholder="LastName"
                        value={last}
                        onChange={(e) => setLast(e.target.value)}
                    />
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
                    <label>ConfirmPassword</label>
                    <input
                        placeholder="ConfirmPassword"
                        type="password"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                    <label>PhoneNumber</label>
                    <input
                        placeholder="phoneNumber"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value)
                        }}
                    />
                    <button type="submit">Submit</button>
                    <div className="foot">
                        <small className="row"> I have an account already </small>
                        <Link to="/login">Login</Link>
                    </div>

                </form>
            </div>
        </AuthWrapper>
    )
}

export default Register