import React, { useState } from 'react';
import Modal from '../components/PortfolioModal';
import '../styles/Portfolio.css';
import projectsData from '../data/projectsData';


export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [activeProject, setActiveProject] = useState(null);
  const CATEGORIES = ["Todos", "Tabitha King", "Vera Nabokova", "Sophia Tolstaya", "Olivia Langdon", "Anna Grigoryevna"];
  
  const filteredProjects = projectsData.filter((project) => {
    return selectedCategory === "Todos" || project.category === selectedCategory;
  });

  const featuredProject = projectsData.find((p) => p.isFeatured);

  return (
    <main className="editorial-portfolio">

      <header className="portfolio-header">
        <h1>Nuestros <em>Proyectos</em></h1>
        <p className="portfolio-subtitle">
          Algunos de nuestros trabajos y muestra de los servicios.
        </p>
      </header>

      {featuredProject && (
        <article className="featured-card">
          <figure className="card-image-wrapper">
            <img 
              src={featuredProject.images[0]} 
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
                  src={project.images[0]} 
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

      {/* Ventana emergente (Modal) con el carrusel */}
      <Modal 
        project={activeProject} 
        onClose={() => setActiveProject(null)} 
      />

    </main>
  );
}