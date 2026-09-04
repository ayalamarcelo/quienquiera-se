import React, { useState, useEffect, useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { bigEars } from "@dicebear/collection";
import "../styles/Resenias.css";

export default function Resenas() {
  const resenas = useMemo(
    () => [
      {
        id: 1,
        nombre: "Lara Sosa",
        cargo: "Cliente",
        texto: "La atención al detalle y el compromiso con el proyecto fueron excepcionales.",
        avatarUri: createAvatar(bigEars, { seed: "Laura" }).toDataUri(),
        calificacion: 5,
      },
      {
        id: 2,
        nombre: "Sol Miñones",
        cargo: "Cliente",
        texto: "Muy cumplidoras y responsables, super recomendables!",
        avatarUri: createAvatar(bigEars, { seed: "Luna" }).toDataUri(),
        calificacion: 5,
      },
      {
        id: 3,
        nombre: "Camila Torres",
        cargo: "Cliente",
        texto: "Superaron mis expectativas en tiempos y calidad de entrega.",
        avatarUri: createAvatar(bigEars, { seed: "John" }).toDataUri(),
        calificacion: 5,
      },
      {
        id: 4,
        nombre: "Martina Paz",
        cargo: "Cliente",
        texto: "Un placer trabajar con este equipo. Sin duda volveré a contratarlas.",
        avatarUri: createAvatar(bigEars, { seed: "Star" }).toDataUri(),
        calificacion: 5,
      },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % resenas.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [resenas.length]);

  return (
    <section className="resenas">
      <header className="resenas__header">
        <h2 className="resenas__title">
          Lo que dicen nuestros <em>clientes</em>
        </h2>
        <p className="resenas__subtitle">
          Opiniones reales de personas que confían en nuestro trabajo.
        </p>
      </header>

      {/* Calesita Container */}
      <section className="resenas__carousel" aria-roledescription="carrusel">
        <ul
          className="resenas__track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {resenas.map((item) => (
            <li key={item.id} className="resenas__slide">
              <article className="review-card">
                <span
                  className="review-card__stars"
                  aria-label={`Calificación: ${item.calificacion} de 5 estrellas`}
                >
                  {"★".repeat(item.calificacion)}
                  {"☆".repeat(5 - item.calificacion)}
                </span>
                
                <blockquote className="review-card__text">
                  <p>"{item.texto}"</p>
                </blockquote>

                <footer className="review-card__author">
                  <figure className="review-card__figure">
                    <img
                      className="review-card__avatar"
                      src={item.avatarUri}
                      alt={`Avatar de ${item.nombre}`}
                    />
                  </figure>
                  <p className="review-card__info">
                    <cite className="review-card__name">{item.nombre}</cite>
                    <span className="review-card__role">{item.cargo}</span>
                  </p>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <nav className="resenas__dots" aria-label="Navegación del carrusel">
        {resenas.map((_, index) => (
          <button
            key={index}
            className={`resenas__dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a la reseña ${index + 1}`}
          />
        ))}
      </nav>
    </section>
  );
}