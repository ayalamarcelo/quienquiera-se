import { useState } from 'react';
import '../styles/Contacto.css';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    servicio: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Lógica para el formulario */
    console.log('Datos enviados:', formData);
  };

  return (
    <section className="contact-section">
      <article className="contact-info">
        <p className="contact-subtitle">Hablemos de tu proyecto</p>
        <h2>¿Tenés una idea en mente? Hagámosla realidad.</h2>
        <p className="contact-description">
          Estamos listas para escucharte. Completa el formulario y nos
          pondremos en contacto a la brevedad para discutir cómo podemos
          ayudarte.
        </p>
      </article>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">
          Nombre completo
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ej. Maria García"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="email">
          Correo electrónico
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ejemplo@correo.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="servicio">
          Tipo de servicio
          <select
            id="servicio"
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Selecciona una opción</option>
            <option value="desarrollo-web">Desarrollo Web</option>
            <option value="diseno-ui-ux">Diseño UI/UX</option>
            <option value="consultoria">Consultoría</option>
            <option value="otro">Otro</option>
          </select>
        </label>

        <label htmlFor="mensaje">
          Cuéntanos sobre tu consulta
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            placeholder="Escribe tus dudas o detalles sobre el proyecto..."
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <button type="submit">Enviar solicitud</button>
      </form>
    </section>
  );
}