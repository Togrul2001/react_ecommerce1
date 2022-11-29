import React from "react";
import './bestsellers.css'
import {AiFillStar} from 'react-icons/ai'
import {GrFavorite} from 'react-icons/gr'
import {MdFavorite} from 'react-icons/md'
import { getData } from "../data";


function Product({ favorites, product, handleAddFavList }) {
    return(
        <div key={product.id} className="best_seller_product">
            <div className="add_favorite_list">
                {favorites?.includes(product.id) ? <MdFavorite onClick={() => handleAddFavList(product.id)} className="active_favorite"/> : <GrFavorite onClick={() => handleAddFavList(product.id)} className="deactive_favorite"/>}
            </div>

            <a href="/">
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
            </a>
        </div>
    )
}

export default Product