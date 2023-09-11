import './App.css';
import React, { createContext, useEffect } from 'react';
import Router from './Router/Router';
import { CartProvider } from './components/CartContext/CartContext';  
import { db } from './firebase/client'

import { getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'

export const context = createContext()

const App = () => {

  // const productsRef = collection (db, "products")

  const productsRef = doc (db, "products", 'taC6sd2ptNM9GYabq5Ig')

  const getProduct =() =>{  
    getDoc (productsRef).then((snapshot =>{
      if (snapshot.exists()){
        // console.log({id:snapshot.id, ...snapshot.data()   })
        console.log (snapshot)
      }
    }
))
  }

  useEffect(()=>{
    getProduct()
  })

  return (
    <CartProvider>
      <div>
        <Router />
        {/* llamo a mi navbar */}

      </div>
    </CartProvider>
  )
}


export default App;
