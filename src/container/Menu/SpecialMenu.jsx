import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubHeading, MenuItem, Item } from '../../components';
import { data, images } from '../../constants';
import { Cart } from '../../pages';
import './SpecialMenu.css';


const SpecialMenu = ({ addToCart }) => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling the modal
  const [localCart, setLocalCart] = useState([]); // Local cart state for SpecialMenu

  const handleViewMoreClick = () => {
    console.log('Item clicked:');

    navigate('/menuPage'); 
  };

  const handleItemClick = (item) => {
    console.log('Item clicked:', item);
    setSelectedItem(item);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };


  const handleAddToCart = (item) => {
    console.log('Adding to cart in SpecialMenu:', item);
    addToCart(item);
    setLocalCart([...localCart, item]);
  };
    
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palate" />
        <h1 className="headtext__cormorant">Glance at our menu</h1>
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
                stripePriceId={wing.stripePriceId}
                quantity={wing.quantity}
                onClick={() => handleItemClick(wing)} 
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
                quantity={sandwich.quantity}
                stripePriceId={sandwich.stripePriceId}
                onClick={() => handleItemClick(sandwich)}
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
          stripePriceId={selectedItem.stripePriceId}
          quantity={selectedItem.quantity}
          onClose={closeModal} // Pass the closeModal function to the modal
          onAddToCart={() => handleAddToCart(selectedItem)} // Pass the callback to add to the cart

        />
      )}

   
    </div>
  );
};

export default SpecialMenu;







