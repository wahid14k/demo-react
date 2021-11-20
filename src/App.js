import React from 'react'
import './App.css';
import {
  
  Route,
  Routes,Link
} from 'react-router-dom'
import HomePage from './pages/homepages/homepage.component'
import ShopPage from './pages/shop/shop.component'




function App() {
  return (
    <div>
    <Link to='/'>home</Link>
    <Link to='/shop'>shop</Link>
    <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/shop' element={<ShopPage/>}/>
    </Routes>
    </div>
  );
}

export default App;

