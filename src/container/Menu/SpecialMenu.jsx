import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubHeading, MenuItem, Item } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling the modal

  const handleViewMoreClick = () => {
    navigate('../../pages/MenuList/MenuList');
  };

  const handleItemClick = (sandwich) => {
    console.log('Item clicked:', sandwich);
    setSelectedItem(sandwich);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palate" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">Wings</p>
          <div className="app__specialMenu_menu_items">
            {data.specialWings.map((wing, index) => (
              <MenuItem
                key={wing.title + index}
                title={wing.title}
                price={wing.price}
                tags={wing.tags}
                onClick={() => handleItemClick(wing)} // Pass the callback function to the onClick prop
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu_img" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Sandwiches</p>
          <div className="app__specialMenu_menu_items">
            {data.specialSandwiches.map((sandwich, index) => (
              <MenuItem
                key={sandwich.title + index}
                title={sandwich.title}
                price={sandwich.price}
                tags={sandwich.tags}
                onClick={() => { // Wrap the handleItemClick function in a callback function that takes no parameters
                  handleItemClick(sandwich);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button" onClick={handleViewMoreClick}>
          View More
        </button>
      </div>

      {selectedItem && isModalOpen && (
        <Item
          title={selectedItem.title}
          price={selectedItem.price}
          tags={selectedItem.tags}
          onClose={closeModal} // Pass the closeModal function to the modal
        />
      )}
    </div>
  );
};

export default SpecialMenu;
