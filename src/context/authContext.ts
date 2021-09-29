import { createContext, useContext } from 'react';
import user from '../constants/user';

export type Token = {
    accessToken: string,
    refreshToken?: string
} | null;

export type User = {
    email: string,
    id: number
} | null;

export type AuthContextType = {
    authTokens: Token,
    userDetails: User,
    setAuthTokens: (data: Token) => void
    setUserDetails: (data: User) => void
    clearUserDetails?: ()=> void
} | null;

export const initialContext: AuthContextType = {
    authTokens: null,
    userDetails: null,
    setAuthTokens: (data: Token) => localStorage.setItem(user.token, JSON.stringify(data)),
    setUserDetails: (data: User) => localStorage.setItem(user.user, JSON.stringify(data)),
    clearUserDetails: ()=> {
        localStorage.removeItem(user.token);
        localStorage.removeItem(user.user);
    }
    
}

export const AuthContext = createContext<AuthContextType>(initialContext);

export function useAuth() {
    return useContext(AuthContext);
}