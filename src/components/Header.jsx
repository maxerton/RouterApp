import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useLogin } from '../hook/useLogin';

const Header = () => {
  const isActiveHandler = ({isActive}) => isActive ? 'menu-item__link' : '';
  const {user, signOut} = useLogin();

  const navigate = useNavigate();
  const {pathname} = useLocation();

  const clickHandler = (ev) => {
    ev.preventDefault();
    if (!user) {
      navigate('/login', {state: {from: pathname}});
    } else {
      signOut(() => {});
    }
  }

  return (
    <header className="header">
        <nav className="menu">
          <ul className="menu-list">
            <li className="menu-item"><NavLink to="/" className={isActiveHandler}>Home</NavLink></li>
            <li className="menu-item"><NavLink to="/blog"  className={isActiveHandler}>Blog</NavLink></li>
            <li className="menu-item"><NavLink to="/about" className={isActiveHandler}>About</NavLink></li>
          </ul>
        </nav>
        <button className='btn-logout' onClick={clickHandler}>{!user ? 'Sign In' : 'Sign Out'}</button>
      </header>
  );
};

export default Header;