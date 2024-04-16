import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Card({ title, description, imageUrl, infoUrl }) {
  return (
    <div className="my-3">
      <div className="card" style={{ minWidth: '15rem', maxWidth: '20rem' }}>
        {/* Image */}
        <img
          src={imageUrl ? imageUrl : 'https://source.unsplash.com/300x200/?disaster,earthquakes,thunderandlightning'}
          className="card-img-top"
          style={{ height: '50vh', objectFit: 'cover' }}
          alt="..."
        />
        {/* Card Body */}
        <div className="card-body text-center">
          {/* Title */}
          <h5 className="card-title"><strong>{title}</strong></h5>
          {/* Description */}
          <p className="card-text">{description}  <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
          {/* Rating Icon */}
        </p>
          {/* Shop Now Button */}
          <a href={infoUrl} target="_blank" className="btn btn-sm btn-success mt-3" style={{ backgroundColor: '#024f4f', width: '100%' }}>
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
