import React, { useState, useEffect } from 'react';
import { useCartContext } from '../CartContext/CartContext';
import './ItemCount.css'

const ItemCount = ({ product }) => {  
  // Acceder al contexto del carrito
  const { cartItems, setCartItems, setCartItemCount } = useCartContext();

   const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
     console.log(cartItems);
  }, [cartItems]);

   const restarProducto = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

   const sumarProducto = () => {
    setCantidad(cantidad + 1);
  };

  // Agregar el producto al carrito
  const agregarAlCarrito = () => {
    // Buscar si el producto ya está en el carrito
    const existingItem = cartItems.find(item => item.id === product.id);
    let updatedCartItems = [];

    if (existingItem) {
      // Si existe, actualizar la cantidad del producto en el carrito
      updatedCartItems = cartItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + cantidad };
        }
        return item;
      });
    } else {
       const newItem = {
        id: product.id,
        name: product.title,
        quantity: cantidad,
        price: product.price,
        image: product.image,  
      };
      updatedCartItems = [...cartItems, newItem];
    }

    // Actualizar el estado del carrito con el nuevo array actualizado
    setCartItems(updatedCartItems);

    // Actualizar el contador de productos en el widget
    setCartItemCount(updatedCartItems.reduce((total, item) => total + item.quantity, 0));
  }

   return (
    <div className="itemCount">
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
          onClick={agregarAlCarrito}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
