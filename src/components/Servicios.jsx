import React, { useState } from 'react';
import ServiceDetail from '../components/ServiceDetail.jsx';
import '../styles/Servicios.css';

const serviciosData = [
  {
    id: 1,
    titulo: 'Corrección de Estilo',
    descripcion: 'Pulido de fluidez, coherencia, tono y riqueza léxica para enriquecer la lectura sin perder la voz del autor.',
    imagen: 'https://via.placeholder.com/1200x400',
  },
  {
    id: 2,
    titulo: 'Corrección Ortotipográfica',
    descripcion: 'Revisión exhaustiva de ortografía, gramática, puntuación y normas tipográficas aplicadas a la maquetación.',
    imagen: 'https://via.placeholder.com/1200x400',
  },
  {
    id: 3,
    titulo: 'Informe de Lectura Editorial',
    descripcion: 'Análisis crítico de estructura narrativa, ritmo, desarrollo de personajes y viabilidad comercial del manuscrito.',
    imagen: 'https://via.placeholder.com/1200x400',
  },
  {
    id: 4,
    titulo: 'Edición y Desarrollo de Manuscritos',
    descripcion: 'Acompañamiento estructural paso a paso para dar forma al borrador antes del proceso de diagramación.',
    imagen: 'https://via.placeholder.com/1200x400',
  },
  {
    id: 5,
    titulo: 'Corrección de Pruebas (Proofreading)',
    descripcion: 'Última revisión sobre galeradas maquetadas para eliminar erratas, viudas, huérfanas y fallos de maquetación.',
    imagen: 'https://via.placeholder.com/1200x400',
  },
];

export default function Servicios() {
  const [selectedService, setSelectedService] = useState(null);

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

      <ul className="servicios-lista">
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
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                Leer más &rarr;
              </button>
            </article>
          </li>
        ))}
      </ul>

      {selectedService && (
        <ServiceDetail 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </section>
  );
}