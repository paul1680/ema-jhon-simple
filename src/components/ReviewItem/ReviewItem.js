import React from 'react';

const ReviewItem = (props) => {
    const{name, price, quantity, key} = props.product;
    return (
        <div style={{borderBottom:'1px solid lightgray', marginBottom:'5px', paddingBottom:'5px', marginLeft:'200px'}}>
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button 
                className='mainButton'
                onClick={() => props.remove(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;