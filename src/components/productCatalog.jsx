import React, { useState } from 'react';
import ProductCard from './productCard';

const ProductCatalog = () => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('name');
    
    const product = [
        {
            id: 1,
            name: 'Pastel personalizado de Baseball',
            price: 1200,
            image: 'https://i.imgur.com/m0w4r0l.jpg',
        },
        {
            id: 2,
            name: 'Pastel personalizado de Basketball',
            price: 1200,
            image: 'https://i.imgur.com/m0w4r0l.jpg',
        },
        {
            id: 3,
            name: 'Pastel personalizado de Football',
            price: 1200,
            image: 'https://i.imgur.com/m0w4r0l.jpg',
        },
        {
            id: 4,
            name: 'Pastel personalizado de Golf',
            price: 1200,
            image: 'https://i.imgur.com/m0w4r0l.jpg',
        },
        {
            id: 5,
            name: 'Pastel personalizado de Hockey',
            price: 1200,
            image: 'https://i.imgur.com/m0w4r0l.jpg',
        },
    ]

    // Filter products

    const filteredProducts = product.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())).sort((a, b) => {
        
    });

    return (
        <>
            <div className="productCatalog">
                
            </div>
        </>
    )
}