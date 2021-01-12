import React from 'react';
import CLogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';



export default function NavBar() {
    return( 
    <div>
        <ul>
            <li><Link to='/'>MainPage</Link></li>
            <li><Link to='/login'>LoginPage</Link></li>
            <li><Link to='/game'>GamePage</Link></li>
            <li><Link to='/register'>RegisterPage</Link></li>
           <CLogoutButton />
        </ul>
    </div>);
    
}


