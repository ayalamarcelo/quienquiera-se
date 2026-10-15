import React, { useState, useEffect } from 'react';
import '../styles/Modal.css';

export default function Modal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!project) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [project]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (!project?.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [project]);

  if (!project) return null;

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
          <section className="modal-carousel">
            <section
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.title} imagen ${index + 1}`}
                  className="modal-image"
                />
              ))}
            </section>

            {images.length > 1 && (
              <nav className="carousel-dots">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`dot ${currentIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Ver imagen ${index + 1}`}
                  />
                ))}
              </nav>
            )}
          </section>
        </figure>

        <section className="modal-content">
          <header className="card-meta">
            <span className="category-tag">{project.category}</span>
            <address className="client-tag">{project.client}</address>
          </header>

          <h2 className="modal-title">{project.title}</h2>
          <p
            className="modal-excerpt"
            dangerouslySetInnerHTML={{
              __html: project.excerpt.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }}
          />

          <footer className="modal-footer">
            <time className="post-date">Publicado: {project.date}</time>
          </footer>
        </section>
      </article>
    </dialog>
  );
}