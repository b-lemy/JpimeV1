import React, {Fragment} from "react";
import "./Header.css"

const Header = () => {
    return (
        <Fragment>
            <header className="header">
                <h1 className="text-3xl font-bold">JipimeFasta</h1>
                <div className="links">
                    <h2 className="links-to">Quiz</h2>
                    <h2 className="links-to">Forum</h2>
                    <h2 className="links-to">Notes</h2>
                    <h2 className="links-to">LeaderBoard</h2>
                    <h2 className="links-to">News and Updates</h2>
                    <h2 className="links-to">Login</h2>
                </div>

            </header>
        </Fragment>
    )
}

export default Header;