import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
     const [cartItemCount, setCartItemCount] = useState(0)
    const [cartItems, setCartItems] = useState([])

    return (
        <CartContext.Provider value={{ cartItemCount, setCartItemCount, cartItems, setCartItems }}>
          {children}
        </CartContext.Provider>
      )
    }

export const useCartContext = () => {
    return useContext(CartContext)
}

export { CartContext }
