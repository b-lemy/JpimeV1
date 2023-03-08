import React, {useContext} from "react";
import "./Auth.css"
import AuthWrapper from "./AuthWrapper";

import {AuthContext} from "../../StoreContext/Auth-context";
// import axios from "../../api/axios";


const Login = () => {
    const {error,setEmail,setPassword,onSubmit,email,password} = useContext(AuthContext)
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