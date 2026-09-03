import React from 'react';
import '../styles/Servicios.css';

const serviciosData = [
  {
    id: 1,
    titulo: 'Diseño Web UI/UX',
    descripcion: 'Creación de interfaces atractivas, intuitivas y enfocadas en la experiencia del usuario.',
    precio: '$299 / proyecto',
  },
  {
    id: 2,
    titulo: 'Desarrollo Frontend',
    descripcion: 'Construcción de aplicaciones web modernas, rápidas y optimizadas con React.',
    precio: '$499 / proyecto',
  },
  {
    id: 3,
    titulo: 'Optimización SEO',
    descripcion: 'Mejora el posicionamiento de tu sitio en motores de búsqueda para atraer más clientes.',
    precio: '$199 / mes',
  },
  {
    id: 4,
    titulo: 'Mantenimiento Web',
    descripcion: 'Soporte técnico, actualizaciones de seguridad y respaldos periódicos de tu sitio.',
    precio: '$99 / mes',
  },
  {
    id: 5,
    titulo: 'Consultoría Digital',
    descripcion: 'Asesoría personalizada para impulsar y digitalizar tu modelo de negocio.',
    precio: '$150 / hora',
  },
];

export default function Servicios() {
  return (
    <section className="servicios-container">
      <header className="servicios-header">
        <p className="servicios-subtitulo">Lo que ofrecemos</p>

        <h1 className="servicios-titulo">
          Nuestros Servicios Profesionales
        </h1>

        <p className="servicios-descripcion">
          Diseñamos y desarrollamos soluciones digitales a la medida para hacer crecer tu presencia en línea con la mejor calidad del mercado.
        </p>
      </header>

      <ul className="servicios-grid">
        {serviciosData.map((servicio) => (
          <li key={servicio.id} className="servicios-item">
            <article className="servicio-card">
              <header className="servicio-card-header">
                <h2 className="servicio-card-titulo">
                  {servicio.titulo}
                </h2>
                <p className="servicio-card-texto">
                  {servicio.descripcion}
                </p>
              </header>
              <span className="servicio-card-precio">
                {servicio.precio}
              </span>
            </article>
          </li>
        ))}
      </ul>

      <footer className="servicios-footer">
        <p className="servicios-footer-texto">
          ¿Listo para llevar tu proyecto al siguiente nivel con nosotros?
        </p>

        <hr className="servicios-linea" />

        <button type="button" className="servicios-boton">
          Contratar servicio
        </button>
      </footer>
    </section>
  );
}