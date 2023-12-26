import React from 'react';

const Checkout = ({ cart, onConfirmOrder }) => {
  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      <ul className="list-group">
        {cart.map((cartItem) => (
          <li key={cartItem.id} className="list-group-item d-flex justify-content-between">
            <div>
              {cartItem.name} - ${cartItem.price} - Quantity: {cartItem.quantity}
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-3">Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
      <button onClick={onConfirmOrder} className="btn btn-success mt-3">
        Confirm Order
      </button>
    </div>
  );
};

export default Checkout;
