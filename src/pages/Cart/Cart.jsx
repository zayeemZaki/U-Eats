import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, setCartData}) => {
  console.log('Cart items:', cart);

  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  const handleCheckOut = () => {
    navigate('/CheckOut');
  };

  const handleClearCart = () => {
    // Clear the cart by setting it to an empty array
    setCartData([]);
    
    // Clear the cart data in localStorage
    localStorage.removeItem('cartData');
  };



  return (
    <div>
      <h1>Shopping Cart Page</h1>

      {cart.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Tags: {item.tags.join(', ')}</p>
        </div>
      ))}

      <button type="button" className="custom__button" onClick={handleContinueShopping}>
        Continue Shopping
      </button>
      <button type="button" className="custom__button" onClick={handleCheckOut}>
        Checkout
      </button>
      <button type="button" className="custom__button" onClick={handleClearCart}>
        Clear Cart
      </button>

    </div>
  );
};

export default Cart;
