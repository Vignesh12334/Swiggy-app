import {LOGO_URL} from '../utils/constants.js'
import { useState } from 'react';

const Header = ()=> {
  
     const [button, setButton] = useState('login')
   
    return (<div className='header'>
       <div className='logo-container'>
        <img className='logo' src= {LOGO_URL} /> 
       </div>

       <div className='nav-items'>
         <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className='login' onClick={() => {
             button==="login"? setButton('logout'):setButton('login')
          }}>{button} </button>
        </ul>

        </div>

    </div>) 
} 


export default Header;