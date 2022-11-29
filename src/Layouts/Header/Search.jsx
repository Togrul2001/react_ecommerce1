import React from 'react';
import {BiSearchAlt2} from 'react-icons/bi'

function Search(){
    return(
        <>
            <div className='search_box'>
                <input type="search" name="" id="" placeholder='Search Product'/>
                <button><BiSearchAlt2/></button>
            </div>
        </>
    )
}

export default Search