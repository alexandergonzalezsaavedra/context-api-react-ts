import { createContext } from 'react';
import type { User } from '../../interface/user.interface';

interface AuthContextType {
  user: User | null;
  login: () => void;
  logout: () => void;
}

// 1. Crear el contexto de autenticación
export const AuthContext = createContext<AuthContextType | null>(null);
