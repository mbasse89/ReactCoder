import React from 'react';
import { useCartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import './Order.css';

const Order = () => {
  const { cartItems } = useCartContext();

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="order-container  ">
      <h2 className="order-title">Resumen de la Compra</h2>
      <div className="order-items">
        {cartItems.map((item) => (
          <div key={item.id} className="order-item">
            <div className="order-item-details">
              <span className="order-item-name">{item.name}</span>
              <span className="order-item-quantity">Cantidad: {item.quantity}</span>
              <span className="order-item-price">Precio unitario: ${item.price}</span>
              <span className="order-item-total">Total: ${item.price * item.quantity}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="order-total">Total a pagar: ${calculateTotal(cartItems)}</p>
      <div className="order-confirm-button">
        <Link to="/form">
          <button className="btn btn-primary">Confirmar Compra</button>
        </Link>
      </div>
    </div>
  );
};

export default Order;


