import React, { useState } from 'react';
import '../styles/Blog.css';

const POSTS_DATA = [
  {
    id: 1,
    title: "Diferencias entre corrección ortotipográfica y de estilo",
    category: "Proceso Editorial",
    readTime: "5 min lectura",
    excerpt: "Descubre qué tipo de revisión necesita tu manuscrito antes de pasarlo a maquetación y cómo impacta en la lectura.",
    date: "28 Ago, 2026",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Cómo preparar tu archivo Word antes de enviar a maquetar",
    category: "Proceso Editorial",
    readTime: "4 min lectura",
    excerpt: "Guía práctica de estilos, saltos de página y limpieza de texto para evitar costes extra en la maquetación.",
    date: "20 Ago, 2026",
    isFeatured: false,
  },
  {
    id: 3,
    title: "¿Qué es el ISBN y por qué tu libro lo necesita?",
    category: "Aspectos Legales",
    readTime: "3 min lectura",
    excerpt: "Todo sobre el registro legal, códigos de barras y derechos de autor explicados sin tecnicismos.",
    date: "15 Ago, 2026",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Estrategias de marketing para la presentación de tu libro",
    category: "Marketing Editorial",
    readTime: "7 min lectura",
    excerpt: "Cómo llenar la sala en tu lanzamiento y conseguir que las librerías locales muestren interés en tu obra.",
    date: "02 Ago, 2026",
    isFeatured: false,
  }
];

const CATEGORIES = ["Todos", "Proceso Editorial", "Aspectos Legales", "Marketing Editorial", "Casos de Éxito"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = POSTS_DATA.filter((post) => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = POSTS_DATA.find((p) => p.isFeatured);

  return (
    <main className="editorial-blog">

      <header className="blog-header">
        <mark className="blog-badge">Recursos para Autores</mark>
        <h1 className="blog-title">El Blog Editorial</h1>
        <p className="blog-subtitle">
          Guías, consejos de edición y estrategias para transformar tu manuscrito en un libro profesional.
        </p>
      </header>

      {featuredPost && (
        <article className="featured-card">
          <header className="card-meta">
            <span className="category-tag">{featuredPost.category}</span>
            <time className="read-time">{featuredPost.readTime}</time>
          </header>
          <h2 className="featured-title">{featuredPost.title}</h2>
          <p className="featured-excerpt">{featuredPost.excerpt}</p>
          <footer className="featured-footer">
            <time className="post-date">{featuredPost.date}</time>
            <button type="button" className="read-more-btn">Leer Artículo Completo →</button>
          </footer>
        </article>
      )}

      <nav className="blog-controls" aria-label="Filtros de búsqueda y categorías">
        <form className="search-wrapper" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="Buscar guías o artículos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </form>

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

      <section className="posts-grid" aria-label="Lista de artículos">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article key={post.id} className="post-card">
              <header className="card-meta">
                <span className="category-tag">{post.category}</span>
                <time className="read-time">{post.readTime}</time>
              </header>
              <h3 className="post-card-title">{post.title}</h3>
              <p className="post-card-excerpt">{post.excerpt}</p>
              <footer className="post-card-footer">
                <time className="post-date">{post.date}</time>
                <a href={`#post-${post.id}`} className="card-link">Leer más</a>
              </footer>
            </article>
          ))
        ) : (
          <p className="no-results">No se encontraron artículos que coincidan con tu búsqueda.</p>
        )}
      </section>

      <aside className="blog-cta" aria-label="Llamada a la acción">
        <header className="cta-content">
          <h3>¿Tienes un manuscrito listo para publicar?</h3>
          <p>Descarga nuestra checklist gratuita de verificación previa a la edición o solicita un presupuesto ajustado a tu obra.</p>
        </header>
        <nav className="cta-actions">
          <button type="button" className="cta-primary">Presupuestar mi libro</button>
          <button type="button" className="cta-secondary">Descargar Checklist PDF</button>
        </nav>
      </aside>
    </main>
  );
}