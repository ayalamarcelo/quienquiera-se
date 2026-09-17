import React, { useState, useEffect } from 'react';
import '../styles/ServiceDetail.css';

import banner1 from "../assets/images/banner-1.jpg";
import banner2 from "../assets/images/banner-2.jpg";
import banner3 from "../assets/images/banner-3.jpg";

export default function ServiceDetail({ service, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = service?.images || [banner1, banner2, banner3];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleClose = (e) => {
    e.stopPropagation();
    if (onClose) {
      onClose();
    }
  };

  const handleDotClick = (index, e) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <section className="modal-backdrop" onClick={handleClose}>
      <button 
        type="button" 
        onClick={handleClose} 
        className="close-button" 
        aria-label="Cerrar modal"
      >
        ✕
      </button>

      <article className="service-detail-container" onClick={(e) => e.stopPropagation()}>
        <header className="service-header">
          <figure className="service-figure carousel-container">
            <img
              src={images[currentIndex]}
              alt={`${service?.title || 'Servicio'} - Imagen ${currentIndex + 1}`}
              className="service-image"
            />

            <div className="carousel-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={(e) => handleDotClick(index, e)}
                  className={`dot ${currentIndex === index ? 'active' : ''}`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </figure>

          <h1 className="service-title">{service?.title || 'Título del Servicio'}</h1>
        </header>

        <main className="service-main-content">
          <section className="service-text-section">
            <header>
              <h2>Detalles y Alcance</h2>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio deleniti dignissimos perspiciatis nam nesciunt, tempora vitae blanditiis explicabo unde labore sequi itaque velit eligendi necessitatibus adipisci nostrum laboriosam ratione libero iste atque aliquid...</p>
          </section>

          <aside className="service-explanation-sidebar">
            <header>
              <h2>Resumen del Servicio</h2>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </aside>
        </main>
      </article>
    </section>
  );
}