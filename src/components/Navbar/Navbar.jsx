/*
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const navigate = useNavigate();

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.ueatslogotransparent} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="/#home">Home</a></li>
        <li className="p__opensans"><a href="/#about">About</a></li>
        <li className="p__opensans"><a href="/menuPage">Menu</a></li>
        <li className="p__opensans"><a href="/#contact">Contact</a></li>
      </ul>
      
      <div className="app__navbar-login">
        <a href="/cart" className="p__opensans" style={{ fontSize: '24px' }}>
          <FaShoppingCart />
        </a>
      </div>


      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="/#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="/#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="/menuPage" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="/#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

*/


import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const navigate = useNavigate();

  const handleMenuButtonClick = () => {
    // Add any custom logic you need when the "Menu" button is clicked
    // For example, you can navigate to the "/menuPage" route
    navigate('/menuPage');
  };

  const handleCartButtonClick = () => {
    // Add any custom logic you need when the "Cart" button is clicked
    // For example, you can navigate to the "/cart" route
    navigate('/cart');
  };


  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.ueatslogotransparent} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="/#home">Home</a></li>
        <li className="p__opensans"><a href="/#about">About</a></li>
        <li className="p__opensans">
         
          <button className="menu-button" onClick={handleMenuButtonClick}>
            Menu
          </button>
        </li>
        <li className="p__opensans"><a href="/#contact">Contact</a></li>
      </ul>

      <div className="app__navbar-login">
        {/* Use button instead of anchor for cart */}
        <button className="p__opensans" style={{ fontSize: '24px' }} onClick={handleCartButtonClick}>
          <FaShoppingCart />
        </button>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="/#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="/#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li>
                
                <button className="menu-button" onClick={() => { setToggleMenu(false); handleMenuButtonClick(); }}>
                  Menu
                </button>
              </li>
              <li><a href="/#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
