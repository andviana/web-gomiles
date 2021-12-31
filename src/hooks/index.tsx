import React from 'react';
import { AuthProvider } from './auth';
import { AuthMockProvider } from './authMock';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <AuthMockProvider>
      {children}
    </AuthMockProvider>
  </AuthProvider>
);

export default AppProvider;
