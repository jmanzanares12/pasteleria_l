
import { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.log('Error fetching products', error));
    }, []);

    return (
        <>
            <section className=''>
                <div className='max-w-7xl mx-auto py-20 px-6 sm:px-10 space-y-10'>
                    <h2 className='text-4xl font-bold text-center text-rose-800 mb-16'>
                        Nuestros productos
                    </h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {products.map(prod => (
                            <div
                                key={prod.id}
                                className='bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center'
                            >
                                <h3 className='text-2xl font-semibold text-gray-800'>{prod.name}</h3>
                                <p className='text-gray-600 mt-2 text-sm'>{prod.description}</p>
                                <span className='mt-4 text-lg font-bold text-rose-600'> C$ {prod.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;