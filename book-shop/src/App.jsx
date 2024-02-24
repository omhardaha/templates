import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/navbar/NavBar';
import Footer from './component/footer/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import SinglePage from './component/Product';
import Products from './pages/Products';
import { Provider } from 'react-redux'
import store from './app/store';

export default function App() {
  return (
    <Provider store={store}>
      <div className="bg-blue-50">
        <NavBar />
        <div className="h-16" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product" element={<SinglePage />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div >
    </Provider>
  );
}
