import React, {Fragment} from "react";
import Header from "./Layout/Header";
import About from "./Layout/About";


const WelcomePage = () => {
    return (
        <Fragment>
            <Header/>
            <About/>
        </Fragment>
    )
}

export default WelcomePage;