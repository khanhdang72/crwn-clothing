import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = () => {
   return (
      <div className="header">
         <Link to="/" className="logo-container">
            <Logo className="logo"/>
         </Link>
         <div className="options-container">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            <Link to="/sign-in" className="option">SIGN IN</Link>
         </div>
      </div>  
   )
};

export default Header;