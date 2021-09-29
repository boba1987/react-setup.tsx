import React, { SyntheticEvent, useEffect, useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { AuthContext, User } from '../../context/authContext';
import routes from '../../constants/routes';
import Api from '../../services';

export type Credentials = {
  email: { value: string };
  password: { value: string };
};

export interface FetchedUser {
  accessToken: string,
  user: User
};

export default function Login() {
  let history = useHistory();
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState<FetchedUser | null>(null);
  const [error, setError] = useState<any>(null);
  const login = async (event: SyntheticEvent): Promise<void> => {
    event.preventDefault();
    const target = event.target as typeof event.target & Credentials;

    try {
      const fetchedUser = await Api.fetchUser({
        email: target.email.value,
        password: target.password.value,
        strategy: 'local'
      });

      setUser(fetchedUser);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    if (user) {
      authContext?.setAuthTokens({accessToken: user.accessToken});
      authContext?.setUserDetails(user.user);
      history.push(routes.profile);
    }
  }, [authContext, error, history, user]);

  return <>
    <h1>Login page</h1>
    <form onSubmit={login}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email"  required/>
      <label htmlFor="password">Password</label>
      <input id="password" type="password" required/>
      <button type="submit">Login</button>
    </form>
    {error && error.message}
  </>;
}