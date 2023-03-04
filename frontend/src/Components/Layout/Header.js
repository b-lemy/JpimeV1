import React, {Fragment, useEffect, useState} from "react";
import "./Header.css"
import {Link} from "react-router-dom";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            // Verify the token on the backend
            // axios.get('/api/user', { headers: { Authorization: `Bearer ${token}` }})
            //     .then(response => setIsLoggedIn(true))
            //     .catch(error => console.log(error));
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    }
    return (
        <Fragment>
            <header className="header">
                <h1 className=" ">
                    <Link to="/" className="links-title">Jipime Fasta</Link>
                </h1>
                <div className="links">
                    <Link to="/quiz" className="links-to">Quiz</Link>
                    <Link to="/forum" className="links-to">Forum</Link>
                    <Link to="/notes" className="links-to">Notes</Link>
                    <Link to="" className="links-to">LeaderBoard</Link>
                    <Link to="" className="links-to">News and Updates</Link>
                    {isLoggedIn ?
                        (
                        <Link to="/login" className="links-to">LogOut</Link>)
                        :
                        (<Link to="/login" className="links-to">Login</Link>)
                    }
                </div>

            </header>
        </Fragment>
    )
}

export default Header;