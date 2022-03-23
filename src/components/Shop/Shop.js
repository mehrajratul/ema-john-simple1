import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import "./Shop.css";
import '../Products/Products.css'
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])



    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }





    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=> <Products 
                    key={product.key}
                    product={product}
                    handleAddToCart = {handleAddToCart}
                    >
                    </Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;