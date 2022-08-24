import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import ProductPerfume from './pages/Product/ProductPerfume';
import ProductList from './pages/ProductList/ProductList';
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
        <Route path="/perfume" element={<ProductPerfume />} />
        <Route path="/list" element={<ProductList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
