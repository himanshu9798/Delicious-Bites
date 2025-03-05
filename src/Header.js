import React from 'react';
import './Header.css'; // Assuming we have separate CSS for styling the Header
import logo from './images/images.jpg'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Delicious Bites Logo" />
        <h1>Delicious Bites</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#we">Home</a></li>
          <li><a href="#s">Menu</a></li>
          <li><a href="#s">Specials</a></li>
          <li><a href="#s">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
