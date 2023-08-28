// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [loading, setLoading] = useState(true);
//     const [cartItemCount, setCartItemCount] = useState(0);

//     return (
//         <CartContext.Provider value={{ loading, cartItemCount, setCartItemCount }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCartContext = () => {
//     return useContext(CartContext);
// };
