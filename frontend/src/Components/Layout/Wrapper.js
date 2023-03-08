import React, {Fragment, useContext} from "react";
import Header from "./Header";
import "./Wrapper.css";
import {AuthContext} from "../../StoreContext/Auth-context";



const Wrapper = ({children}) => {
    const{loginUser} = useContext(AuthContext);
    return (
        <Fragment>
            <Header/>
            <div className="wrapp">
                <span style={{color:"white"}}>
                    <h6 >Welcome : <b>{loginUser.first_name} {loginUser.last_name}</b></h6>
                </span>
                <div className="childs">

                    {children}
                </div>
            </div>
        </Fragment>
    )
}

export default Wrapper;