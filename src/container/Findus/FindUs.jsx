import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {

  const handleVisitUsClick = () => {
    window.open('https://www.google.com/maps/place/U-eaTs+Mediterranean/@41.6526085,-83.6151757,17z/data=!3m1!4b1!4m6!3m5!1s0x883c7948cada5d83:0x77be3ebc77811a75!8m2!3d41.6526045!4d-83.6126008!16s%2Fg%2F11sw0_2g1z?entry=ttu', '_blank');
  }

  return (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">2903 Dorr St, Toledo, OH 43607</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Sun - Thu: 12:00pm - 09:00pm</p>
        <p className="p__opensans">Fri - Sat: 12:00pm - 03:00am</p>
      </div>
      <button type="button" className="custom__button" onClick={handleVisitUsClick} style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
  );
};

export default FindUs;