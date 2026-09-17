import React, { useEffect } from 'react';
import '../styles/Modal.css';

export default function Modal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

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
          <img src={project.image} alt={project.title} className="modal-image" />
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