import React from 'react';
import './Products.css';

const Products = (props) => {
    const {img, name, price, ratings} = props.product;
    return (
        <div className="product">
            <img src={props.product.img} alt="" />
            <div style={{textAlign:"left"}}>
                <h5>{name}</h5>
                <h6>{ratings} star</h6>
            </div>
            
        </div>
    );
};

export default Products;