import React from 'react'
import './App.css';
import {
  
  Route,
  Routes
} from 'react-router-dom'
import HomePage from './pages/homepages/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'



function App() {
  return (
    <div>
    <Header/>
    <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/shop' element={<ShopPage/>}/>
    </Routes>
    </div>
  );
}

export default App;

