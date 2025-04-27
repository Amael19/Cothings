import React from 'react';
import './Products.css';

function Products() {
  const products = [
    { img: '/img/R1.webp', title: 'Robot Arduino', price: '299.000 DT' },
    { img: '/img/R2.webp', title: 'Kit de Démarrage', price: '199.000 DT' },
    { img: '/img/R3.webp', title: 'Carte ESP32', price: '99.000 DT' },
    { img: '/img/R4.webp', title: 'Capteurs IR', price: '49.000 DT' },
    { img: '/img/R5.webp', title: 'Servomoteur SG90', price: '29.000 DT' },
    { img: '/img/R6.webp', title: 'Module Bluetooth HC-05', price: '59.000 DT' },
  ];

  const sections = [
    { title: 'Robotique', link: '/robotique' },
    { title: 'Nouveaux Produits', link: '/robotique' },
    { title: 'Robotique', link: '/robotique' },
    { title: 'Weidmüller', link: '/robotique' },
    { title: 'Electricité industrielle & automatisme', link: '/robotique' },
    { title: 'Outillage', link: '/robotique' },
    { title: 'Nouveauté Raspberry PI & STM32', link: '/robotique' },
  ];

  return (
    <div className="products">
      {sections.map((section, index) => (
        <div key={index}>
          <div className="products-header">
            <h2>{section.title}</h2>
            <a href={section.link} className="view-all">Voir Tout ➔</a>
          </div>
          <div className="underline"></div>
          <div className="products-grid">
            {products.map((product, idx) => (
              <div className="product-card" key={idx}>
                <div className="product-image">
                  <img src={product.img} alt={product.title} />
                  <div className="quick-view">Vue rapide</div>
                </div>
                <div className="product-details">
                  <h3>{product.title}</h3>
                  <p>{product.price}</p>
                  <div className="cart-button">
                    🛒
                    <span className="tooltip">Ajouter au panier</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
