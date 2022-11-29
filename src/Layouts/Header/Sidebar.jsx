import React from 'react';
import {AiOutlineClose} from 'react-icons/ai'

function Sidebar({handleCloseMenu}){
    return(
        <>
            <div className='sidebar'>
                
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="">Basket</a></li>
                    <li><a href="">Favorites</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <AiOutlineClose onClick={handleCloseMenu} className='closeMenu'/>
            </div>
        </>
    )
}

export default Sidebar