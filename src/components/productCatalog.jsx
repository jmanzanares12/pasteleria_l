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
        if (sort === 'name') return b.price - a.price;
        if (sort === 'price') return a.price - b.price;
        return b.name.localeCompare(a.name);
    });

    return (
        <>
            <div className="productCatalog">
                <div className="filter">
                    <input
                        type= 'text'
                        placeholder='Buscar producto...'
                        className='search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <select className='sort-by' value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="name">Relevancia</option>
                        <option value="price-desc" >Precio: Mayor a menor</option>
                        <option value="pirce-asc">Precio: Menor a mayor</option>
                    </select>
                </div>

                <div className="products">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
                </div>
            </div>
        </>
    )
}

export default ProductCatalog;