import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(authContext);
    console.log("private route user",user)
    const location = useLocation()
    console.log(location)
    if(loading)  { 
        return <h1>LOADING......</h1>
    }

    if (!user) {
        return <Navigate state={{from:location.pathname}} to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;
