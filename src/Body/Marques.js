import React from 'react';
import './Marques.css';

function Marques() {
  return (
    <div className="marques">
        <div className="marques-header">
        <h2>Marque</h2>
      </div>
      <div className="marques-grid">
        <img src="/img/M1.webp" alt="Marque 1" />
        <img src="/img/M2.webp" alt="Marque 2" />
        <img src="/img/M3.png" alt="Marque 3" />
        <img src="/img/M4.webp" alt="Marque 4" />
        <img src="/img/M5.webp" alt="Marque 5" />
        <img src="/img/M6.webp" alt="Marque 6" />
      </div>

      <div className="marques-grid">
        <img src="/img/M7.webp" alt="Marque 1" />
        <img src="/img/M8.avif" alt="Marque 2" />
        <img src="/img/M9.avif" alt="Marque 3" />
        <img src="/img/M10.webp" alt="Marque 4" />
        <img src="/img/M11.webp" alt="Marque 5" />
        <img src="/img/M12.webp" alt="Marque 6" />
      </div>
    </div>
  );
}

export default Marques;
