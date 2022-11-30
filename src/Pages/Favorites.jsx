import React from 'react';
import Product from '../Components/Product';
import { getData, setData } from '../data';
import Head from '../Layouts/Header/Head'
import { PRODUCTS } from '../utilities/constants/products';
import './favorite.css'
import Search from '../Layouts/Header/Search';
import { Link } from 'react-router-dom';
import {MdFavorite} from 'react-icons/md'
import {BsFillBookmarkFill} from 'react-icons/bs'

function Favorites(){
    const [products, setProducts] = React.useState(PRODUCTS)
    const [favoriteProducts, setFavoriteProducts] = React.useState(getData())
    favoriteProducts.reverse()
    let filteredlist = []
    const handleRemoveFavList = (id) => {
        filteredlist = favoriteProducts.filter(favproductid => favproductid !== id)
        setFavoriteProducts(filteredlist) 
        setData(filteredlist)
    }
    const handleSearchProduct = (product) => {
        setProducts(product)
    }
    return (
        <>
            <Head/>
            <div className="favorite_first_section">
                <div className="favorite_header">
                    <div className="pages">
                        <div className="favorite_button" style={{borderBottom:'4px solid #f26522'}}>
                            <MdFavorite style={{ fontSize:23, marginRight:5}}/>
                            <Link to='/favorites'>Favorites</Link>
                        </div>
                        <div className="collection_button">
                            <BsFillBookmarkFill style={{ fontSize:19, marginRight:5}}/>
                            <Link to='/collections'>Collections</Link>
                        </div>
                    </div>
                    <Search products={products} handleSearchProduct={handleSearchProduct}/>
                </div>
                <div className="favorite_list">
                    {favoriteProducts.map(favproductid => {
                        return products.map(product => product.id === favproductid ? <Product key={product.id} product={product} handleRemoveFavList={handleRemoveFavList}/> : '')
                    })}
                </div>
            </div>

        </>
    )
}

export default Favorites