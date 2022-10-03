import React from "react";

import "./Auth.css"
import { Button } from 'react-bootstrap';

const Register = () => {
    return (
        <div className="body">
            <form className="container">
                <h1 className="title">Register</h1>
                <label>FirstName</label>
                <input
                    placeholder="FirstName"
                    type="text"

                />
                <label className="mt-5">LastName</label>
                <input
                    placeholder="LastName"
                />
                <label>EmailAddress</label>
                <input
                    placeholder="Email"
                />
                <label>Password</label>
                <input
                    placeholder="password"/>
                <label>ConfirmPassword</label>
                <input
                    placeholder="ConfirmPassword"/>
                <label>PhoneNumber</label>
                <input
                    placeholder="phoneNumber"/>
                <button  type="submit">Submit</button>


            </form>
        </div>
    )
}

export default Register