// CheckoutForm.js

import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement, {
      name,
      address_line1: address,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log(token);
      // Handle successful payment here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Payment Details</h2>
      
      <div className="input-container">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      
      <div className="input-container">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      
      <div className="card-element-container">
        <label>Card Details:</label>
        <CardElement className="card-element" />
      </div>
      
      <button type="submit" disabled={!stripe} className="pay-button">
        Pay
      </button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};

export default CheckoutForm;
