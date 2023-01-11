import React, {Fragment} from "react";
import "./Header.css"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <header className="header">
                <h1 className=" ">
                    <Link to="/" className="links-title">JipimeFasta</Link>
                </h1>
                <div className="links">
                    <Link to="" className="links-to">Quiz</Link>
                    <Link to="/forum" className="links-to">Forum</Link>
                    <Link to="" className="links-to">Notes</Link>
                    <Link to="" className="links-to">LeaderBoard</Link>
                    <Link to="" className="links-to">News and Updates</Link>
                    <Link to="/login" className="links-to">Login</Link>
                </div>

            </header>
        </Fragment>
    )
}

export default Header;