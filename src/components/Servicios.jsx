import React, { useState, useRef } from 'react';
import ServiceModal from './ServiceModal.jsx';
import { serviciosData } from '../data/cardsData.js';
import { SlArrowRight } from "react-icons/sl";
import '../styles/Servicios.css';

export default function Servicios() {
  const [selectedService, setSelectedService] = useState(null);
  const listaRef = useRef(null);

  const scrollNext = () => {
    if (listaRef.current) {
      const lista = listaRef.current;
      const scrollAmount = 340;
      
      if (lista.scrollLeft + lista.clientWidth >= lista.scrollWidth - 10) {
        lista.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        lista.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="servicios-container">
      <header className="servicios-header">
        <p className="servicios-subtitulo">Servicios Editoriales</p>
        <h1 className="servicios-titulo">
          Nuestros <em>servicios</em>
        </h1>
        <p className="servicios-descripcion">
          Acompañamos a autores y editoriales en cada etapa del texto para garantizar obras impecables, coherentes y listas para publicación.
        </p>
      </header>

      <div className="carrusel-wrapper">
        <ul className="servicios-lista" ref={listaRef}>
          {serviciosData.map((servicio) => (
            <li key={servicio.id} className="servicios-item">
              <article className="servicio-card-lineal">
                <div className="servicio-info">
                  <h2 className="servicio-card-titulo">
                    {servicio.titulo}
                  </h2>
                  <p className="servicio-card-descripcion">
                    {servicio.descripcion}
                  </p>
                </div>

                <button 
                  type="button"
                  onClick={() => setSelectedService(servicio)} 
                  className="servicio-card-link"
                >
                  Leer más &rarr;
                </button>
              </article>
            </li>
          ))}
        </ul>

        <button 
          type="button" 
          className="carrusel-btn-next-unico" 
          onClick={scrollNext}
          aria-label="Siguiente servicio"
        >
          <SlArrowRight />
        </button>
      </div>

      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </section>
  );
}