import React from "react";
import "./bestsellers.css";
import { getData, setData } from '../data'
import Product from "./Product";



function BestSellers({ products }) {
    const [favorites, setFavorites] = React.useState([])
    const handleAddFavList = (e, product) => {
        e.stopPropagation() //hem productun hemde productun icindeki fav iconunun onclick funksiyasi var. bir birlerine qarismasin deye e.stoppropagation yaziriq ve fav iconuna klikleyende producta kliklenmis sayilmir
        console.log("product", product)
        let filteredData = []
        const foundedproduct = favorites?.find(fav => fav?.id === product.id)
        console.log("founded", foundedproduct)
        if (foundedproduct) {
            filteredData = favorites.filter(favorite => favorite.id !== foundedproduct.id)
            setFavorites(filteredData)
        }
        else{
            filteredData = [...favorites, product]
            setFavorites(filteredData)
        }
        setData(filteredData)
        
    }

    React.useEffect(() => {
        setFavorites(getData() || [])
    }, [])



    return (
        <>
            <div className="container best_seller_products">
                    {products.map(product => product.sale>=30 ? <Product key={product.id} favorites={favorites} product={product} handleAddFavList={handleAddFavList}/> : '')}
            </div>
        </>
    );
}

export default BestSellers;
