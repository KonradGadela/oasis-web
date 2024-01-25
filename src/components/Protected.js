import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Protected = ({ children }) => {
    const user = useSelector(state => state.user);
    console.log(user);
    if (user !== null && user.role === '2') {
        return <>{children}</>;
    } else {
        return <Navigate to="/" />;
    }
};

export default Protected;
