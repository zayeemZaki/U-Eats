import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components and images
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from './container';
import { Navbar } from './components';

import './App.css';

// Create a component for the cart page (CartPage)
const CartPage = () => {
  return (
    <div>
      {/* Your cart page content goes here */}
      <h1>Shopping Cart Page</h1>
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
      </Routes>
    </div>
  </Router>
);

export default App;
