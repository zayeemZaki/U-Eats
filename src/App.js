import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from './container';
import { Navbar } from './components';

import './App.css';

const CheckOut = () => {
  return (
    <div>
      <h1>Checkout Page</h1>
    </div>
  );
};


const CartPage = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  const handleCheckOut = () => {
    navigate('/checkOut');
  };

  return (
    <div>
      <h1>Shopping Cart Page</h1>
      <button type="button" className="custom__button" onClick={handleContinueShopping}>
        Continue Shopping
      </button>
      <button type="button" className="custom__button" onClick={handleCheckOut}>
        Checkout
      </button>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};


const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </div>
  </Router>
);

export default App;
