import React from 'react';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, SpecialMenu } from '../../container';
import { Navbar } from '../../components';

const Home = ({ addToCart }) => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu addToCart={addToCart} />
      <Chef />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default Home;
