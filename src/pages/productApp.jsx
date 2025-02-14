import React from 'react';
import ProductCatalog from '../components/productCatalog';
import '../styles/productApp.css';

const ProductApp = () => {
    return (
        <>
            <div className="mainContainer">
                <div className="mainContent">
                    <h1>Hola soy un producto</h1>
                    <ProductCatalog />
                </div>
            </div>
        </>
    )
}

export default ProductApp;