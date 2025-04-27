import React, { useState } from 'react';
import './Bleft.css';
import { FaBars } from 'react-icons/fa';

function Bleft() {
  const [showExtraMenu, setShowExtraMenu] = useState(false);

  const toggleMenu = () => {
    setShowExtraMenu(!showExtraMenu);
  };

  return (
    <div className='bleft'>
      <div className="bleft-header" onClick={toggleMenu}>
        <h2 className="menu-title">Menu</h2>
        <FaBars className={`menu-icon ${showExtraMenu ? 'open' : ''}`} />
      </div>

      {/* Liste principale */}
      <ul className={showExtraMenu ? 'hidden' : ''}>
        <li>Robotique</li>
        <li>Arduino</li>
        <li>Raspberry</li>
        <li>Imprimante 3D</li>
        <li>Industrial Shield</li>
      </ul>

      {/* Liste supplémentaire */}
      <ul className={`extra-menu ${showExtraMenu ? '' : 'hidden'}`}>
        <li>Microcontroleurs et Cartes</li>
        <li>Modules électroniques</li>
        <li>Capteurs</li>
        <li>Batteries, Alimentations et Chargeurs</li>
      </ul>
    </div>
  );
}

export default Bleft;
