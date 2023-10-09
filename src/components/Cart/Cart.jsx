import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/client';

export const createOrder = (products) => {
  const order = {
    buyer: { name: "Nombre del comprador", phone: "Número de teléfono", email: "Correo electrónico" },
    items: products,  
    total: calculateTotal(products)  
  };

  const orderCollection = collection(db, 'orders'); 

  addDoc(orderCollection, order)
    .then((docRef) => {
      console.log("Orden creada con ID:", docRef.id);
    })
    .catch((error) => {
      console.error("Error al crear la orden:", error);
    });
};

// Función para calcular el total de la orden
const calculateTotal = (products) => {
 
  let total = 0;
  for (const product of products) {
    total += product.price;
  }
  return total;
};

