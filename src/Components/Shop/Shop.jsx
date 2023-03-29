import React, { useCallback, useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect( () => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])
    return (
        <div className="shop-container">
            <div className="products-container">
            {
                products.map(product => <Products product={product} key={product.id}></Products>)
            }
            </div>
            <div>
                <h2>Side-Bar</h2>
            </div>
        </div>
    );
};

export default Shop;