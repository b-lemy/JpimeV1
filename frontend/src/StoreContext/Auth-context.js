import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const InitialState = {

}

export const AuthContext = createContext(InitialState);


export const AuthProvider = ({children}) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loginUser , setLoginUser] = useState("");
    const navigate = useNavigate()



    const onSubmit = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/login", {
            email,
            password
        })
            .then((response) => {
                const accessToken = response.data.token;
                const LoginUser = response.data.user;
                localStorage.setItem('token', accessToken);
                localStorage.setItem('AuthUser',  JSON.stringify(LoginUser));
                navigate('/')
            })
            .catch(error => {
                // console.error(error.response.data.message)
                setError(error.response.data)
            })
    }

    useEffect(() =>{
        const User = localStorage.getItem('AuthUser')
        const user = JSON.parse(User)
        setLoginUser(user)

    },[])


    const authContext = {
        error,
        setEmail,
        email,
        password,
        setPassword,
        loginUser,
        onSubmit
    }
    return(
       <AuthContext.Provider  value={authContext}>
           {children}
       </AuthContext.Provider>
    )
}
