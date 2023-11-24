import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.U} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">U-Eats is a local mediterranean restaurant with traditional middle eastern flavors like you've never seen before. Every single item is made with care and perfection, guaranteed to leave you satisfied.</p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Food</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Our food is the highest quality, made with the highest precision to ensure you get the perfect meal you deserve. We do not slack when it comes to our food here at U-Eats and will go above and beyond to satisfy our customers.</p>
      </div>
    </div>
  </div>
);

export default AboutUs;