import React from "react";
import "../styles/QuienesSomos.css";

export default function QuienesSomos() {
  return (
    <section className="quienes-somos">
      <header className="quienes-somos__header">
        <h2 className="quienes-somos__title">¿Quiénes <em>Somos?</em></h2>
        <p className="quienes-somos__subtitle">
          Conoce la historia, visión y el equipo detrás de nuestro proyecto.
        </p>
      </header>

      <div className="quienes-somos__grid">
        <article className="info-card">
          <h3 className="info-card__title">Nuestra Historia</h3>
          <p className="info-card__text">
            Fundada con la misión de transformar el sector, nuestra empresa ha
            crecido enfocada en la innovación, la calidad y el compromiso con nuestros clientes.
          </p>
        </article>

        <article className="info-card">
          <h3 className="info-card__title">Misión y Visión</h3>
          <ul className="info-card__list">
            <li className="info-card__item">
              <strong>Misión:</strong> Aportar valor a nuestros usuarios mediante
              soluciones eficientes e innovadoras.
            </li>
            <li className="info-card__item">
              <strong>Visión:</strong> Ser referentes globales en nuestro sector,
              impulsando un impacto positivo y sostenible.
            </li>
          </ul>
        </article>
      </div>

      <section className="team-section">
        <h3 className="team-section__title">Nuestro Equipo</h3>
        <ul className="team-section__list">
          <li className="team-section__item">
            <article className="team-card">
              <figure className="team-card__figure">
                <img
                  className="team-card__image"
                  src="../src/assets/avatar-img-1.svg"
                  alt="Imagen 1"
                />
                <figcaption className="team-card__caption">
                  <h4 className="team-card__name">Malena Cabrera</h4>
                  <p className="team-card__role">Editora, UBA</p>
                </figcaption>
              </figure>
            </article>
          </li>
          <li className="team-section__item">
            <article className="team-card">
              <figure className="team-card__figure">
                <img
                  className="team-card__image"
                  src="../src/assets/avatar-img-2.svg"
                  alt="Imagen 2"
                />
                <figcaption className="team-card__caption">
                  <h4 className="team-card__name">María Ferenaz</h4>
                  <p className="team-card__role">Editora, UBA</p>
                </figcaption>
              </figure>
            </article>
          </li>
        </ul>
      </section>
    </section>
  );
}