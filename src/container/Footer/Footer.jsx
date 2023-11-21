import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">2903 Dorr St, Toledo, OH 43607</p>
        <p className="p__opensans">(419) 724-2323</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.ueatslogo} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FiFacebook />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FiTwitter />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FiInstagram />
      </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Sunday-Thursday:</p>
        <p className="p__opensans">12:00pm - 09:00pm</p>
        <p className="p__opensans">Friday-Saturday:</p>
        <p className="p__opensans">12:00pm - 03:00am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">All rights reserved - Zayeem & Usman </p>
    </div>

  </div>
);

export default Footer;