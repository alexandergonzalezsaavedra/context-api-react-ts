import { useState } from 'react';
import type { User } from '../../interface/user.interface';
import { AuthContext } from './auth-context';

interface Props {
  children?: React.ReactNode;
}

// 2. Crear el proveedor de autenticación
const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    setUser({
      name: 'Hanna',
      email: 'hanna@gmail.com',
    });
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
