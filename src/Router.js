import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Main from './pages/Main/Main';
import ProductPerfume from './pages/Product/ProductPerfume';
import ProductList from './pages/ProductList/ProductList';
import './styles/reset.scss';
import './styles/common.scss';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main/:cid" element={<ProductList />} />
        <Route path="/main/detail/:num" element={<ProductPerfume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
