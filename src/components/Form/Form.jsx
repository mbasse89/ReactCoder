import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/client';
import './Form.css';
import { useCartContext } from '../CartContext/CartContext';

const Form = () => {
  // Importa el hook useForm para manejar el formulario
  const { handleSubmit, register, formState: { errors } } = useForm();
  // Obtiene funciones y estados relacionados con el carrito del contexto
  const { setCartItems, setCartItemCount } = useCartContext();

  // Estados para controlar el formulario y el ID de orden
  const [form, setForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

  // Función que maneja el envío del formulario
  const onSubmit = async (data) => {
    // Crea un objeto "order" con los datos del comprador
    const order = {
      buyer: {
        name: data.name,
        phone: data.phone,
        email: data.email,
      },
    };

    // Accede a la colección "orders" en Firebase y agrega la orden
    const ordersCollection = collection(db, 'orders');
    try {
      const docRef = await addDoc(ordersCollection, order);

      // Actualiza el estado para ocultar el formulario y mostrar el alert con el ID de orden
      setOrderId(docRef.id);
      setForm(true);

      // Vacía el carrito
      setCartItems([]);
      setCartItemCount(0);
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  
  return (
    <div className='pt-5'>
      {form ? (
        <div className="alertContenedor">
          <div className="alert alert-success pt-5" role="alert">
            ¡Gracias por tu compra! Tu ID de orden es: {orderId}
          </div>
        </div>
      ) : (
        <div className="col-lg-6 py-5 mx-auto">
          <h3 className='text-center'>Ahora te vamos a pedir que completes un pequeño formulario con tus datos.</h3>
          <form className='formulario col-md bg-light' onSubmit={handleSubmit(onSubmit)}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                placeholder="name@example.com"
                type="text"
                id="floatingInput"
                name="name"
                {...register('name', { required: true })}
              />
              <label htmlFor="name">Nombre:</label>
              {errors.name && <span>Este campo es requerido.</span>}
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                placeholder="12345678"
                type="text"
                id="floatingInput"
                name="phone"
                {...register('phone', { required: true })}
              />
              <label htmlFor="phone">Número de Teléfono:</label>
              {errors.phone && <span>Este campo es requerido.</span>}
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                placeholder="asd@mail.com"
                type="email"
                id="email"
                name="email"
                {...register('email', { required: true })}
              />
              <label htmlFor="email">Correo Electrónico:</label>
              {errors.email && <span>Este campo es requerido.</span>}
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                placeholder="Calle falsa 123"
                type="text"
                id="floatingInput"
                name="email"
                {...register('email', { required: true })}
              />
              <label htmlFor="email">Dirección:</label>
              {errors.email && <span>Este campo es requerido.</span>}
            </div>
            <button
              type="submit"
              className="botonComprar justify-content-center mt-3 btn btn-outline-success"
            >
              COMPRAR
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
