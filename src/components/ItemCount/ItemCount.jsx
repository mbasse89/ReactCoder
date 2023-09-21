import React, { useState, useEffect } from 'react';
import './ItemCount.css';
import { useCartContext } from '../CartContext/CartContext';

const ItemCount = ({ product }) => {  
  const { cartItems, setCartItems, setCartItemCount } = useCartContext();
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    console.log(cartItems) 
  }, [cartItems])

  const restarProducto = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const sumarProducto = () => {
    setCantidad(cantidad + 1);
  };

  const agregarAlCarrito = () => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + cantidad };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      const newItem = {
        id: product.id,
        name: product.title,
        quantity: cantidad,
        price: product.price,
      };
      setCartItems([...cartItems, newItem]);
    }

    // Actualizar el contador de productos en el widget
    setCartItemCount(cartItems.reduce((total, item) => total + item.quantity, 0));
  }

  return (
    <div className="">
      <div className="contenedorContador my-3">
        <button className="btn btn-outline-dark" onClick={restarProducto}>
          -
        </button>
        <p className="text-center">{cantidad}</p>
        <button className="btn btn-outline-dark" onClick={sumarProducto}>
          +
        </button>
      </div>
      <div className="d-flex justify-content-around">
        <button
          className="btn btn-outline-dark botonAgregar"
          onClick={agregarAlCarrito} >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
