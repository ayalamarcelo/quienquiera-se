import React from 'react';
import '../styles/StatsSection.css';

export default function StatsSection() {
  const stats = [
    { id: 1, number: '150+', label: 'Proyectos completados' },
    { id: 2, number: '98%', label: 'Reseñas positivas' },
    { id: 3, number: '5+', label: 'Años de experiencia' },
  ];

  return (
    <section className="stats-section">
      <dl className="stats-container">
        {stats.map((item) => (
          <article key={item.id} className="stat-card">
            <dt className="stat-label">{item.label}</dt>
            <dd className="stat-number">{item.number}</dd>
          </article>
        ))}
      </dl>
    </section>
  );
}