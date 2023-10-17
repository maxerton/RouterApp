import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Not found</p>
      <Link to='/'>Home</Link>
    </div>
  );
};