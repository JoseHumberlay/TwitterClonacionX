import React from 'react';
import '../components/global.css';

function Card({ nombre, alias, mensaje, imagen }) {
  return (
    <div className="card">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>{alias}</p>
      <p>{mensaje}</p>
    </div>
  );
}

export default Card;
