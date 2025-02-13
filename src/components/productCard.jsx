import React from 'react';
import '../styles/productCard.css';

const ProductCard = ({product}) => {
    return (
        <div className="productCard">
            <img src={product.image} alt={product.name} height={200} width={200} />
            <h3>{product.name}</h3>
            <p className='product-price'>C${product.price.toFixed(2)}</p>
            <button className='add-to-cart'>Añadir al carrito</button>  
        </div>
    )
}

export default ProductCard;