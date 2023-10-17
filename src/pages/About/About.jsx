import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Contacts from './Contacts';
import Team from './Team';

export const About = () => {
  return (
    <div>
      <h1>About page</h1>
    
      <Link to='contacts'>Contacts</Link>
      <Link to='team'>Team</Link>

      <div className="content">
        <Outlet></Outlet>
      </div>
      

      <Routes>
        <Route path='./contacts' element={<Contacts></Contacts>}></Route>
        <Route path='./team' element={<Team></Team>}></Route>
      </Routes>
    </div>
  );
};
