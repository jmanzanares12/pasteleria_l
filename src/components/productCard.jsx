import React from 'react';

const ProductCard = () => {
    return(
        <div className="cardMain">
            <div className="cardImage">
                <img src="https://images.unsplash.com/photo-1646876727499-a7d1d5f1b1a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="product" />
            </div>
            <div className="cardInfo">
                <h3>Product Name</h3>
                <p>Product Description</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;