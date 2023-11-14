import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart, CheckOut, Home, MenuList } from './pages';
import './App.css';

const App = () => {
  // Define cartData as an array of items
  const [cartData, setCartData] = useState([]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Pass cartData to the Cart component */}
          <Route path="/cart" element={<Cart cart={cartData} />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/menuList" element={<MenuList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
