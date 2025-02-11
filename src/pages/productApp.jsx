import React from 'react';
import ProductCard from '../components/productCard';

const ProductApp = () => {
    return (
        <>
            <div className="mainContainer">
                <div className="mainContent">
                    <h1>Hola soy un producto</h1>
                    <ProductCard />
                </div>
            </div>
        </>
    )
}

export default ProductApp;