import React, { useCallback, useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedItem = getShoppingCart();
        let localArray = []
        for(const id in storedItem){
            
            let localItems = products.find(product => product.id === id);
            if(localItems){
                const quantity = storedItem[id];
                localItems.quantity = quantity;
                localArray.push(localItems)
            }
            
        }
        
        setCart(localArray)
    },[products]);
    const addToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    
    return (
        <div className="shop-container">
            <div className="products-container">
            {
                products.map(product => <Products product={product} clickHandler={addToCart} key={product.id}></Products>)
            }
            </div>
            <div className="cart-details">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;