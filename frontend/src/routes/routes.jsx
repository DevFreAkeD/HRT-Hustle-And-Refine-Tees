import React from 'react';
import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Product from '../components/ProductDetails';
import ProductDetails from '../components/ProductDetails';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </RouterRoutes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;