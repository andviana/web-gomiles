import React from 'react';
import { Routes as Switch, Route} from 'react-router-dom';

//import Route from './Route';
import Main from '../layout/Main';
import { path } from './RoutePaths';
import Painel from '../pages/Painel';
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import RequireAuth from './RequireAuth';
import CustomRoute from './CustomRoute';

const Routes: React.FC = () => (
  <Switch>
    <Route path={'/'} element={
          <CustomRoute layout={Main}><Login/></CustomRoute>
    }/>
    <Route path={'/login'} element={<Login/>} />
    <Route path={'/registro'} element={<Registro/>} />
    <Route
      path={path.painel}
      element={
        <CustomRoute isPrivate layout={Main}>
          <Painel/>
        </CustomRoute>
      }
    />


{/*
    <Route path={'/'} component={Login} />
    <Route path={path.login} component={Login} />
    <Route path="/registro" component={Registro} />
    <Route
      path={path.painel}
      component={Painel}
      isPrivate
      layout={Main}
    />
        */}
  </Switch>
);
export default Routes;
