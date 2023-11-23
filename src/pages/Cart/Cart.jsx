import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubHeading, MenuItem, Item } from '../../components';
import { data, images } from '../../constants';
import { Footer } from '../../container';
import { Navbar } from '../../components';
import './Cart.css';

const Cart = ({ cart, setCartData }) => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  const handleCheckOut = async () => {
    try {
      const response = await fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart }),
      });
      
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response from server:', errorText);
        throw new Error('Failed to create checkout session');
      }
  
      const session = await response.json();
      window.location.href = session.url;
    } catch (error) {
      console.error(error);
      // Handle the error as needed, e.g., show an error message to the user
    }
  };
    
  const handleClearCart = () => {
    // Clear the cart by setting it to an empty array
    setCartData([]);

    // Clear the cart data in localStorage
    localStorage.removeItem('cartData');
  };

  const totalPrice = cart.reduce((acc, item) => {
    const numericPrice = parseFloat(item.price.replace('$', ''));
    return acc + numericPrice * item.quantity;
  }, 0);

  return (
    <div>
      <Navbar/>
      <div className="app__cart">
        <div className="app__cart-Title flex__center section__padding">
          <img src={images.spoon} alt="about_spoon" className="spoon__img flex__center" />
          <h1 className="headtext__cormorant">Shopping Cart</h1>
        </div>
      
      <div className="app__cart-items flex__left section__padding">
      {cart.map((item, index) => (
        <div key={index}>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <h2 style={{color: 'yellow'}}>{item.title}</h2>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Tags: {item.tags.join(', ')}</p>
        </div>
        
      ))}
      </div>

      <div>
        <p className="app__cart-total flex__right section__padding" >Total Price: {totalPrice}</p>
      </div>
      
      
      <div className="app__cart-buttons flex__center section__padding">
      <button type="button" className="custom__button-cart" onClick={handleContinueShopping}>
        Continue Shopping
      </button>
      <button type="button" className="custom__button-cart" onClick={handleCheckOut}>
        Checkout
      </button>
      <button type="button" className="custom__button-cart" onClick={handleClearCart}>
        Clear Cart
      </button>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;





