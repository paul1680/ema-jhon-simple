import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    //console.log(props.product);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div >
                <img src={img} alt="" />
            </div>
            <div className='p-name'>
                <h4>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock. Order soon!!!!</small></p>
                <button className='mainButton'
                 onClick={()=>props.handleAddProduct(props.product)}>
                 <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;