import React from 'react';
import { NavLink } from 'react-router-dom';
//import './FooterMenu.css';
//import '../assets/css/FooterMenu.css'

const FooterMenu = () => {
  return (
    <div className="footer-menu">
      <NavLink to="/favourites" activeClassName="active">
        <i className="fas fa-star"></i>
        <span>Favourites</span>
      </NavLink>
      <NavLink to="/recents" activeClassName="active">
        <i className="fas fa-clock"></i>
        <span>Recents</span>
      </NavLink>
      <NavLink to="/contacts" activeClassName="active">
        <i className="fas fa-address-book"></i>
        <span>Contacts</span>
      </NavLink>
      <NavLink to="/keypad" activeClassName="active">
        <i className="fas fa-th"></i>
        <span>Keypad</span>
      </NavLink>
    </div>
  );
};

export default FooterMenu;