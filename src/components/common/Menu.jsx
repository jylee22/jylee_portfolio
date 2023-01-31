import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

  return(
    <nav className="menu">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">PROFILE</Link>
        </li>
        <li className="nav-item">
          <Link to="/history" className="nav-link">HISTORY</Link>
        </li>
        <li className="nav-item">
          <Link to="/project" className="nav-link">PROJECT</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;