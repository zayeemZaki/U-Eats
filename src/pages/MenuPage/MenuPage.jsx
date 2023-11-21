import React from 'react';
import { AboutUs, Chef, FindUs, Footer, FullMenu} from '../../container';
import { Navbar } from '../../components';


const MenuPage = ({addToCart}) => {
  return (
    <div>
      <Navbar />
      <FullMenu addToCart={addToCart}/>
      <Footer />
    </div>
  );
};

export default MenuPage;