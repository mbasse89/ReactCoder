import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(); // Agrega el estado del total del carrito

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + item.quantity };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
    setCartItemCount(cartItemCount + item.quantity);

    // Actualiza el total del carrito cuando se agrega un producto
    setCartTotal(cartTotal + item.price * item.quantity);
  };

  

  return (
    <CartContext.Provider
      value={{ cartItemCount, setCartItemCount, cartItems, setCartItems, addToCart,   cartTotal, setCartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext };
