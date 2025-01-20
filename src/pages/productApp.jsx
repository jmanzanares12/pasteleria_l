import React from 'react';
import HeaderApp from '../components/headerApp';
import FooterApp from '../components/footerApp';

const ProductApp = () => {
    return (
        <>
            <div className="headerApp">
                <HeaderApp />
            </div>
            <div className="mainContainer">
                <div className="mainContent">
                    <h1>Product App</h1>
                </div>
            </div>
            <div className="footerApp">
                <FooterApp />
            </div>
        </>
    )
}

export default ProductApp;