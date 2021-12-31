
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AppProvider from './hooks';
import Login from './pages/Login';
import Painel from './pages/Painel';
import Registro from './pages/Registro';
import { path } from './routes/RoutePaths';
import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />


    </AppProvider>
  </BrowserRouter>
);

export default App;
