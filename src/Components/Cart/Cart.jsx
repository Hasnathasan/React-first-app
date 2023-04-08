import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    let total = 0;
    let tax = 0;
    let quantity = 0;
    for(const product of cart){
        product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        tax = tax + (product.price * 7) / 100;
        quantity = quantity + product.quantity;
    }
    return (
        <div>
        <h2>Side-Bar</h2>
        <h2>{quantity}</h2>
        <h3>TotalPrice: {total}</h3>
        <h3>Tax : {tax.toFixed(2)}</h3>
        <h2>Grand Total: {(total + tax).toFixed(2)}</h2>
        </div>
    );
};

export default Cart;