import React from 'react';
import { Link } from 'react-router-dom';

import CartItem from '../CartItem/CartItem';
import { useCartContext } from '../CartContext/CartContext';
import './CartView.css'

const CartView = () => {
  const { cartItems } = useCartContext();

  return (
    
    <div className='text-center pt-5 my-5  d-flex  justify-content-center '>
      {/* <h2 className='d-flex justify-content-center'>Carrito de Compras</h2> */}
      {cartItems.length === 0 ? (
        <div className="mt-3 border border-3 border-black rounded-1  carritoVacioContainer ">
          <p className='h2 pt-4'>Tu carrito está vacío.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-empty" width="94" height="94" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M9 10l.01 0"></path>
            <path d="M15 10l.01 0"></path>
            <path d="M9 15l6 0"></path>
          </svg>
        </div>
      ) : (
        <div className='x'>
          <p>Tenes {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'} en tu carrito.</p>
          <div className="d-flex   productos flex-row">
            {cartItems.map((item) => (
              <CartItem key=
               {item.id}  product={item} />
            ))}
          </div>
          <Link to="/order"> {/* Enlace a la página de Order */}
            <button className="btn btn-primary mt-3">Comprar</button>
          </Link>

        </div>
      )}
    </div>



  );
}

export default CartView;
