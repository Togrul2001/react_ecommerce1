import React from 'react';
import {BiSearchAlt2} from 'react-icons/bi'

function Search({handleSearchProduct}){
    const [search, setSearch] = React.useState('')
    
    const handleSearch = () => {
        if (handleSearchProduct) {
            handleSearchProduct(search)   
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