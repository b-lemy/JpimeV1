import {Outlet,Navigate} from "react-router-dom";
import React from "react";


const PrivateRoutes = () =>{
    let token = localStorage.getItem('token')

    return(
        token ?
            <div>
                <Outlet/>
                </div> :
            <Navigate to="/login"/>
    )
}

export default PrivateRoutes