import React from "react";
import './bestsellers.css'
import {AiFillStar} from 'react-icons/ai'
import {GrFavorite} from 'react-icons/gr'
import {MdFavorite} from 'react-icons/md'
import { useNavigate } from "react-router-dom";

function Product({handleRemoveFavList, favorites, isEnable, product, handleAddFavList }) {
    const navigator = useNavigate()
    const getToProductPage = () => {
        navigator(`/products/${product.id}`)
    }
    return(
        <div key={product.id} className="best_seller_product" onClick={getToProductPage}>
            <div className="add_favorite_list">
                {favorites ? favorites.find(fav=>fav.id === product.id) ? <MdFavorite onClick={(e) => handleAddFavList(e,product)} className="active_favorite"/> : <GrFavorite onClick={(e) => handleAddFavList(e,product)} className="deactive_favorite"/> : <MdFavorite onClick={() => handleRemoveFavList(product.id)} className="active_favorite"/>}
            </div>

            {/* <Link to={require(`/product_details/${product.id}`)}> */}
            <div className="first_part">
                <div className="product_image">
                <img src={require(`../Assets/Images/${product.img}`)} alt="" />
                </div>
            </div>
            <div className="second_part">
                <div className="product_info">{product.name}</div>
                <div className="product_price">{product.price}$</div>
                <div className="rating">
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                </div>
            </div>
            {/* </Link> */}
        </div>
    )
}

export default Product