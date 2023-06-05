import React, {Fragment, useContext, useEffect, useState} from "react";
import "./Header.css"
import {Link} from "react-router-dom";
import {AuthContext} from "../../StoreContext/Auth-context";

const Header = () => {
    const {authUser} = useContext(AuthContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
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
                {isLoggedIn ?
                    <div className="links">
                        <Link to="/quiz" className="links-to">Quiz</Link>
                        <Link to="/forum" className="links-to">Forum</Link>
                        <Link to="/notes" className="links-to">Notes</Link>
                        <Link to="" className="links-to">LeaderBoard</Link>
                        <Link to="" className="links-to">News and Updates</Link>
                        <Link to="/login" onClick={handleLogout} className="links-to">LogOut</Link>

                    </div>
                    :
                    ''
                    // <div className="links">
                    //     <Link to="/login" className="links-to">Login</Link>
                    // </div>
                }
                {isLoggedIn ?
                <div style={{display: "flex", alignItems: "center", cursor: "pointer"}}>
                    <div style={{padding: '9px'}}>
                     <span style={{color: "white"}}>
                    <h6 style={{margin: '0'}}>Welcome :</h6>
                         <h6 style={{fontSize: '12px'}}><b>{authUser.first_name} {authUser.last_name}</b></h6>
                    </span>
                    </div>
                    <div>
                        <img alt="i" style={{
                            borderRadius: '70%', marginRight: '10px', height: '30px',
                            width: '30px'
                        }} src={authUser.avatar}/>
                    </div>
                </div>
                    :

                    <Link to="/login" className="links-to">Login</Link>

                }

            </header>
        </Fragment>
    )
}

export default Header;