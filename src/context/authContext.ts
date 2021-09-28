import { createContext, useContext } from 'react';
import user from '../constants/user';

export type Token = {
    token: string,
    refreshToken?: string
} | null

export type AuthContextType = {
    authTokens: Token,
    setAuthTokens: (data: any) => void
} | null;

const initialContext: AuthContextType = {
    authTokens: null,
    setAuthTokens: (data: any) => {
        localStorage.setItem(user.token, JSON.stringify(data))
    }
}

export const AuthContext = createContext<AuthContextType>(initialContext);

export function useAuth() {
    return useContext(AuthContext);
}