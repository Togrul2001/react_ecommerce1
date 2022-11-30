import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Collections from './Pages/Collection'
import Favorites from './Pages/Favorites'
import Home from './Pages/Home'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import ProductDetails from './Pages/ProductDetails'
import Products from './Pages/Products'

export default function Pages() {
    const pages = useRoutes([
    { path: '/', element: <Home />},
    { path: 'products',  children: [
        { path: '', element: <Products />},
        { path: ':id', element: <ProductDetails />},
    ]},
    { path: 'collections', element: <Collections />},
    { path: 'login', element: <Login />},
    { path: '*', element: <NotFound /> }
    ])
    
    
    return pages
}