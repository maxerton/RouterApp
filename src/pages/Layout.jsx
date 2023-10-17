import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

const Layout = () => {
  return (
    <div className='container'>
      <Header></Header>
      <Main />
      <Footer></Footer>
    </div>
  );
};

export default Layout;