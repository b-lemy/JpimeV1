import React, {useEffect, useState} from "react";
import "./Auth.css"
import {useSelector,useDispatch,useStore} from "react-redux";

const Login = () => {
    const [user , setUser] = useState("");

    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)


    const increment = ()=>{
        dispatch({type:'increment'})
    }



    useEffect(() => {

    },[])


    // const onChanger = (e) => {
    //     setUser(e.target.value)
    //
    // }


    const Submit = (e) => {
        e.preventDefault()
    }
    return(
        <div className="body">
            <div>{counter}</div>
            <button onClick={increment}>increment</button>
            <form onSubmit={Submit} className="container">
                <h1 className="title">Login.</h1>
                <label>EmailAddress</label>
                <input
                    placeholder="Email"
                  //  value={search}
                  //  onChange={onChanger}
                />
                <label>Password</label>
                <input
                    placeholder="password"
                    type="password"
                  //  value={}
                  //  onChange={}
                />
                <button  type="submit">Login</button>
            </form>

        </div>
    )
}

export default Login