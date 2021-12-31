import React, { createContext, useCallback, useState, useContext } from 'react';
import { getMockUser } from '../helpers/userHelper';
import { Usuario, getLocalUser } from '../model/usuario';

interface AuthState {
  //token: string;
  user: Usuario;
}
interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: Usuario;
  login(credentials: SignInCredentials): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    //const token = getLocalToken();
    const user = getLocalUser();

    if (user) {
      //api.defaults.headers.authorization = `Bearer ${token}`;
      return { user };
    }

    return {} as AuthState;
  });

  const login = useCallback(async ({ username, password }) => {

    const user = getMockUser();

    //const response = await api.post(LOGIN, { username, password });
    //const { token } = response.data;
    //setLocalToken(token);
    //const user = getUserFromToken();
    //api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ user });
  }, []);

  const logout = useCallback(() => {
    //removeLocalToken();
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
