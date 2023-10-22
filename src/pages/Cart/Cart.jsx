import React from 'react';

import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const navigate = useNavigate();
  
    const handleContinueShopping = () => {
      navigate('/');
    };
  
    const handleCheckOut = () => {
      navigate('/CheckOut');
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

  export default Cart;