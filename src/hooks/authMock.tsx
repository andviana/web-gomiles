import React, { createContext, useContext } from 'react';

interface AuthMockContextData {
  authed: boolean;
  login(): void;
  logout(): void;
}

const AuthMockContext = createContext<AuthMockContextData>({} as AuthMockContextData);

function useAuthMock() {
  const [authed, setAuthed] = React.useState(false);

  return {
    authed,
     login() {
      setAuthed(true);
    },
     logout() {
      setAuthed(false);
    }
  };
}


export const AuthMockProvider: React.FC = ({ children }) => {
  const auth = useAuthMock();

  return (
    <AuthMockContext.Provider value={auth}>
      {children}
    </AuthMockContext.Provider>
  );
}

export function useAuthedMock(): AuthMockContextData {
  const context = useContext(AuthMockContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default function AuthMockConsumer() {
  return useContext(AuthMockContext)
}
