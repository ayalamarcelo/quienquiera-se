import React, { useEffect } from 'react';
import '../styles/ServiceModal.css';

export default function ServiceModal({ service, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = (e) => {
    e.stopPropagation();
    if (onClose) onClose();
  };

  if (!service) return null;

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

      <article
        className="service-detail-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner superior independiente sin padding lateral */}
        <div className="service-banner-wrapper">
          <figure className="service-figure">
            <img
              src={service.imagen}
              alt={service.titulo || 'Servicio'}
              className="service-image"
              loading="eager"
            />
          </figure>
        </div>

        {/* Cuerpo del modal que contiene el padding para el texto y la sidebar */}
        <div className="service-body-content">
          <header className="service-header">
            <h1 className="service-title">
              {service.titulo || 'Título del Servicio'}
            </h1>
          </header>

          <main className="service-main-content">
            <section className="service-text-section">
              <header>
                <h2>{service.subtitulo}</h2>
              </header>
              <p
                dangerouslySetInnerHTML={{
                  __html: service?.descripcion
                    ? service.descripcion.replace(/\n/g, '<br />')
                    : ''
                }}
              />
            </section>

            <aside className="service-explanation-sidebar">
              <header>
                <h2>¿Quién es {service.titulo}?</h2>
              </header>
              <p>
                {service.historia}
              </p>
            </aside>
          </main>
        </div>
      </article>
    </section>
  );
}