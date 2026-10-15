import React, { useEffect } from 'react';
import '../styles/ServiceModal.css';

export default function ServiceModal({ service, onClose }) {
  useEffect(() => {
    if (!service) return;

    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
    };
  }, [service]);

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
                    ? service.descripcion
                      .replace(/(¿[^?]+\?)/g, '<strong>$1</strong>')
                      .replace(/(Adicionales:)/g, '<strong>$1</strong>')
                      .replace(/(Maqueta simple:|Maqueta completa:)/g, '<strong>$1</strong>')
                      .replace(/\n/g, '<br />')
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