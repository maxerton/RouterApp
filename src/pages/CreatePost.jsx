import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export const CreatePost = () => {
  const {pathname} = useLocation();
  // console.log(location);
  return (
    <div>
      <h1>CreatePost</h1>
    </div>
  );
};