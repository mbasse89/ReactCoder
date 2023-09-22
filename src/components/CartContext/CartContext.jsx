import React, { createContext, useContext, useState } from 'react';

// Crear un contexto para el carrito de compras
const CartContext = createContext();

// Proveedor de contexto para el carrito
export const CartProvider = ({ children }) => {
  // Estados para el carrito de compras
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(); // Agregar el estado del total del carrito

  // Función para agregar un elemento al carrito
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // Actualiza la cantidad si el elemento ya está en el carrito
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + item.quantity };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      // Agrega un nuevo elemento al carrito si no existe
      setCartItems([...cartItems, item]);
    }
    
    // Actualiza la cantidad total de productos en el carrito
    setCartItemCount(cartItemCount + item.quantity);

    // Actualiza el total del carrito cuando se agrega un producto
    setCartTotal(cartTotal + item.price * item.quantity);
  };

  // Devuelve el contexto con los estados y funciones del carrito
  return (
    <CartContext.Provider
      value={{
        cartItemCount,
        setCartItemCount,
        cartItems,
        setCartItems,
        addToCart,
        cartTotal,
        setCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Función para utilizar el contexto del carrito en otros componentes
export const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext };
