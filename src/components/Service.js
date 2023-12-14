import React from 'react';

export const Service = ({ imgSrc, altText, header, description }) => (
  <div className="service">
    <img src={imgSrc} className="service-pic rounded" alt={altText} />
    <h3 className="serviceHeader">{header}</h3>
    <p>{description}</p>
  </div>
);
