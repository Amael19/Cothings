import React from 'react';
import './Categories.css';

function Categories() {
  return (
    <div className="categories">
      <h2>Catégories</h2>
      <div className="underline"></div>
      <div className="categories-grid">
        <div className="category-card">
          <img src="/img/C1.webp" alt="Cartes de développement" />
          <h3>Cartes de développement</h3>
        </div>
        <div className="category-card">
          <img src="/img/C2.webp" alt="Kits de robots" />
          <h3>Kits de robots</h3>
        </div>
        <div className="category-card">
          <img src="/img/C3.webp" alt="IoT | sans fil" />
          <h3>IoT | sans fil</h3>
        </div>
        <div className="category-card">
          <img src="/img/C4.webp" alt="Imprimantes 3D" />
          <h3>Imprimantes et pièces 3D</h3>
        </div>
        <div className="category-card">
          <img src="/img/C5.webp" alt="Batteries" />
          <h3>Alimentations | Batteries</h3>
        </div>
        <div className="category-card">
          <img src="/img/C6.webp" alt="Moteurs" />
          <h3>Moteurs | Pompes | Actionneurs</h3>
        </div>
      </div>
      <div className="categories-grid">
        <div className="category-card">
          <img src="/img/C1.webp" alt="Cartes de développement" />
          <h3>Cartes de développement</h3>
        </div>
        <div className="category-card">
          <img src="/img/C2.webp" alt="Kits de robots" />
          <h3>Kits de robots</h3>
        </div>
        <div className="category-card">
          <img src="/img/C3.webp" alt="IoT | sans fil" />
          <h3>IoT | sans fil</h3>
        </div>
        <div className="category-card">
          <img src="/img/C4.webp" alt="Imprimantes 3D" />
          <h3>Imprimantes et pièces 3D</h3>
        </div>
        <div className="category-card">
          <img src="/img/C5.webp" alt="Batteries" />
          <h3>Alimentations | Batteries</h3>
        </div>
        <div className="category-card">
          <img src="/img/C6.webp" alt="Moteurs" />
          <h3>Moteurs | Pompes | Actionneurs</h3>
        </div>
      </div>
    </div>
  );
}

export default Categories;
