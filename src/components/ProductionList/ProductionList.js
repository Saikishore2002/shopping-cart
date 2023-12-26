// Example in ProductList.js
import React from 'react';

const ProductList = ({ products, onProductClick }) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card" onClick={() => onProductClick(product)}>
              <img src={`${process.env.PUBLIC_URL}/images/${product.image}`} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
