import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.style.scss'
import {signOut} from 'firebase/auth'
import {auth} from '../../firebase/firebase.utils'

const Header =({currentuser})=>(
    
    <div className='header'>
    <Link className='logo-container' to ='/'>
        <Logo className='logo'/>
    </Link>
    <div className='options'>
    <Link className='option' to='/shop'>
        Shop
    </Link>
    <Link className='option' to='/shop'>
        Contect
    </Link>
 {
     currentuser ?
     <div className='option' onClick ={()=> signOut(auth)}>SignOut</div>
     :
     <Link className='option' to='/signin'>SignIn</Link>
 }
    </div>
    </div>
)
export default Header