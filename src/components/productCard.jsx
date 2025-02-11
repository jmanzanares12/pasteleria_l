import React from 'react';
import '../styles/productCard.css';

const ProductCard = () => {
    return (
        <div className="catalog">
            <div className="filters">
                <input type="text" placeholder='Buscar producto...' class='search-bar' />
                <select class='sort-by'>
                    <option value='name'>Relevancia</option>
                    <option value='price'>Precio: Mayor a menor</option>
                    <option value='rating'>Precio: Menor a mayor</option>
                </select>
                <button class='btn-filter'>Filtrar</button>
            </div>

            <div className="products">
                <div className="product-card">
                    <img src="https://scontent.fmga4-1.fna.fbcdn.net/v/t39.30808-6/317232278_216768440692555_1593950917338205676_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=N3Pak12t5vkQ7kNvgFqxKKH&_nc_zt=23&_nc_ht=scontent.fmga4-1.fna&_nc_gid=Ai3yQQ0h7f6iEVRUDx1Du93&oh=00_AYDSrHdfpYDYzjz7A2bH03xgFqh60P_dscztv1UpD_o58g&oe=67B0B61C" alt="product" height={200} width={200} />
                    <h3>Pastel personalizado Baseball</h3>
                    <p class="product-price">C$1200.00</p>
                    <button class="quick-view">Vista Rápida</button>
                    <button class="add-to-cart">Añadir al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;