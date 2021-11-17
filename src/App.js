import React from 'react'
import './App.css';
import {
  
  Route,
  Routes
} from 'react-router-dom'

import HomePage from './pages/homepages/homepage.component'


const HatsPage =()=>(
  <div>
    <h1>Hats Page</h1>
    <h2>fk offfff</h2>
  </div>
)

function App() {
  return (
    <div>
    <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route  path='/hats' element={<HatsPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
