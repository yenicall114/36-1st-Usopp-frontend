import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './nav/Nav';
import Login from './login/Login';
import Main from './main/Main';
import './styles/common.scss';
import './styles/reset.scss';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
