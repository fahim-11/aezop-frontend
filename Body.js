import React from 'react';
import './Body.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Body() {
  return (
    <div>
      <header className="main-header">
        <div className="header-wrapper">
          <div className="trusted-section">
            <div className="trusted-text">Trusted by:</div>
            <div className="trusted-logos">
              <img src="meta-logo.png" alt="Meta" className="logo-image" />
              <img src="google-logo.png" alt="Google" className="logo-image" />
              <img src="netflix-logo.png" alt="Netflix" className="logo-image" />
              <img src="pg-logo.png" alt="P&G" className="logo-image" />
              <img src="paypal-logo.png" alt="PayPal" className="logo-image" />
              <img src="payoneer-logo.png" alt="Payoneer" className="logo-image" />
            </div>
          </div>
          <div className="search-section">
            <input type="text" placeholder="Search for any service..." className="search-input" />
            <button className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </header>

      <div className="content-container">
        <div className="freelancer-card">
          <img src="jenny.png" alt="Jenny" className="profile-image" />
          <h3 className="freelancer-name">Jenny</h3>
          <p className="freelancer-title">Voiceover & Singer</p>
        </div>
        <div className="freelancer-card">
          <img src="colin.png" alt="Colin" className="profile-image" />
          <h3 className="freelancer-name">Colin</h3>
          <p className="freelancer-title">Creative Director</p>
        </div>
        <div className="freelancer-card">
          <img src="verinica.png" alt="Verinica" className="profile-image" />
          <h3 className="freelancer-name">Verinica</h3>
          <p className="freelancer-title">Production Assistant</p>
        </div>
        <div className="freelancer-card">
          <img src="jordan.png" alt="Jordan" className="profile-image" />
          <h3 className="freelancer-name">Jordan</h3>
          <p className="freelancer-title">Production Assistant</p>
        </div>
      </div>
    </div>
  );
}

export default Body;