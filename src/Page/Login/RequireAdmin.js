import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useAdmin from '../../hooks/useAdmin';
import { signOut } from 'firebase/auth';

    const RequireAdmin = ({children}) => {
        const [user, loading] = useAuthState(auth);
        const [admin,adminLoading] = useAdmin(user)
        const location = useLocation()

        if(loading || adminLoading){
            return <Loading></Loading>
        }
        if(!user || !admin){
            signOut(auth)
            return<Navigate to='/Login'  state={{ from: location }} replace></Navigate>
        }
       


    return children
};

export default RequireAdmin;