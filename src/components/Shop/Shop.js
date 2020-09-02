import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(pkey=>{
            const product = fakeData.find(pd =>pd.key===pkey);
            product.quantity = savedCart[pkey];
            return product;
        })
        setCart(previousCart);
    },[])

    const handleAddProduct = (pro)=>{
        const tobeAdded = pro.key;
        const sameProduct = cart.find(pd=> pd.key === pro.key);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd=> pd.key !== tobeAdded);
            newCart = [...others, sameProduct];
        }
        else{
            pro.quantity = 1;
            newCart = [...cart, pro];
        }
        setCart(newCart);
        addToDatabaseCart(pro.key, count)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
        {
            products.map(product=><Product
                key = {product.key}
                showAddToCart={true}
                handleAddProduct = {handleAddProduct}
                product={product}></Product>)
        }
            </div>
            <div className='cart-container'>
              <Cart cart={cart}></Cart>
              <Link to="/review">
            <button className="mainButton">Review Order</button>
            </Link>
            </div>

        </div>
    );
};

export default Shop;