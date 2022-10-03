import React, {useEffect, useState} from "react";
import "./Auth.css"

const Login = () => {
    const [search, setSearch] = useState("");



    useEffect(() => {

    },[])


    const onChanger = (e) => {
        setSearch(e.target.value)

    }


    const Submit = (e) => {
        e.preventDefault()
    }
    return(
        <div className="body">
            <form onSubmit={Submit} className="container">
                <h1 className="title"> Login</h1>
                <label>EmailAddress</label>
                <input
                    placeholder="Email"
                    value={search}
                    onChange={onChanger}

                />
                <label>Password</label>
                <input
                    placeholder="password"/>

                <button  type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Login