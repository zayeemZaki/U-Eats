import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart, CheckOut, Home, MenuList } from './pages';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/menuList" element={<MenuList />} />
      </Routes>
    </div>
  </Router>
);

export default App;