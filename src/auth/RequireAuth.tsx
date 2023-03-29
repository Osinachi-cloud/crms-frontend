import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UseAuth } from '../hooks/UseAuth';

export const RequireAuth = () => {
    const { auth } = UseAuth();
    const location = useLocation();

    return auth?.accessToken ? (
    <Outlet/>
  ): (
    <Navigate to='/account/login' state={{from : location}} replace/>
  )
}
