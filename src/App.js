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
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/hats' component={<HatsPage/>}/>
    </Routes>
    </div>
  );
}

export default App;































// import { useNavigate } from "react-router-dom";

// const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
//   const navigate = useNavigate();

//   return (
//     <div
//       className={`${size} menu-item`}
//       onClick={() => navigate(`${match.url}${linkUrl}`)}
//     >
//       <div
//         className="background-image"
//         style={{
//           backgroundImage: `url(${imageUrl})`,
//         }}
//       />
//       <div className="content">
//         <h1 className="title">{title.toUpperCase()}</h1>
//         <span className="subtitle">Shop Now</span>
//       </div>
//     </div>
//   );
// };
