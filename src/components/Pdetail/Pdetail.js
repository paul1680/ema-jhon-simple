import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Pdetail = () => {
    const {pk} = useParams();
    const pd = fakeData.find(pd => pd.key === pk);
    console.log(pd.key);
    return (
        <div>
            <h2>{pk} Coming Soon. Stay tuned. :)</h2>
             <Product showAddToCart={false} product={pd}></Product>
        </div>
    );
};

export default Pdetail;