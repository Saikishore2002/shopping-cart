import React from 'react';

const ProductDetails = ({ product, onAddToCart }) => {
  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <div className="card">
        <img src={product.image} alt={product.name} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">${product.price}</p>
          <button onClick={() => onAddToCart(product)} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
