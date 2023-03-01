import React, {useState} from "react";
import "./Auth.css"
// import {useSelector,useDispatch} from "react-redux";
import AuthWrapper from "./AuthWrapper";

const Login = () => {
       const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    // const dispatch = useDispatch()
    //  const counter = useSelector(state => state.counter)


    // const increment = ()=>{
    //     dispatch({type:'increment'})
    // }
    //
    // useEffect(() => {
    //
    // },[])
    // const onChanger = (e) => {
    //     setUser(e.target.value)
    //
    // }
    // const Submit = (e) => {
    //     e.preventDefault()
    // }
    return(
        <AuthWrapper>
        <div className="body">
            <form  className="container">
                <h5 className="title">Login.</h5>
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
                <button  type="submit">Login</button>
            </form>

        </div>
        </AuthWrapper>
    )
}

export default Login