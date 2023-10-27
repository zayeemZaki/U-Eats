import React from 'react';
import './Item.css';

const Item = ({ title, price, tags, onClose, onAddToCart }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <h2>{title}</h2>
        <p>Title: {title}</p>
        <p>Price: {price}</p>
        <p>Tags: {tags.join(', ')}</p>
        <button onClick={onAddToCart}>Add to Cart</button> {/* Add the Add to Cart button */}

      </div>
    </div>
  );
};

export default Item;
