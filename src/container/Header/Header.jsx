import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';



const Header = () => {

const navigate = useNavigate();

const handleExploreMenuClick = () => {
  
  navigate('/MenuPage');
};


return(
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Delicious Mediterranean Food</h1>

      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Welcome to the U-Eats official website. Here you can find our menu, about our restaurant, and place an online order.  
      </p>

      <button type="button" className="custom__button" onClick={handleExploreMenuClick}>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
  ); 
};

export default Header;
