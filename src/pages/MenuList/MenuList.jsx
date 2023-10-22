import React, { useState } from 'react';

const Menu = ({ label, onClick }) => (
  <div className="clickable-box" onClick={onClick}>
    {label}
  </div>
);

const MenuList = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const boxLabels = ['Button 1', 'Button 2', 'Button 3', 'Button 4'];

  const handleBoxClick = (index) => {
    setSelectedBox(index);
  };

  return (
    <div className="clickable-box-list">
      <h1>List of Clickable Boxes</h1>
      <div className="box-container">
        {boxLabels.map((label, index) => (
          <Menu
            key={index}
            label={label}
            onClick={() => handleBoxClick(index)}
            className={selectedBox === index ? 'selected' : ''}
          />
        ))}
      </div>
      <p>
        {selectedBox !== null
          ? `You selected ${boxLabels[selectedBox]}`
          : 'Select a box to see the result'}
      </p>
    </div>
  );
};

export default MenuList;
