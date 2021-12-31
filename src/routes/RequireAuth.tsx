import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { LOGIN } from '../config/appRoutes';
import { useAuthedMock } from '../hooks/authMock'

interface IRequireAuth {
  children: React.ReactElement
}

const RequireAuth: React.FC<IRequireAuth> = ({ children }) => {
  const { authed } = useAuthedMock();
  const location = useLocation();

  return authed === true
    ? children
    : <Navigate
      to={LOGIN}
      replace
      state={{ path: location.pathname }}

    />
}

export default RequireAuth
