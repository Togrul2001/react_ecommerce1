import React from 'react';
import { useParams } from 'react-router-dom';
import Head from '../Layouts/Header/Head';
import { PRODUCTS } from '../utilities/constants/products';
import './productdetails.css'


function ProductDetails(){
    const products = PRODUCTS
    let { id } = useParams()
    const currentProduct = products.find(product=>product.id===parseInt(id))
    
    return (
        <>
            <Head/>
            <div className="container product_details">
                <div className="product_details_left_side">
                    <div className="images">
                        <img src={require("../Assets/Images/tshirt3.jpg")} alt="" />
                    </div>
                </div>
                <div className="product_details_right_side">
                    <div className="product_info">
                        <p className='product_name'>Rave One Here Tshirt</p>
                        <p className='product_category'>Category</p>
                    </div>
                    <div className="product_actions">
                        sebete at favorite
                    </div>
                </div>


            </div>
        
        </>
    )
}

export default ProductDetails