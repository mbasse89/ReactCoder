import './App.css';
import React, { createContext } from 'react';
import Router from './Router/Router';
import { CartProvider } from './components/CartContext/CartContext';  
 

export const context = createContext()

const App = () => {



  return (
    <CartProvider>
      <div className=''>
        <Router />
 
      </div>
    </CartProvider>
  )
}


export default App;
