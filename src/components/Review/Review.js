import React, { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlace(true);
        processOrder();
    }

    const remove = (productkey) =>{
        const newCart = cart.filter(pd => pd.key !== productkey);
        setCart(newCart);
        removeFromDatabaseCart(productkey);
    }

    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productkeys = Object.keys(savedCart);

        const cartProducts = productkeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        },);
        setCart(cartProducts);
    },[])

    let thankyou;
    if (orderPlace) {
        thankyou = <img src={happyImage} alt=""/>
    }

    return (
        <div className ='shop-container'>
            <div className='product-container'>
            <h2>Cart items: {cart.length}</h2>
            {cart.map(pd => <ReviewItem
            key = {pd.key}
            remove ={remove}
            product={pd}></ReviewItem>)}
            {thankyou}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                <button onClick={handlePlaceOrder} className='mainButton'>Place Order</button>
            </div>
        </div>
    );
};

export default Review;