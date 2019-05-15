import React from 'react';
import NavTitle from './components/NavTitle/NavTitle';
import NavButton from './components/NavButton/NavButton';
import './NavBar.css';

function NavBar() {
  return (
    <div className="nav-bar">
      <NavTitle title="Recipe finder" />
      <NavButton link="/" text="Home" />
    </div>
  );
}

export default NavBar;
