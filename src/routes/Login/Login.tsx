import React, { SyntheticEvent } from 'react';
import { USER_FETCH_REQUESTED } from '../../redux/actions/types';
import store from '../../redux/index';

export type Credentials = {
  email: { value: string };
  password: { value: string };
};

export default function Login() {
  const login = (event: SyntheticEvent): void => {
    event.preventDefault();
    const target = event.target as typeof event.target & Credentials;

    store.dispatch({type: USER_FETCH_REQUESTED, payload: {email: target.email.value, password: target.password.value}});
  }

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