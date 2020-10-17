import React from 'react';
import './Card.css';

function Card({ src, title, description, price }) {
  return <div className="card">
      <img src={src} alt={title} className="card__image"/>
  </div>;
}

export default Card;
