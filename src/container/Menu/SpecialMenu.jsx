import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';


const SpecialMenu = () => {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate('../../pages/MenuList/MenuList'); //please figure out how we can navigate to Menu List Page
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
              <MenuItem key={wing.title + index} title={wing.title} price={wing.price} tags={wing.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu_img" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Sandwiches</p>
          <div className="app__specialMenu_menu_items">
            {data.specialSandwiches.map((Sandwich, index) => (
              <MenuItem key={Sandwich.title + index} title={Sandwich.title} price={Sandwich.price} tags={Sandwich.tags} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button" onClick={handleViewMoreClick}>
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;