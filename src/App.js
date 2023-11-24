import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Cart, Home, MenuList, AdminDashboard, MenuPage } from './pages/index.js';

import './App.css';

const stripePromise = loadStripe('pk_test_51OCquvFGH3BedVinqfg7MNsxICmQfsflg0CEXmc8v16ymT1nOVG5N1UpHmjiOIaZ4v79WdP2iGf85kWUZkijl0BK00E0T2MXWk'); // Replace with your actual publishable key

const App = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const storedCartData = localStorage.getItem('cartData');
    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }
  }, []);

  const addToCart = (item) => {
    // Check if the item is already in the cart based on the title
    const existingItemIndex = cartData.findIndex((cartItem) => cartItem.title === item.title);
  
    if (existingItemIndex !== -1) {
      // If the item is already in the cart, update its quantity
      const updatedCart = cartData.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity + 1 } // Increase quantity
          : cartItem
      );
  
      // Update the cart state
      setCartData(updatedCart);
  
      // Save updated cart data to localStorage
      localStorage.setItem('cartData', JSON.stringify(updatedCart));
    } 
    else {
      // If the item is not in the cart, add it with quantity 1
      const newCartData = [...cartData, { ...item, quantity: 1 }];
      setCartData(newCartData);
  
      // Save updated cart data to localStorage
      localStorage.setItem('cartData', JSON.stringify(newCartData));
    }
  };
  

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cartData} addToCart={addToCart} setCartData={setCartData} />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/menuPage" element={<MenuPage addToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
