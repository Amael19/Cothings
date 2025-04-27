import React, { useRef } from 'react';
import './Bright.css';
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Bright() {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 300; // défilement manuel sans casser l'animation
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="bright-wrapper">
      
      {/* Navbar */}
      <div className="bright-navbar">
        <ul>
          <li>Accueil</li>
          
          <li className="dropdown">
            Boutique <FaChevronDown className="dropdown-icon" />
            <ul className="dropdown-menu">
              <li>Tous les produits</li>
              <li>Catégories</li>
              <li>Promotions</li>
            </ul>
          </li>
          
          <li>Nouveaux Produits</li>
        </ul>
      </div>

      {/* Flèches de navigation */}
      <button className="carousel-btn prev" onClick={handlePrev}>
        <FaChevronLeft />
      </button>

      <div className="bright-carousel" ref={carouselRef}>
        <div className="bright">
          <img src="/img/img1.webp" alt="Anet8 Plus" />
          <img src="/img/img2.webp" alt="Ender3" />
          <img src="/img/img3.webp" alt="Ender3" />
          <img src="/img/img4.webp" alt="Ender3" />
          <img src="/img/img1.webp" alt="Anet8 Plus" />
          <img src="/img/img2.webp" alt="Ender3" />
          <img src="/img/img3.webp" alt="Ender3" />
          <img src="/img/img4.webp" alt="Ender3" />
        </div>
      </div>

      <button className="carousel-btn next" onClick={handleNext}>
        <FaChevronRight />
      </button>

    </div>
  );
}

export default Bright;
