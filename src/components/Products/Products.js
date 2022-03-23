import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css';

const Products = (props) => {
    console.log(props.product)
    const {name, img,seller, price, stock} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
                <div>
                <h4 className='product-name'>{name}</h4>
                <p>By : {seller}</p>
                <p>Price: {price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button
                onClick={() => props.handleAddToCart(props.product)} 
                className='btn-regular'
                > {cartIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Products;