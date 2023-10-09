import React from 'react';
import './CartItem.css';
import { useCartContext } from '../CartContext/CartContext';

const CartItem = ({ product }) => {
  // Obtén los datos del carrito y las funciones de actualización del contexto
  const { cartItems, setCartItems, setCartTotal } = useCartContext();

  // Función para eliminar un producto del carrito
  const removeFromCart = () => {
     const updatedCart = cartItems.filter((item) => item.id !== product.id);

     const newTotal = updatedCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // Actualiza el estado del carrito con los productos filtrados
    setCartItems(updatedCart);

    // Actualiza el total del carrito
    setCartTotal(newTotal);
  };

  return (
    <div className="container cart-item card">
      <div className="item-details card-body">
        <h3>{product.name}</h3>
        <img className='itemCartProducto' src={product.image} alt={product.title} />
        <p>Cantidad: {product.quantity}</p>
        <p>Precio unitario: ${product.price}</p>
        <p>Total: ${product.price * product.quantity}</p>
        <button onClick={removeFromCart} className="btn btn-danger">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;



