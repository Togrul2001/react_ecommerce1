import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../Components/Product';
import { getData } from '../data';
import Head from '../Layouts/Header/Head';
import Search from '../Layouts/Header/Search'
import { PRODUCTS } from '../utilities/constants/products';
import './collection.css'

function Collections({ handleRemoveFavList}){
    const [products, setProducts] = React.useState(PRODUCTS)
    const [favoriteProducts, setFavoriteProducts] = React.useState(getData())
    return (
        <>
            <Head/>
            <div className="favorite_first_section">
                <div className="favorite_header">
                    <div className="pages">
                        <div className="favorite_button">
                            <Link to='/favorites'>Favorite</Link>
                        </div>
                        <div className="collection_button"style={{borderBottom:'4px solid #f26522'}}>
                            <Link to='/collections'>Collection</Link>
                        </div>
                    </div>
                    <Search/>
                </div>
                {/* <div className="favorite_list">
                    {favoriteProducts.map(favproductid => {
                        return products.map(product => product.id === favproductid ? <Product key={product.id} product={product} handleRemoveFavList={handleRemoveFavList}/> : '')
                    })}
                </div> */}
            </div>
        </>
    )
}

export default Collections