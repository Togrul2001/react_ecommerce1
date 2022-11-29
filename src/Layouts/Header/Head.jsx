import React from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import './head.css'
import OtherComponents from './OtherComponents';
import Sidebar from './Sidebar';

function Head(){
    const [burger, setBurger] = React.useState(false)
    const handleOpenMenu = () => {
        setBurger(!burger)
    }
    const handleCloseMenu = () => {
        setBurger(!burger)
    }
    return(
        <>
            <div className="header">
                {burger ? '' : <HiMenuAlt1 onClick={handleOpenMenu} className='burger'/>}
                
                <div className="header_filter">
                    <div className="row">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="">Basket</a></li>
                            <li><a href="">Favorites</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <OtherComponents/>
                        </ul>
                        
                    </div>
                    
                </div>
                
            </div>
            {burger ? <Sidebar handleCloseMenu={handleCloseMenu}/> : ''}
            
        </>
    )
}

export default Head