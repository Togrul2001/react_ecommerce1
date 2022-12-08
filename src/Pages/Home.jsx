import React, { useContext } from 'react';
import Search from '../Layouts/Header/Search';
import '../Layouts/Header/head.css'
import Head from '../Layouts/Header/Head';
import IndividualIntervalsExample from '../Components/Carousel';
import './home.css'
import BestSellers from '../Components/BestSellers';
import { PRODUCTS } from '../utilities/constants/products';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getToken } from '../data';
import UserContext from '../contexts/user-context';

function Home(){
    const [products, setProducts] = React.useState(PRODUCTS)
    return(
        <>
            <div className="home_main_section">
                <Head/>
                <div className="container">
                    <div className="logo">
                        <a href="/reminant.az">Reminant</a>
                    </div>
                </div>
                <div className="container triple_header_element">
                    
                    <Search products={products}/>
                </div>
                <br />
                
            </div>
            
            <div className="container home_second_section">
                <h2 className='text-center'>Man & Woman Fashion</h2>
                <IndividualIntervalsExample products={products}/>
            </div>
            <div className="container home_third_section">
                <h1>Best Sellers</h1>
                <BestSellers products={products}/>
            </div>

        </>
        
    )
}

export default Home