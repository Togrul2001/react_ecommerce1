import React from 'react';
import { countries } from 'country-flag-icons'
import { US, AZ, TR, GB } from 'country-flag-icons/react/3x2'
import {AiOutlineDown} from 'react-icons/ai'
import {FaCartPlus, FaLanguage} from 'react-icons/fa'
import {BiLogIn} from 'react-icons/bi'
import {Dropdown, NavItem, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';


function OtherComponents(){
    const [countries, setCountries] = React.useState([
        {
            id: 1,
            name: 'AZ',
            icon: <AZ className='country'/>
        },
        {
            id: 2,
            name: 'EN',
            icon: <GB className='country'/>
        },
        {
            id: 3,
            name: 'TR',
            icon: <TR className='country'/>
        },
    ])
    const [lang, setLang] = React.useState('AZ')
    const handleChangeLang = (country) => {
        setLang(country)
    }
    return(
        <>
            <div className='other_components_box'>

                    <Dropdown>
                        <Dropdown.Toggle style={{width:'100px', outline:'none'}}>
                            {lang === 'AZ' ? <><AZ className='country_main'/> <span>AZ</span></> : ''}
                            {lang === 'EN' ? <><GB className='country_main'/> <span>EN</span></> : ''}
                            {lang === 'TR' ? <><TR className='country_main'/> <span>TR</span></> : ''}
                            
                        </Dropdown.Toggle>
                        
                        <Dropdown.Menu>
                            {countries.map(country => country.name === lang ? '' : <Dropdown.Item key={country.id} onClick={() => handleChangeLang(country.name)} href="#/action-1">{country.icon}{country.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    

                <div className="shopping_cart">
                    <a href="/"><FaCartPlus/></a>
                </div>
                <div className="menu_login">
                    <Link to="/login"><BiLogIn/></Link>
                </div>
                
            </div>
        </>
    )
}

export default OtherComponents