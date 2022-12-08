import React, { useContext } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/user-context';
import './head.css'
import OtherComponents from './OtherComponents';
import Sidebar from './Sidebar';

function Head(){
    const user = useContext(UserContext)
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
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/products'>Məhsullar</Link></li>
                            {user?<li><Link to='/basket'>Basket</Link></li>:''}
                            
                            <li><Link to='/favorites'>Favorites</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
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