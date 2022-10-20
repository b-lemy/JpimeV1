import React, {Fragment} from "react";
import Header from "./Header";
import About from "./About";


const Wrapper = ({children}) => {
    return (
        <Fragment>
            <Header/>
            {children}
        </Fragment>
    )
}

export default Wrapper;