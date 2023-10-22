import React from 'react';
import './Item.css';

const Item = ({ title, price, tags, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <h2>Selected Item Details</h2>
        <p>Title: {title}</p>
        <p>Price: {price}</p>
        <p>Tags: {tags.join(', ')}</p>
      </div>
    </div>
  );
};

export default Item;
