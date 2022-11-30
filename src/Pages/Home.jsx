import React from 'react';
import Search from '../Layouts/Header/Search';
import '../Layouts/Header/head.css'
import Head from '../Layouts/Header/Head';
import IndividualIntervalsExample from '../Components/Carousel';
import './home.css'
import BestSellers from '../Components/BestSellers';
import { PRODUCTS } from '../utilities/constants/products';

function Home(){
    const [products, setProducts] = React.useState(PRODUCTS)
    // React.useEffect(()=>{
    //     fetch( `http://www.omdbapi.com/?t=a&apikey=3ee7236`).then(res=>{
    //         return res.json()
    //     }).then(res=>{
    //         console.log(res)
    //         setProducts(res)
    //     })
    // },[])

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