import React from 'react'
import './App.css';
import {
  Route,
  Routes
} from 'react-router-dom'
import HomePage from './pages/homepages/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/signinandup.component'


function App() {
  return (
    <div>
    <Header/>
    <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/shop' element={<ShopPage/>}/>
        <Route  path='/signin' element={<SignInAndSignUpPage/>}/>
    </Routes>
    </div>
  );
}

export default App;

