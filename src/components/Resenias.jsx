import React, { useState, useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { bigEars } from "@dicebear/collection";
import "../styles/Resenias.css";

const SEEDS_AVATARES = ["Felix", "Aneka", "John", "Star", "Buster", "Luna"];

export default function Resenas() {

  const listaAvatares = useMemo(() => {
    return SEEDS_AVATARES.map((seed) => ({
      seed,
      svgDataUri: createAvatar(bigEars, { seed }).toDataUri(),
    }));
  }, []);

  // Ejemplo de reseñas hardcodeadas
  const [resenas, setResenas] = useState([
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
  ]);

  // Estado del desplegable
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Estados del formulario
  const [nombre, setNombre] = useState("");
  const [texto, setTexto] = useState("");
  const [avatarSel, setAvatarSel] = useState(listaAvatares[0].svgDataUri);
  const [calificacion, setCalificacion] = useState(5);
  const [hoverCalificacion, setHoverCalificacion] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !texto.trim()) return;

    const nuevaResena = {
      id: Date.now(),
      nombre,
      cargo: "Usuario verificado",
      texto,
      avatarUri: avatarSel,
      calificacion,
    };

    setResenas([nuevaResena, ...resenas]);
    setNombre("");
    setTexto("");
    setCalificacion(5);
    setMostrarFormulario(false);
  };

  return (
    <section className="resenas">
      <header className="resenas__header">
        <h2 className="resenas__title">Lo que dicen nuestros <em>clientes</em></h2>
        <p className="resenas__subtitle">
          Opiniones reales de personas que confían en nuestro trabajo.
        </p>
      </header>

      {/* 1. SECCIÓN DE RESEÑAS EXISTENTES */}
      <ul className="resenas__list">
        {resenas.map((item) => (
          <li key={item.id} className="resenas__item">
            <blockquote className="review-card">
              <span
                className="review-card__stars"
                aria-label={`Calificación: ${item.calificacion} de 5 estrellas`}
              >
                {"★".repeat(item.calificacion)}
                {"☆".repeat(5 - item.calificacion)}
              </span>
              <p className="review-card__text">"{item.texto}"</p>
              <footer className="review-card__author">
                <img
                  className="review-card__avatar"
                  src={item.avatarUri}
                  alt={`Avatar de ${item.nombre}`}
                />
                <p className="review-card__info">
                  <cite className="review-card__name">{item.nombre}</cite>
                  <span className="review-card__role">{item.cargo}</span>
                </p>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>

      {/* 2. BOTÓN / LABEL PARA DESPLEGAR */}
      <nav className="resenas__action-bar">
        <button
          type="button"
          className="btn-toggle-form"
          aria-expanded={mostrarFormulario}
          aria-controls="panel-resena"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
          {mostrarFormulario ? "✕ Cancelar" : "Dejanos una reseña"}
        </button>
      </nav>

      {/* 3. PANEL DE CREACIÓN DESPLEGABLE */}
      {mostrarFormulario && (
        <form id="panel-resena" className="resenas__form" onSubmit={handleSubmit}>
          <h3>Escribi tu experiencia</h3>

          <p className="form-group">
            <label htmlFor="nombre-input">Tu Nombre:</label>
            <input
              id="nombre-input"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej. Ana Gómez"
              required
            />
          </p>

          <fieldset className="form-group fieldset-avatars">
            <legend>Seleccioná tu Avatar: </legend>

            <ul className="avatar-selector">
              {listaAvatares.map((item) => (
                <li key={item.seed}>
                  <label className="avatar-option">
                    <input
                      type="radio"
                      name="avatar-choice"
                      value={item.svgDataUri}
                      checked={avatarSel === item.svgDataUri}
                      onChange={() => setAvatarSel(item.svgDataUri)}
                      className="sr-only"
                    />
                    <img
                      src={item.svgDataUri}
                      alt={`Avatar Big Ears estilo ${item.seed}`}
                      className={`avatar-image ${
                        avatarSel === item.svgDataUri ? "selected" : ""
                      }`}
                    />
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>

          {/* SECTOR DE ESTRELLAS INTERACTIVO */}
          <fieldset className="form-group fieldset-stars">
            <legend>Tu Calificación:</legend>
            <ul className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <li key={star}>
                  <button
                    type="button"
                    className={`star-button ${
                      star <= (hoverCalificacion || calificacion)
                        ? "active"
                        : ""
                    }`}
                    onClick={() => setCalificacion(star)}
                    onMouseEnter={() => setHoverCalificacion(star)}
                    onMouseLeave={() => setHoverCalificacion(0)}
                    aria-label={`Calificar con ${star} de 5 estrellas`}
                  >
                    ★
                  </button>
                </li>
              ))}
            </ul>
          </fieldset>

          <p className="form-group">
            <label htmlFor="comentario-textarea">Tu Comentario:</label>
            <textarea
              id="comentario-textarea"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Contanos qué te pareció el servicio..."
              rows="3"
              required
            />
          </p>

          <button type="submit" className="btn-submit">
            Publicar Reseña
          </button>
        </form>
      )}
    </section>
  );
}