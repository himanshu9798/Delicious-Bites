import React from 'react';
import './Footer.css'; // Assuming we have a separate CSS for Footer styling

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2025 Delicious Bites | All Rights Reserved</p>
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
