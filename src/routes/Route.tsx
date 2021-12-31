import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Navigate,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import RouteWithLayout from './RouteWithLayout';
import { path } from './RoutePaths';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  layout?: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component:Component,
  ...rest
}) => {
  const { user } = useAuth();
  return (
    <>
    {console.log('passou por aqui!')}
    <ReactDOMRoute {...rest} element={<Component/>}/>

    {/*<ReactDOMRoute
      {...rest}
      children={(isPrivate === !!user)
        ? <RouteWithLayout component={Component} {...rest} />
        : <Navigate
            to={{
              pathname: isPrivate ? path.login : path.painel
            }}
            replace
          />
      }
    />*/}
    </>
  );
};
export default Route;
