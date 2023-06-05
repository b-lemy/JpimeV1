import React, {useState} from "react"
import "./Auth.css"
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import AuthWrapper from "./AuthWrapper";

const Register = () => {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [phone, setPhone] = useState("")
    const [error , setErrors] = useState("")
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/register", {
            first_name: first,
            last_name: last,
            email: email,
            phone: phone,
            password: password,
            confirm_password: confirm
        }).then((response) => {
                console.log("already")
            navigate("/login")
        }
        )
            .catch((e) =>{
                if(e.response.status === 422) {
                    setErrors(e.response.data.errors)
                    console.error(e.response.data.errors)
                }
            })
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
                    {error.first_name &&  <span style={{textAlign: "center", color: "red"}}>{error.first_name} </span> }

                    <label className="mt-3">LastName</label>
                    <input
                        placeholder="LastName"
                        value={last}
                        onChange={(e) => setLast(e.target.value)}
                    />
                    {error.last_name &&  <span style={{textAlign: "center", color: "red"}}>{error.last_name} </span> }
                    <label htmlFor="email">EmailAddress</label>
                    <input id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error.email &&  <span style={{textAlign: "center", color: "red"}}>{error.email} </span> }
                    <label>PhoneNumber</label>
                    <input
                        placeholder="phoneNumber"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value)
                        }}
                    />
                    {error.phone &&  <span style={{textAlign: "center", color: "red"}}>{error.phone} </span> }
                    <label>Password</label>
                    <input
                        placeholder="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error.password &&  <span style={{textAlign: "center", color: "red"}}>{error.password} </span> }
                    <label>ConfirmPassword</label>
                    <input
                        placeholder="ConfirmPassword"
                        type="password"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                    {error.confirm_password &&  <span style={{textAlign: "center", color: "red"}}>{error.confirm_password} </span> }

                    <button style={{marginTop:"15px"}} type="submit">Submit</button>
                    <div className="foot">
                        <small className="row"> I have an account already </small>
                        <Link to="/login">Login</Link>
                    </div>

                    <small><Link to="/">Back to landing page</Link></small>

                </form>
            </div>
        </AuthWrapper>
    )
}

export default Register