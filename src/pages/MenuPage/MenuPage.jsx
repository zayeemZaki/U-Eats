import React from 'react';
import { AboutUs, Chef, FindUs, Footer, FullMenu} from '../../container';
import { Navbar } from '../../components';


const MenuPage = () => {
  return (
    <div>
      <Navbar />
      <FullMenu />
      <Footer />
    </div>
  );
};

export default MenuPage;