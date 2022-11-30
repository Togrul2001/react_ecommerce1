import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Footer from './Layouts/Footer/Footer';
import { PRODUCTS } from './utilities/constants/products';
import FavoriteList from './Pages/Favorites';
import Favorites from './Pages/Favorites';
import Collection from './Pages/Collection';
import Collections from './Pages/Collection';
// In react-router-dom v6, "Switch" is replaced by routes "Routes"


function App() {
  // const pages = useRoutes([
  // { path: '/', element: <Home />},
  // { path: '/login', element: <Login />},
  // { path: '*', element: <NotFound /> }
  // ])
  

  // return pages
  
  return (
    
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/collections' element={<Collections/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer/> */}
      </Router>
      
    </>
  );
}

export default App;
