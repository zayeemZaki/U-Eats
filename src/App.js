import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart, CheckOut, Home, MenuList } from './pages';
import './App.css';

const App = () => {
  // Define cartData as an array of items
  const [cartData, setCartData] = useState([]);

    // Load cart data from localStorage on component mount
    useEffect(() => {
      const storedCartData = localStorage.getItem('cartData');
      if (storedCartData) {
        setCartData(JSON.parse(storedCartData));
      }
    }, []);
  

    const addToCart = (item) => {
      // Check if the item is already in the cart based on the title
      const existingItemIndex = cartData.findIndex((cartItem) => cartItem.title === item.title);
    
      if (existingItemIndex !== -1) {
        // If the item is already in the cart, update its quantity
        const updatedCart = cartData.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 } // Increase quantity
            : cartItem
        );
    
        // Update the cart state
        setCartData(updatedCart);
    
        // Save updated cart data to localStorage
        localStorage.setItem('cartData', JSON.stringify(updatedCart));
      } else {
        // If the item is not in the cart, add it with quantity 1
        const newCartData = [...cartData, { ...item, quantity: 1 }];
        setCartData(newCartData);
    
        // Save updated cart data to localStorage
        localStorage.setItem('cartData', JSON.stringify(newCartData));
      }
    };
    
    
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
          {/* Pass cartData and addToCart function to the Cart component */}
          <Route path="/cart" element={<Cart cart={cartData} addToCart={addToCart} setCartData={setCartData}/>} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/menuList" element={<MenuList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;






// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Cart, CheckOut, Home, MenuList } from './pages';
// import './App.css';

// const App = () => {
//   // Define cartData as an array of items
//   const [cartData, setCartData] = useState([]);

//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* Pass cartData to the Cart component */}
//           <Route path="/cart" element={<Cart cart={cartData} />} />
//           <Route path="/checkout" element={<CheckOut />} />
//           <Route path="/menuList" element={<MenuList />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
