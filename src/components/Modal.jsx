import React, { useState, useEffect } from 'react';
import '../styles/Modal.css';

export default function Modal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reiniciar el índice al abrir un proyecto nuevo
  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  // Manejo de la tecla Escape para cerrar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Rotación automática de las imágenes cada 4 segundos
  useEffect(() => {
    if (!project?.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [project]);

  if (!project) return null;

  // Obtenemos las imágenes (soporta tanto 'images' como 'image' por compatibilidad)
  const images = project.images || (project.image ? [project.image] : []);

  return (
    <dialog className="modal-overlay" open onClick={onClose}>
      <article className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Cerrar ventana"
        >
          &times;
        </button>

        <figure className="modal-image-wrapper">
          <div className="modal-carousel">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`${project.title} - imagen ${index + 1}`} 
                  className="modal-image" 
                />
              ))}
            </div>

            {/* Dots indicadores */}
            {images.length > 1 && (
              <div className="carousel-dots">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`dot ${currentIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Ver imagen ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </figure>

        <section className="modal-content">
          <header className="card-meta">
            <span className="category-tag">{project.category}</span>
            <address className="client-tag">{project.client}</address>
          </header>

          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-excerpt">{project.excerpt}</p>

          <footer className="modal-footer">
            <time className="post-date">Publicado: {project.date}</time>
          </footer>
        </section>
      </article>
    </dialog>
  );
}