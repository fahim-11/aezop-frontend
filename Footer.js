import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="discover-section">
          <h3 className="footer-title">Discover</h3>
          <ul className="footer-links">
            <li><a href="#">TRUST AND QUALITY</a></li>
            <li><a href="#">HOW IT WORKS</a></li>
            <li><a href="#">BLOG</a></li>
          </ul>
        </div>
        <div className="azop-section">
          <h3 className="footer-title">Azop</h3>
          <ul className="footer-links">
            <li><a href="#">TERMS OF SERVICE</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">ABOUT US</a></li>
          </ul>
        </div>
        <div className="contact-section">
          <h3 className="footer-title">Contact Details</h3>
          <p>Phone: +251918174003</p>
          <p>Email: info@aezope.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="designed-by">Designed by Fahim Oumer</p>
      </div>
    </footer>
  );
}

export default Footer;