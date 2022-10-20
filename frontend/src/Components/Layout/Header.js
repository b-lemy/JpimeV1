import React, {Fragment} from "react";
import "./Header.css"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <header className="header">
                <h1 className="text-3xl font-bold"><Link to="/">JipimeFasta</Link></h1>
                <div className="links">
                    <h2 className="links-to">Quiz</h2>
                    <Link to="/forum" className="links-to">Forum</Link>
                    <h2 className="links-to">Notes</h2>
                    <h2 className="links-to">LeaderBoard</h2>
                    <h2 className="links-to">News and Updates</h2>
                    <Link to="/login" className="links-to">Login</Link>
                </div>

            </header>
        </Fragment>
    )
}

export default Header;