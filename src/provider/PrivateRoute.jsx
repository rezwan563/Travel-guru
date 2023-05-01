import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation()
    // console.log(location);

    if (loading) {
        return <div>
            <p style={{ textAlign: 'center', fontSize: '24px' }}>Loading...</p>
        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/auth_user' state={{ from: location }}></Navigate>



};

export default PrivateRoute