import React from 'react';
import './ProductCard.css'
const ProductCard = ({ image, label, cost }) => {
  return (
    <div className="productcard">
      <img src={image} alt={label} />
      <h3>{label}</h3>
      <p>{cost}</p>
    </div>
  );
};

export default ProductCard;