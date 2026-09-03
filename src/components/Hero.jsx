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
                        Lorem <em>ipsum</em> dolor sit amet consectetur.
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, recusandae adipisci. Eum.
                    </motion.p>

                </header>

                <nav className="hero-actions" aria-label="Acciones principales">
                    <a href="#contacto" className="btn btn-primary">
                        <em>Dejanos tu consulta</em>
                    </a>
                    <a href="#servicios" className="btn btn-secondary">
                        Ver servicios
                    </a>
                </nav>
            </article>
        </section>
    );
}