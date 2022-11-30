import React from 'react';
import {BiSearchAlt2} from 'react-icons/bi'
import { getData } from '../../data';

function Search({products, handleSearchProduct}){
    const [search, setSearch] = React.useState('')
    const handleSearch = () => {
        const filteredProducts = products.filter(product=>product.name.toLowerCase().includes(search.toLowerCase()))
        let filteredfavproducts = []
        getData().map(id=> {
            return filteredfavproducts.push(...filteredProducts.filter(product=> product.id === id))
        })
        console.log(filteredfavproducts)
        if (handleSearchProduct) {
            handleSearchProduct(filteredfavproducts)
        }
        
    }
    const handleName = (e) => {
        setSearch(e.target.value.trim())
    }
    
    return(
        <>
            <div className='search_box'>
                <input type="search" placeholder='Search Product' onChange={handleName}/>
                <button onClick={handleSearch}><BiSearchAlt2/></button>
            </div>
        </>
    )
}

export default Search