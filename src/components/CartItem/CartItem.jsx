import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio unitario: ${item.price}</p>
        <p>Total: ${item.price * item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;

