import React, { createContext, useState } from 'react';

export const LoginContext = createContext(null);

const LoginProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const signIn = (newUser, cb) => {
    setUser(newUser);
    cb();
  }

  const signOut = (cb) => {
    setUser(null);
    cb();
  }

  const value = {user, signIn, signOut}
  return (
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;