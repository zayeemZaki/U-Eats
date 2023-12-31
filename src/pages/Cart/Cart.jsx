
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from '../../constants';
import { Footer } from '../../container';
import { Navbar } from '../../components';
import { loadStripe } from '@stripe/stripe-js';
import { post } from 'aws-amplify/api';
import './Cart.css';
import '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OCquvFGH3BedVinqfg7MNsxICmQfsflg0CEXmc8v16ymT1nOVG5N1UpHmjiOIaZ4v79WdP2iGf85kWUZkijl0BK00E0T2MXWk'); // Replace with your actual publishable key

const Cart = ({ cart, setCartData }) => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/menuPage');
    console.log(cart);
  };

  const handleCheckOut = async () => {
    try {
      const stripe = await stripePromise;
      console.log('Cart data:', JSON.stringify(cart));
  
      // Make the API request
      const response = await post({
        apiName: "stripeAPI",
        path: "/checkout",
        options: {
          headers: {
            Authorization: 'test'
          },
          body: { 
            cart
          },
        },
      }).response

      const { sessionId } = await response.body.json()
      console.log('Session ID:', sessionId);
  
      // Redirect to Stripe Checkout
      if (sessionId) {
        const { error: stripeError } = await stripe.redirectToCheckout({
          sessionId,
        });
  
        if (stripeError) {
          console.error('Stripe Error:', stripeError);
        }
      } 
      else {
        console.error('Session ID not received');
      }
  
    } 
    catch (apiError) {
      console.error('API Error:', apiError);
    }
  };
    
  const handleClearCart = () => {
    setCartData([]);
    localStorage.removeItem('cartData');
  };

  const handleMinusQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity--;
      setCartData(newCart);
    }
    else{
      newCart.splice(index, 1);
      setCartData(newCart);
  
    }
  }

  const handleAddQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity++;
    setCartData(newCart);
  }

  const totalPrice = cart.reduce((acc, item) => {
    const numericPrice = parseFloat(item.price.replace('$', ''));
    return acc + numericPrice * item.quantity;
  }, 0);
  
  const formattedTotalPrice = totalPrice.toFixed(2); // Round to two decimal places
  
  return (
    <div>
      <Navbar/>
      <div className="app__cart">
        <div className="app__cart-Title flex__center ">
          <img src={images.spoon} alt="about_spoon" className="spoon__img flex__center  " />
          <h1 className="headtext__cormorant-cart">Shopping Cart</h1>
        </div>
      <div className="app__cart-items flex__center section__padding">
      <img src={images.cart} className="cart__img flex__center" />
      {cart.map((item, index) => (
        <div key={index}>
          <div className="spoon__container section__padding">
            <img src={images.spoon} className="spoon__img" />
          </div>
          <h2 style={{color: 'var(--color-golden)'}}>{item.title}</h2>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity} <button type="button" className="custom__button-Minus" onClick={() => handleMinusQuantity(index)}> - </button>
          <button type="button" className="custom__button-Add" onClick={() => handleAddQuantity(index)}> + </button></p>
          <p>Tags: {item.tags.join(', ')}</p>
        </div>
      ))}
      </div>

      <p className="app__cart-total flex__right section__padding">
        Total Price: {formattedTotalPrice}
      </p>
      
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







/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubHeading, MenuItem, Item } from '../../components';
import { data, images } from '../../constants';
import { Footer } from '../../container';
import { Navbar } from '../../components';
import './Cart.css';
import '@stripe/stripe-js';
import Amplify from "aws-amplify";
import awsconfig from "../../aws-exports";
import { API } from 'aws-amplify'
Amplify.configure(awsconfig);


const Cart = ({ cart, setCartData }) => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/menuPage');
  };

  const handleCheckOut = async () => {
    try {
      const response = await fetch('http://localhost:3001/checkout', {
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
    } 
    catch (error) {
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

  const handleMinusQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity--;
      setCartData(newCart);
    }
    else{
      newCart.splice(index, 1);
      setCartData(newCart);
  
    }
  }

  const handleAddQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity++;
    setCartData(newCart);
  }

  const totalPrice = cart.reduce((acc, item) => {
    const numericPrice = parseFloat(item.price.replace('$', ''));
    return acc + numericPrice * item.quantity;
  }, 0);
  
  const formattedTotalPrice = totalPrice.toFixed(2); // Round to two decimal places
  
  return (
    <div>
      <Navbar/>
      <div className="app__cart">
        <div className="app__cart-Title flex__center ">
          <img src={images.spoon} alt="about_spoon" className="spoon__img flex__center  " />
          <h1 className="headtext__cormorant-cart">Shopping Cart</h1>
          
        </div>
      
        

      <div className="app__cart-items flex__center section__padding">
      <img src={images.cart} className="cart__img flex__center" />
      {cart.map((item, index) => (
        <div key={index}>
          <div className="spoon__container section__padding">
            <img src={images.spoon} className="spoon__img" />
          </div>
          <h2 style={{color: 'var(--color-golden)'}}>{item.title}</h2>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity} <button type="button" className="custom__button-Minus" onClick={() => handleMinusQuantity(index)}> - </button>
          <button type="button" className="custom__button-Add" onClick={() => handleAddQuantity(index)}> + </button></p>
          <p>Tags: {item.tags.join(', ')}</p>
        </div>
        
      ))}
      </div>

      <p className="app__cart-total flex__right section__padding">
        Total Price: {formattedTotalPrice}
      </p>
      
      
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



*/