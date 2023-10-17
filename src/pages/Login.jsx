import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useLogin } from '../hook/useLogin';

export const Login = () => {
  const {state} = useLocation();
  console.log(state);
  const fromPage = state?.from || '/';
  const {user, signIn} = useLogin()
  
  const navigate = useNavigate();

  if (user) return (Navigate('/'));

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const user = form.login.value;

    signIn(user, () => navigate(fromPage));
  }
  
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>Login <input type="text" name='login' /></label>
        <button className='btn-login' type='submit'>Login</button>
      </form>
    </div>
  );
};
