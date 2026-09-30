import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

export default function Hero() {
    return (
        <section className="hero-section">
            <article className="hero-container">

                <header className="hero-header">
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <em>Quienquiera</em> Servicios Editoriales
                    </motion.h1>
                    
                    <motion.h3
                        className="hero-description"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        Un espacio donde quienquiera pueda publicarse
                    </motion.h3>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        Servicios editoriales: edición integral, maquetación e informes de lectura.
                    </motion.p>

                </header>

                <nav className="hero-actions" aria-label="Acciones principales">
                    <a href="#contacto" className="btn btn-primary">
                        Dejanos tu consulta
                    </a>
                    <a href="#servicios" className="btn btn-secondary">
                        Ver servicios
                    </a>
                </nav>
            </article>
        </section>
    );
}