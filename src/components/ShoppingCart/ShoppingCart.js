import React from 'react';

const ShoppingCart = ({ cart, onRemoveFromCart, onUpdateQuantity }) => {
  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {cart.map((cartItem) => (
        <div key={cartItem.id} className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={cartItem.image} alt={cartItem.name} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{cartItem.name}</h5>
                <p className="card-text">${cartItem.price}</p>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    value={cartItem.quantity}
                    onChange={(e) => onUpdateQuantity(cartItem, e.target.value)}
                  />
                  <button
                    className="btn btn-danger"
                    onClick={() => onRemoveFromCart(cartItem)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <p>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
    </div>
  );
};

export default ShoppingCart;
