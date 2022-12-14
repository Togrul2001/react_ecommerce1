import React from 'react';
import { AiFillStar } from 'react-icons/ai';
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
                        <img src={require(`../Assets/Images/${currentProduct.img}`)} alt="" />
                    </div>
                </div>
                <div className="product_details_right_side">
                    <div className="product_info">
                        <div className="name_and_rating">
                            <p className='product_name'>{currentProduct.name}</p>
                            <div className="product_rating">
                                <AiFillStar className="star" />
                                <AiFillStar className="star" />
                                <AiFillStar className="star" />
                                <AiFillStar className="star" />
                                <AiFillStar className="star" />
                            </div>
                            <span className='product_comment_count'>400 komment</span>
                        </div>
                        <p className='product_category' style={{marginTop:15}}>Kateqoriya: {currentProduct.category}</p>
                        <p className='product_salesman'>Satici: Reminant</p>
                        <div className='product_more_info'>
                            <li>DeFacto Regular Fit Qısaqol T-shirt</li>
                            <li>Bu geyimden {currentProduct.count} eded qalib</li>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat laborum exercitationem necessitatibus accusamus impedit porro expedita reiciendis. Ipsa voluptas qui, omnis sit maiores voluptatum dolores accusantium eos numquam accusamus adipisci?</p>
                        <div className="product_sizes">
                            {currentProduct.size.map(size=> <span key={currentProduct.id}>{size}</span>)}
                            
                        </div>
                    </div>
                    <div className="product_add_basket">
                        <button>Sebete at</button>
                    </div>
                </div>


            </div>
        
        </>
    )
}

export default ProductDetails