import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Nav from './Components/Nav/Nav';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import './styles/reset.scss';
import './styles/common.scss';

const Router = () => {
  return (
    <BrowserRouter>
      <Cart />
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
