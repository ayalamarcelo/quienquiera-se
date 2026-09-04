import { useState } from 'react';
import '../styles/Contacto.css';
import { motion } from 'framer-motion';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    servicio: '',
    mensaje: ''
  });

  // En Vite las variables públicas deben llevar el prefijo VITE_
  const TELEFONO_WHATSAPP = import.meta.env.VITE_TELEFONO_WHATSAPP;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviciosLegibles = {
      'correccion-estilo': 'Corrección de Estilo',
      'correccion-ortotipografica': 'Corrección Ortotipográfica',
      'consultoria': 'Consultoría',
      'otro': 'Otro'
    };

    const servicioTexto = serviciosLegibles[formData.servicio] || formData.servicio;

    const mensajeTexto =
      `*NUEVA CONSULTA DESDE LA WEB*\n\n` +
      `• *Nombre:* ${formData.nombre}\n` +
      `• *Email:* ${formData.email}\n` +
      `• *Servicio:* ${servicioTexto}\n\n` +
      `*Mensaje:*\n${formData.mensaje}`;

    const whatsappUrl = `https://wa.me/${TELEFONO_WHATSAPP}?text=${encodeURIComponent(mensajeTexto)}`;

    window.open(whatsappUrl, '_blank');
  };

  // Variantes para animaciones en cascada
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.section 
      className="contact-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.header className="contact-info" variants={itemVariants}>
        <p className="contact-subtitle">Hablemos de tu proyecto</p>
        <h2>¿Tenés una idea en mente? Hagámosla <em>realidad</em>.</h2>
        <p className="contact-description">
          Estamos listas para escucharte. Completa el formulario y envianos tu consulta.
        </p>
      </motion.header>

      <motion.form 
        className="contact-form" 
        onSubmit={handleSubmit}
        variants={containerVariants}
      >
        <motion.label htmlFor="nombre" variants={itemVariants}>
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
        </motion.label>

        <motion.label htmlFor="email" variants={itemVariants}>
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
        </motion.label>

        <motion.label htmlFor="servicio" variants={itemVariants}>
          Tipo de servicio
          <select
            id="servicio"
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Selecciona una opción</option>
            <option value="correccion-estilo">Corrección de Estilo</option>
            <option value="correccion-ortotipografica">Corrección Ortotipográfica</option>
            <option value="consultoria">Consultoría</option>
            <option value="otro">Otro</option>
          </select>
        </motion.label>

        <motion.label htmlFor="mensaje" variants={itemVariants}>
          Consultá sobre tu proyecto
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            placeholder="Contanos sobre tu proyecto..."
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </motion.label>

        <motion.button 
          type="submit"
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Enviar consulta
        </motion.button>
      </motion.form>
    </motion.section>
  );
}