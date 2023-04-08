import React from 'react';
import './Navbar.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="namvar-container">
            <img src={logo}></img>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/orders">Order review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;