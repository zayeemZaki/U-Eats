import React from 'react';
import './Item.css';

const Item = ({ title, price, tags, onClose, onAddToCart, Quantity, stripePriceId }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <h2 className='headtext__cormorant-item'>{title}</h2>
        <div className="app__item-details">
          <p>Price: {price}</p>
          <p>Quanity: {Quantity}</p>
          <p>Tags: {tags.join(', ')}</p>
        </div>
       {/* // <p>stripePriceId: {stripePriceId}</p> */}
        <button className="custom__button-item" onClick={onAddToCart}>Add to Cart</button> {/* Add the Add to Cart button */}

      </div>
    </div>
  );
};

export default Item;
