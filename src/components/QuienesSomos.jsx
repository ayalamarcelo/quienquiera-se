import React from "react";
import "../styles/QuienesSomos.css";

import avatar1 from "../assets/images/avatar-img-1.svg";
import avatar2 from "../assets/images/avatar-img-2.svg";

export default function QuienesSomos() {
  return (
    <section className="quienes-somos">
      <section className="background">
        <header className="quienes-somos__header">
          <h2 className="quienes-somos__title">
            ¿Quiénes <em>Somos?</em>
          </h2>
          <p className="quienes-somos__subtitle">
            Conocé la historia de Quienquiera, nuestro equipo y la razón de ser de este proyecto.
          </p>
        </header>

        <div className="quienes-somos__grid">
          <article className="info-card">
            <h3 className="info-card__title">Nuestra Historia</h3>
            <p className="info-card__text">
              Quienquiera nació de la pregunta: ¿Qué necesitan realmente los autores?
              Trabajar en el manuscrito puede parecer sencillo, pero una vez terminado los autores se encuentran frente a miles de decisiones editoriales que pueden resultar avasallantes.
              Es por eso que Quienquiera se presenta como la mejor opción para aquellos autores que buscan acompañamiento real a la hora de trabajar sobre la producción de su libro y respeto sobre su voz autoral.
              En Quienquiera te ofrecemos diferentes servicios pensados para vos y para cuidar tu obra,  y te ayudamos a elegir las opciones que mejor se amoldan a tu manuscrito.
            </p>
          </article>

          <article className="info-card">
            <h3 className="info-card__title">Misión y Visión</h3>
            <ul className="info-card__list">
              <li className="info-card__item">
                <strong>Misión:</strong> Potenciar proyectos de autores independientes asegurando calidad editorial, acompañamiento cercano y respeto total a sus ideas, para que cada obra alcance su mejor versión.
              </li>
              <li className="info-card__item">
                <strong>Visión:</strong> Queremos consolidarnos como referentes en servicios editoriales para autores independientes con calidad, claridad y sensibilidad. Aspiramos a expandir nuestro alcance, impulsar nuevas voces y formar un espacio donde la edición cuidada y acompañamiento sean un sello distintivo.
              </li>
            </ul>
          </article>
        </div>

        <section className="team-section">
          <ul className="team-section__list">
            <li className="team-section__item">
              <article className="team-card">
                <figure className="team-card__figure">
                  <img
                    className="team-card__image"
                    src={avatar1}
                    alt="Malena Cabrera"
                  />
                  <figcaption className="team-card__caption">
                    <h4 className="team-card__name">Malena Cabrera</h4>
                    <p className="team-card__role">Editora, UBA</p>

                    <a
                      href="https://www.linkedin.com/in/malena-cabrera-editora/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-card__linkedin"
                      aria-label="Perfil de LinkedIn de Malena Cabrera"
                    >
                      <svg
                        className="team-card__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20"
                        height="20"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </a>

                    <p className="team-card__bio">
                      Directora general, responsable de diseño, edición y comunicación.
                    </p>
                  </figcaption>
                </figure>
              </article>
            </li>

            <li className="team-section__item">
              <article className="team-card">
                <figure className="team-card__figure">
                  <img
                    className="team-card__image"
                    src={avatar2}
                    alt="María Ferenaz"
                  />
                  <figcaption className="team-card__caption">
                    <h4 className="team-card__name">María Segunda Ferenaz</h4>
                    <p className="team-card__role">Editora, UBA</p>

                    <a
                      href="https://www.linkedin.com/in/maría-segunda-ferenaz-editora/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-card__linkedin"
                      aria-label="Perfil de LinkedIn de María Ferenaz"
                    >
                      <svg
                        className="team-card__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20"
                        height="20"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </a>

                    <p className="team-card__bio">
                      Directora general, responsable de corrección, edición e informes.
                    </p>
                  </figcaption>
                </figure>
              </article>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
}