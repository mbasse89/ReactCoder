import React from 'react';

import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/client'



export const createOrder = () => {
  const order = {
    buyer: { name: "ssdf ", phone: " 1515", email: " asdas@hotmail.com" },
    items: [products[0]], // Asumo que products es un array con los productos
    total: products[0].price // Asumo que el primer producto tiene el precio
  };

  const orderCollection = collection(db, 'orders'); // Cambia 'orders' por la colección donde deseas guardar las órdenes

  addDoc (orderCollection, order).then (({id})=> console.log(id))
}