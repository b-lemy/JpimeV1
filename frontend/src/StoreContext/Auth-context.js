import React, {createContext, useEffect, useState} from "react";
import axios from "../api/axios";
import {useNavigate} from "react-router-dom";

const InitialState = {
}
export const AuthContext = createContext(InitialState);

export const AuthProvider = ({children}) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    // const [loginUser , setLoginUser] = useState("");
    const [authUser , setAuthUser] = useState("")
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post("/login", {
            email,
            password
        })
            .then((response) => {
                const accessToken = response.data.token;
                // const LoginUser = response.data.user;
                localStorage.setItem('token', accessToken);
                // localStorage.setItem('AuthUser',  JSON.stringify(LoginUser));
                navigate('/')
                // window.location.reload(true)
            })
            .catch(error => {
                // console.error(error.response.data.message)
                setError(error.response.data)
            })
    }
    useEffect(()=>{
        axios.get('/getAuthUser')
            .then((response)=>{
                // console.log(response.data)
                setAuthUser(response.data)
            })
            .catch((e)=>{
                console.error(e)
            })
    },[])

    // useEffect(() =>{
    //     const User = localStorage.getItem('AuthUser')
    //     const user = JSON.parse(User)
    //     setLoginUser(user)
    //
    // },[])

    const authContext = {
        error,
        setEmail,
        email,
        password,
        setPassword,
        // loginUser,
        authUser,
        onSubmit
    }
    return(
       <AuthContext.Provider  value={authContext}>
           {children}
       </AuthContext.Provider>
    )
}
