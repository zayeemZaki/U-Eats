import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags, onClick }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name" onClick={onClick}>
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price" onClick={onClick}>
        <p className="p__cormorant">{price}</p>
      </div>
    </div>
    <div className="app__menuitem-sub" onClick={onClick}>
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);



export default MenuItem;