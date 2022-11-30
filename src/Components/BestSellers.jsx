import React from "react";
import "./bestsellers.css";
import { getData, setData } from '../data'
import Product from "./Product";


function BestSellers({ products }) {
    const [favorites, setFavorites] = React.useState([])
    const handleAddFavList = (id) => {
        let filteredData = []
        if (favorites?.includes(id)) {
            filteredData = favorites.filter(favorite => favorite !== id)
            setFavorites(filteredData)
        }
        else{
            filteredData = [...favorites, id]
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
