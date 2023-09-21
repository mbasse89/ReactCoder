import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/client';

export const createOrder = (products) => {
  const order = {
    buyer: { name: "Nombre del comprador", phone: "Número de teléfono", email: "Correo electrónico" },
    items: products, // Asumo que 'products' es un array de objetos de producto
    total: calculateTotal(products) // Debes implementar una función para calcular el total
  };

  const orderCollection = collection(db, 'orders'); // Cambia 'orders' por el nombre de la colección correcta

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
  // Implementa aquí la lógica para calcular el total en función de los productos
  // Por ejemplo, puedes sumar los precios de los productos en 'products'.
  let total = 0;
  for (const product of products) {
    total += product.price;
  }
  return total;
};

