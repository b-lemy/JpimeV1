import React, {Fragment} from "react";
import Header from "./Header";
import About from "./About";
import "./Wrapper.css";


const Wrapper = ({children}) => {
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