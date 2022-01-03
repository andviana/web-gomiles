import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

//import Route from './Route';
import Main from '../layout/Main';
import Painel from '../pages/Painel';
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import CustomRoute from './CustomRoute';

const Routes: React.FC = () => (
  <Switch>
    <Route path={'/'} element={<CustomRoute><Login /></CustomRoute>} />
    <Route path={'/login'} element={<CustomRoute><Login /></CustomRoute>} />
    <Route path={'/registro'} element={<CustomRoute><Registro /></CustomRoute>} />
    <Route path={'/painel'} element={<CustomRoute isPrivate layout={Main} path={'painel'}><Painel /></CustomRoute>} />
  </Switch>
);
export default Routes;
