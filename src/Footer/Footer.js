import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="/img/cothings.avif" alt="Logo Cothings" className="footer-logo" />
          <p>Vous avez des questions?</p>
          <div className="footer-phones">
            <p>24 960 006</p>
            <p>27 772 264</p>
            <p>29 000 953</p>
          </div>
          <div className="footer-address">
            <strong>Adresse Showroom</strong>
            <p>Route X (Prés de Stade Bardo), Bardo, Tunis</p>
          </div>
          <div className="footer-socials">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <div className="footer-right">
          <h3>Information</h3>
          <ul>
            <li>Politique de remboursement</li>
            <li>Conditions d'utilisation</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
