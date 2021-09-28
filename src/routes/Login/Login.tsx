import React, { SyntheticEvent, useEffect, useContext } from 'react';
import { USER_FETCH_REQUESTED } from '../../redux/actions/types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { AuthContext } from '../../context/authContext';
import routes from '../../constants/routes';

export type Credentials = {
  email: { value: string };
  password: { value: string };
};

export default function Login() {
  const dispatch = useDispatch();
  let history = useHistory();
  const authContext = useContext(AuthContext);
  const {user} = useSelector((state: any) => state.user);
  const login = (event: SyntheticEvent): void => {
    event.preventDefault();
    const target = event.target as typeof event.target & Credentials;

    dispatch({
      type: USER_FETCH_REQUESTED, 
      payload: {
        email: target.email.value,
        password: target.password.value
      }
    });
  }

  useEffect(() => {
    if (user !== undefined) {
      authContext?.setAuthTokens(user.accessToken);
      history.push(routes.profile);
    }
  }, [authContext, history, user]);

  return <>
    <h1>Login page</h1>
    <form onSubmit={login}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email"  required/>
      <label htmlFor="password">Password</label>
      <input id="password" type="password" required/>
      <button type="submit">Login</button>
    </form>
  </>;
}