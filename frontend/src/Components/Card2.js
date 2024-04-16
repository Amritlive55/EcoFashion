import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Card2({ title, description, imageUrl1, imageUrl2, InfoUrl, More }) {
  return (
    <div className="my-3">
      <div className="card" style={{ width: "100%", maxWidth: "33rem", height: "85vh", backgroundColor: "#024f4f", color: "white" }}>
        <div className="row" style={{ margin: "5px", marginTop: "30px" }}>
          {/* First Image Column */}
          <div className="col-sm-6">
            <img
              src={imageUrl1 ? imageUrl1 : 'https://source.unsplash.com/300x200/?disaster,earthquakes,thunderandlightning'}
              className="card-img-top"
              style={{ height: "55vh", width: "100%", objectFit: "cover" }}
              alt="..."
            />
          </div>
          {/* Second Image Column */}
          <div className="col-sm-6">
            <img
              src={imageUrl2 ? imageUrl2 : 'https://source.unsplash.com/300x200/?disaster,earthquakes,thunderandlightning'}
              className="card-img-top"
              style={{ height: "55vh", width: "100%", objectFit: "cover" }}
              alt="..."
            />
          </div>
        </div>
        {/* Card Body */}
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          {/* Title */}
          <h5 className="card-title text-center">{title}</h5>
          {/* Description with Star Icon */}
          <p className="card-text text-center">
            {description} <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", marginLeft: "5px" }} />
          </p>
          {/* Shop Now Button */}
          <a href={InfoUrl} target="_blank" className="btn btn-sm" style={{ backgroundColor: "#FFD43B", color: "#024f4f", marginTop: "10px" }}>
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
