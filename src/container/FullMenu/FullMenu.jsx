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
    //const [cart, setCart] = useState([]);
    const [localCart, setLocalCart] = useState([]); // Local cart state for SpecialMenu

    const handleViewMoreClick = () => {
        console.log('Item clicked:');

        navigate('/menuPage'); 
    };

    const handleItemClick = (item) => {
        console.log('Item clicked:', item);
        setSelectedItem(item);
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };


    const handleAddToCart = (item) => {
        console.log('Adding to cart in SpecialMenu:', item);
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
                    <p className="app__fullMenu-menu_heading">Wings</p>
                    <div className="app__fullMenu_menu_items">
                        {data.specialWings.map((wing, index) => (
                            <MenuItem
                                key={wing.title + index}
                                title={wing.title}
                                price={wing.price}
                                tags={wing.tags}
                                stripePriceId={wing.stripePriceId}

                                onClick={() => handleItemClick(wing)} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FullMenu;