import React, { useState } from 'react';
import Modal from '../components/Modal';
import '../styles/Portfolio.css';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Edición integral: La Sombra del Viento",
    category: "Proceso Editorial",
    client: "Editorial Planeta",
    excerpt: "Corrección ortotipográfica, maquetación e ilustración para la edición de coleccionista.",
    date: "28 Ago, 2026",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Diseño y Maquetación de Novela Histórica",
    category: "Proceso Editorial",
    client: "Autor Independiente",
    excerpt: "Preparación completa del archivo de texto, diseño de tripas y maquetación lista para imprenta.",
    date: "20 Ago, 2026",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Registro Legal y Gestión ISBN para Saga Fantástica",
    category: "Aspectos Legales",
    client: "Ediciones Letras",
    excerpt: "Tramitación de ISBN, depósito legal y protección de derechos de autor para trilogía.",
    date: "15 Ago, 2026",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    isFeatured: false,
  }
];

const CATEGORIES = ["Todos", "Proceso Editorial", "Aspectos Legales", "Marketing Editorial", "Casos de Éxito"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [activeProject, setActiveProject] = useState(null); // Estado para el modal

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    return selectedCategory === "Todos" || project.category === selectedCategory;
  });

  const featuredProject = PROJECTS_DATA.find((p) => p.isFeatured);

  return (
    <main className="editorial-portfolio">

      <header className="portfolio-header">
        <h1>Nuestros <em>Proyectos</em></h1>
        <p className="portfolio-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </header>

      {featuredProject && (
        <article className="featured-card">
          <figure className="card-image-wrapper">
            <img 
              src={featuredProject.image} 
              alt={featuredProject.title} 
              className="card-image"
            />
          </figure>
          <section className="card-content">
            <header className="card-meta">
              <span className="category-tag">{featuredProject.category}</span>
              <address className="client-tag">{featuredProject.client}</address>
            </header>
            <h2 className="featured-title">{featuredProject.title}</h2>
            <p className="featured-excerpt">{featuredProject.excerpt}</p>
            <footer className="featured-footer">
              <time className="post-date">{featuredProject.date}</time>
              <button 
                type="button" 
                className="read-more-btn"
                onClick={() => setActiveProject(featuredProject)}
              >
                Ver Proyecto Completo →
              </button>
            </footer>
          </section>
        </article>
      )}

      {/* Filtros */}
      <nav className="portfolio-controls" aria-label="Filtros de proyectos">
        <menu className="category-filters">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <button
                type="button"
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </menu>
      </nav>

      <section className="posts-grid" aria-label="Lista de proyectos">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <article key={project.id} className="post-card">
              <figure className="card-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="card-image"
                  loading="lazy"
                />
              </figure>
              <section className="card-content">
                <header className="card-meta">
                  <span className="category-tag">{project.category}</span>
                  <address className="client-tag">{project.client}</address>
                </header>
                <h3 className="post-card-title">{project.title}</h3>
                <p className="post-card-excerpt">{project.excerpt}</p>
                <footer className="post-card-footer">
                  <time className="post-date">{project.date}</time>
                  <button 
                    type="button" 
                    className="card-link-btn"
                    onClick={() => setActiveProject(project)}
                  >
                    Ver detalles
                  </button>
                </footer>
              </section>
            </article>
          ))
        ) : (
          <p className="no-results">No se encontraron proyectos en esta categoría.</p>
        )}
      </section>

      {/* Ventana emergente (Modal) */}
      <Modal 
        project={activeProject} 
        onClose={() => setActiveProject(null)} 
      />

    </main>
  );
}