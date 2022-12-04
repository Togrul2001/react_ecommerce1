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
        let filteredData = []
        const foundedproduct = favorites?.find(fav => fav?.id === product.id)
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
    const handleSearchProduct = (search) => {
        const filteredproducts = productList.filter(data => data.name.toLowerCase().includes(search.toLowerCase()))
        setFilterProducts(filteredproducts)
    }

    const uniqueCategoryList = [...new Set(productList.map(product=>product.category))]

// Kategoriyaya gore filterleme

    const [activeCategory, setActiveCategory] = React.useState("All")
    const filteredCategory = (category) => {
        setActiveCategory(category)
        const filteredProducts = productList.filter(product=>product.category===category)
        setFilterProducts(filteredProducts)
        if (category==="All") {
            setFilterProducts(productList)
        }
    }

// Sort
    console.log("sort",filterProducts.sort())

    const sortProducts = (event) => {
        const value = event.target.value
        if (value==='mix') {
            filterProducts.reverse()
        }
        else if(value==='high_to_low'){
            function compareObjects(object1, object2, key) {
                const obj1 = object1[key]
                const obj2 = object2[key]
              
                if (obj1 < obj2) {
                  return -1
                }
                if (obj1 > obj2) {
                  return 1
                }
                return 0
              }
              
              filterProducts.sort((product1, product2) => {
                return compareObjects(product1, product2, 'price')
              })
        }
    }
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
                            <Form.Select onChange={sortProducts} aria-label="Default select example">
                                <option disabled selected hidden value="">Sırala</option>
                                <option value="mix">Qarışıq</option>
                                <option value="high_to_low">Bahadan ucuza</option>
                                <option value="low_to_high">Ucuzdan bahaya</option>
                            </Form.Select>
                        </div>
                    </div>
                    <Search products={productList} handleSearchProduct={handleSearchProduct}/>
                </div>
                <div className="products_categories">
                    <ul>
                        <li className={activeCategory === "All" ? "active_category" : ""} onClick={()=>filteredCategory("All")}>Hamisi</li>
                        {uniqueCategoryList.map(category=> <li className={activeCategory === category? "active_category" : ""} key={category} onClick={()=>filteredCategory(category)}>{category}</li>)}
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