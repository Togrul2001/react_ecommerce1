import React from 'react';
import Product from '../Components/Product';
import { getData, setData } from '../data';
import Head from '../Layouts/Header/Head';
import Search from '../Layouts/Header/Search'
import { PRODUCTS } from '../utilities/constants/products';
import './products.css'
import {FiFilter} from 'react-icons/fi'
import Form from 'react-bootstrap/Form';

function Products(){
    const productList = PRODUCTS
// Add, remove Favorite List
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



// Search
    const [filterProducts, setFilterProducts] = React.useState(productList) //search olunmuslar
    console.log("filtered", filterProducts)
    productList?.reverse()
    const handleSearchProduct = (search) => {
        const filteredproducts = productList.filter(data => data.name.toLowerCase().includes(search.toLowerCase()))
        setFilterProducts(filteredproducts)
    }

    const uniqueCategoryList = [...new Set(productList.map(product=>product.category))]
    console.log("unique", uniqueCategoryList)


    return (
        <>
            <Head/>
            <div className="products_first_section">
                <div className="products_header">
                    <div className="filter_and_sort">
                        <div className="filter">
                            <FiFilter/>
                            <span>Filtr</span>
                        </div>
                        <div className="sort">
                            <Form.Select aria-label="Default select example">
                                <option value="1">Hamisi</option>
                                <option value="2">Kisi</option>
                                <option value="3">Qadin</option>
                                <option value="">Usaq</option>
                            </Form.Select>
                        </div>
                    </div>
                    <Search products={productList} handleSearchProduct={handleSearchProduct}/>
                </div>
                <div className="products_categories">
                    <ul>
                        <li>Hamisi</li>
                        {uniqueCategoryList.map(category=> <li key={category}>{category}</li>)}
                    </ul>
                </div>
                <div className="products_list">
                    {filterProducts?.map(product => <Product key={product.id} favorites={favorites} product={product} handleAddFavList={handleAddFavList}/>)}
                </div>
            </div>
        </>
    )
}

export default Products