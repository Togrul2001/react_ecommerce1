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
    // const [products, setProducts] = React.useState(PRODUCTS)
    const [favoriteProducts, setFavoriteProducts] = React.useState(getData())
    const [filterProducts, setFilterProducts] = React.useState(favoriteProducts)
    favoriteProducts.reverse()
    let filteredlist = []
    const handleRemoveFavList = (id) => {
        const foundedProduct = favoriteProducts.find(fav=> fav.id === id)
        filteredlist = favoriteProducts.filter(fav=> fav.id !== foundedProduct.id)
        setFavoriteProducts(filteredlist) 
        setData(filteredlist)
    }
    const handleSearchProduct = (search) => {
        const filteredproducts = favoriteProducts.filter(data => data.name.toLowerCase().includes(search.toLowerCase()))
        setFilterProducts(filteredproducts)
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
                    <Search products={favoriteProducts} handleSearchProduct={handleSearchProduct}/>
                </div>
                <div className="favorite_list">
                    {filterProducts.map(product => <Product key={product.id} product={product} handleRemoveFavList={handleRemoveFavList}/>)}
                </div>
            </div>

        </>
    )
}

export default Favorites