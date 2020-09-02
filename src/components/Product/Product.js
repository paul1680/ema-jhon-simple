import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    //console.log(props.product);
    const { img, name, seller, price, stock, key} = props.product;
    return (
        <div className='product'>
            <div >
                <img src={img} alt="" />
            </div>
            <div className='p-name'>
                <Link to={'/Product/'+key}>{name}</Link>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock. Order soon!!!!</small></p>
                {props.showAddToCart && <button className='mainButton'
                 onClick={()=>props.handleAddProduct(props.product)}>
                 <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;