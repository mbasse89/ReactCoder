import './App.css';
import React, { createContext, useEffect } from 'react';
import Router from './Router/Router';
import { CartProvider } from './components/CartContext/CartContext';  
import { db } from './firebase/client'

import { getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'

export const context = createContext()

const App = () => {



  return (
    <CartProvider>
      <div>
        <Router />
 
      </div>
    </CartProvider>
  )
}


export default App;
