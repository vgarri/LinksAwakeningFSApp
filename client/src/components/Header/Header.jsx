import React from "react";
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className='nav_generic'>
        <ul className='nav'>
            <li className="nav-link active"><Link to='/register'>Register</Link></li>
            <li className="nav-link active"><Link to='/login'>Login</Link></li>
            <li className="nav-link active"><Link to='/map'>Map</Link></li>
        </ul >
    </nav >
)
};

export default Header;
