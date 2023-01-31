import React from 'react';
// component
import Menu from './Menu';

const Header = () => {

  return(
    <header className="header">
      <div className="logo">
        <h1>LEE JI YUN PORTFOLIO</h1>
      </div>

      <Menu />
    </header>
  );
}

export default Header;