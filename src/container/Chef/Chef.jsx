import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Owner's word" />
      <h1 className="headtext__cormorant">Message from the owner</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Thank you for visiting our website.</p>
        </div>
        <p className="p__opensans"> we thrive on bringing people together at our locally owned family business by the University of Toledo. We serve anything from burgers and chicken wings, to cheese sticks and french fries. We wholeheartedly appreciate your support and we commend you for supporting local. God bless you and thank you again! </p>
      </div>

      <div className="app__chef-sign">
        <p>Muhammed "Moe" Lastname</p>
        <p className="p__opensans">Owner & Chef</p>
      </div>
    </div>
  </div>
);

export default Chef;