import React, {Fragment} from "react";
import Header from "./Header";
import "./Wrapper.css";
// import {AuthContext} from "../../StoreContext/Auth-context";



const Wrapper = ({children}) => {
    // const{authUser} = useContext(AuthContext);
    return (
        <Fragment>
            <Header/>
            <div className="wrapp">
                <div className="childs">

                    {children}
                </div>
            </div>
        </Fragment>
    )
}

export default Wrapper;