import React, {useState} from "react"
import "./Auth.css"
import {Link} from "react-router-dom";
import {useAppContext} from "../../Context/AppContext";
import axios from "axios";

const Register = () => {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [phone, setPhone] = useState("")
    const {item} = useAppContext();
    console.log(first)

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/register", {
            first_name: first,
            last_name: last,
            email: email,
            phone: phone,
            password: password,
            confirm_password: confirm
        }).then((response) =>console.log(response.data))
        console.log("alredy")
    }
    return (
        <div className="body">
            <form onSubmit={onSubmit} className="container">
                <h1 className="title">Register.</h1>
                <label>FirstName</label>
                <input
                    placeholder="FirstName"
                    type="text"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}

                 />
                <label className="mt-5">LastName</label>
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
    )
}

export default Register