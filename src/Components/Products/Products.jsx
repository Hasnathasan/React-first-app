import React from 'react';
import './Products.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Products = (props) => {
    const {img, name, price, ratings, seller} = props.product;
    const addToCart = props.clickHandler;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div style={{textAlign:"left"}}>
                <h4>{name}</h4>
                <h5 style={{margin:"8px 0 35px"}}>Price: {price}</h5>
                <h6 className="h6">Manufacturer: {seller}</h6>
                <h6 className="h6">Rattings: {ratings} star</h6>
            </div>
            <button className="cart" onClick={() => addToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Products;