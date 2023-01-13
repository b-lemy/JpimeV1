import React, {Fragment} from "react";
import "./AuthWrapper.css";


const AuthWrapper = ({children}) => {
    return (
        <Fragment>
            <div className="AuthWrap">
                    {children}
            </div>
        </Fragment>
    )
}

export default AuthWrapper;