import React from 'react';
import { FaPhone, FaEnvelope, FaUser, FaShoppingCart, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <header className="sticky-header">
      {/* Bande tout en haut */}
      <div className="top-header">
        <div className="contact-item"><FaPhone /> +216 24 960 006</div>
        <div className="contact-item"><FaPhone /> +216 27 772 264</div>
        <div className="contact-item"><FaPhone /> +216 29 000 953</div>
        <div className="contact-item"><FaEnvelope /> contact@cothings.net</div>
        <div className="contact-item"><FaMapMarkerAlt /> Emplacement du magasin</div>
        <div className="account">
          <FaUser /> <span>S'inscrire</span> ou <span>Se connecter</span>
        </div>
      </div>

      {/* Bande du milieu : logo + recherche + livraison + panier */}
      <div className="main-header">
        {/* Logo */}
        <img src="/img/cothings.avif" alt="Logo" className="logo" />

        {/* Recherche */}
        <div className="search-section">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="capteur" 
              className="search-input"
            />
            <button className="search-button">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Livraison + Panier */}
        <div className="cart-info">
          <div className="free-shipping">
            Restant à Livraison gratuite
            <span className="amount">99.000</span>
          </div>
          <div className="cart-summary">
            <FaShoppingCart />
            <span className="cart-items">0.000</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
