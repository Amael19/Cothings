import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <div className="blog">
      <div className="blog-header">
        <h2>Blog</h2>
      </div>
      <div className="underline"></div>
      
      <div className="blog-grid">
        <div className="blog-card">
          <img src="/img/R1.webp" alt="Robot Arduino" />
          <h3>Robot Arduino</h3>
          <p>299.000 DT</p>
        </div>
        <div className="blog-card">
          <img src="/img/R2.webp" alt="Kit de Démarrage" />
          <h3>Kit de Démarrage</h3>
          <p>199.000 DT</p>
        </div>
        <div className="blog-card">
          <img src="/img/R3.webp" alt="Carte ESP32" />
          <h3>Carte ESP32</h3>
          <p>99.000 DT</p>
        </div>
      </div>

      <div className="blog-grid">
        <div className="blog-card">
          <img src="/img/R1.webp" alt="Robot Arduino" />
          <h3>Robot Arduino</h3>
          <p>299.000 DT</p>
        </div>
        <div className="blog-card">
          <img src="/img/R2.webp" alt="Kit de Démarrage" />
          <h3>Kit de Démarrage</h3>
          <p>199.000 DT</p>
        </div>
        <div className="blog-card">
          <img src="/img/R3.webp" alt="Carte ESP32" />
          <h3>Carte ESP32</h3>
          <p>99.000 DT</p>
        </div>
      </div>
      
      
    </div>
  );
}

export default Blog;
