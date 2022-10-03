import React from "react";
import {Form} from "react-bootstrap";
import "./Auth.css"
import Button from 'react-bootstrap/Button';
const Register = () => {
    return(
        <div className="body">
        <Form className="container">
            <h1 className="title">Register</h1>
            <label>FirstName</label>
            <input
                placeholder="FirstName"
            />
            <label className="mt-5">LastName</label>
            <input
                placeholder="LastName"
            />
            <label>EmailAddress</label>
            <input
                placeholder="Email"/>
            <label>Password</label>
            <input
                placeholder="password"/>
            <label>ConfirmPassword</label>
            <input
                placeholder="ConfirmPassword"/>
            <label>PhoneNumber</label>
            <input
                placeholder="phoneNumber"/>
            <Button variant="primary" size="sm">
                Small button
            </Button>

        </Form>
        </div>
    )
}

export default Register