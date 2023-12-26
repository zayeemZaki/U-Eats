import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubHeading, MenuItem, Item } from '../../components';
import { data, images } from '../../constants';
import { Cart } from '../../pages';
import './FullMenu.css';

const FullMenu = ({ addToCart }) => {

    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling the modal
    const [localCart, setLocalCart] = useState([]); // Local cart state for SpecialMenu

    const handleItemClick = (item) => {
        console.log('Item clicked:', item);
        setSelectedItem(item);
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };


    const handleAddToCart = (item) => {
        console.log('Adding to cart in Full Menu:', item);
        addToCart(item);
        setLocalCart([...localCart, item]);
    };
    
    return(
        <div className="app__fullMenu flex__center section__padding" id="menu">
            <div className="app__fullMenu-title">
                <SubHeading title="Menu that fits your palate" />
                <h1 className="headtext__cormorant">Full Menu</h1>
            </div>

            <div className="app__fullMenu-menu">
                <div className="app__fullMenu-menu_wine flex__center">
                    <p className="app__fullMenu-menu_heading">Starters</p>
                    <div className="app__fullMenu_menu_items">
                        {data.starters.map((starter) => (
                            <MenuItem
                                key={starter.title}
                                title={starter.title}
                                price={starter.price}
                                tags={starter.tags}
                                stripePriceId={starter.stripePriceId}
                                quantity={starter.quantity}
                                onClick={() => handleItemClick(starter)} 
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="app__fullMenu-menu">
                <div className="app__fullMenu-menu_wine flex__center">
                    <p className="app__fullMenu-menu_heading">Wings</p>
                    <div className="app__fullMenu_menu_items">
                        {data.wings.map((wing) => (
                            <MenuItem
                                key={wing.title}
                                title={wing.title}
                                price={wing.price}
                                tags={wing.tags}
                                stripePriceId={wing.stripePriceId}
                                quantity={wing.quantity}
                                onClick={() => handleItemClick(wing)} 
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="app__fullMenu-menu">
                <div className="app__fullMenu-menu_wine flex__center">
                    <p className="app__fullMenu-menu_heading">Sandwich</p>
                    <div className="app__fullMenu_menu_items">
                        {data.sandwiches.map((sandwich) => (
                            <MenuItem
                                key={sandwich.title}
                                title={sandwich.title}
                                price={sandwich.price}
                                tags={sandwich.tags}
                                stripePriceId={sandwich.stripePriceId}
                                quantity={sandwich.quantity}
                                onClick={() => handleItemClick(sandwich)} 
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="app__fullMenu-menu">
                <div className="app__fullMenu-menu_wine flex__center">
                    <p className="app__fullMenu-menu_heading">Burgers</p>
                    <div className="app__fullMenu_menu_items">
                        {data.burgers.map((burger) => (
                            <MenuItem
                                key={burger.title}
                                title={burger.title}
                                price={burger.price}
                                tags={burger.tags}
                                stripePriceId={burger.stripePriceId}
                                quantity={burger.quantity}
                                onClick={() => handleItemClick(burger)} 
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="app__fullMenu-menu">
                <div className="app__fullMenu-menu_wine flex__center">
                    <p className="app__fullMenu-menu_heading">Salads</p>
                    <div className="app__fullMenu_menu_items">
                        {data.salads.map((salad) => (
                            <MenuItem
                                key={salad.title}
                                title={salad.title}
                                price={salad.price}
                                tags={salad.tags}
                                stripePriceId={salad.stripePriceId}
                                quantity={salad.quantity}
                                onClick={() => handleItemClick(salad)} 
                            />
                        ))}
                    </div>
                </div>
            </div>

            {selectedItem && isModalOpen && (
                <Item
                title={selectedItem.title}
                price={selectedItem.price}
                tags={selectedItem.tags}
                stripePriceId={selectedItem.stripePriceId}
                quantity={selectedItem.quantity}
                onClose={closeModal} // Pass the closeModal function to the modal
                onAddToCart={() => handleAddToCart(selectedItem)} // Pass the callback to add to the cart

                />
            )}
        </div>


    );
};

export default FullMenu;