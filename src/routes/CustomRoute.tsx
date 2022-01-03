import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthedMock } from '../hooks/authMock'

interface ICustomRoute {
  isPrivate?: boolean,
  layout?: React.ComponentType,
  children: any,
  path?: string
}

const CustomRoute: React.FC<ICustomRoute> = ({ children, isPrivate, layout: Layout, path }) => {
  const { authed } = useAuthedMock();
  const location = useLocation();

  //verifica se a rota é privada e se autenticado
  if (isPrivate === true) {
    if (authed === true) {
      return Layout
        ? (<Layout>{children}</Layout>)
        : children;
      //caso nao esteja autenticado redireciona para login
    } else {
      <Navigate
        to={'/login'}
        replace
        state={{ path: location.pathname }}
      />
    }
    //caso esteja acessando uma rota publica, estando logado, retorna ao painel
  } else {
    //verifica se a rota publica possui layout
    return Layout
      ? (<Layout>{children}</Layout>)
      : children;

  }
}

export default CustomRoute

