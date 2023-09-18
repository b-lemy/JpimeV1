import {useEffect} from "react";
import {Navigate, Outlet, useNavigate} from "react-router-dom";

const PrivateRoute = ({ isAuth }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }   }, [isAuth]);

    return isAuth ? <Outlet /> : <Navigate to="/login" />; };

export default PrivateRoute;