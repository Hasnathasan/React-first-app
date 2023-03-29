import React from 'react';
import './Navbar.css'
import logo from '../../images/Logo.svg'
const Navbar = () => {
    return (
        <div className="namvar-container">
            <img src={logo}></img>
            <div className="navbar">
                <a href="#">Order</a>
                <a href="#">Order review</a>
                <a href="#">Manage Inventory</a>
                <a href="#">Login</a>
            </div>
        </div>
    );
};

export default Navbar;