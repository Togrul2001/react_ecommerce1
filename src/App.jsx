import './App.css';
import React, { createContext } from 'react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Footer from './Layouts/Footer/Footer';
import { PRODUCTS } from './utilities/constants/products';
import FavoriteList from './Pages/Favorites';
import Favorites from './Pages/Favorites';
import Collection from './Pages/Collection';
import Collections from './Pages/Collection';
import ProductDetails from './Pages/ProductDetails';
// In react-router-dom v6, "Switch" is replaced by routes "Routes"
import Routes from './Routes'
import {BrowserRouter as Router} from 'react-router-dom'
import { Outlet, useLocation } from 'react-router-dom';
import { getToken } from './data';
import UserContext from './contexts/user-context';


function App() {
  const [user, setUser] = React.useState(getToken())
  return (
    
    <>
    <UserContext.Provider value={user}>
      <Router>
          <Routes />
          {/* <Routes>
            <Route index element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/favorites' element={<Favorites/>}>
              <Routes>
              <Route path='/:id' children={<ProductDetails/>}/>
              </Routes>
            </Route>
            <Route path='/collections' element={<Collections/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path="*" element={<NotFound />} />
          </Routes> */}
          
        {/* <Footer/> */}
        </Router>
    </UserContext.Provider>
     
      
    </>
  );
}

export default App;
