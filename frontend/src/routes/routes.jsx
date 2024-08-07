// src/routes/AppRoutes.js
import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import ProductDetails from '../components/ProductDetails';
import AdminLogin from '../pages/Admin/AdminLogin';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import Login from '../pages/Login';
import Products from '../components/products/Products';

// Component to conditionally render Header and Footer
const AppLayout = ({ children }) => {
  const location = useLocation();

  // Only render Header and Footer if the path does not start with /admin
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Header />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          {/* User routes */}
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:categoryId" element={<Products />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;