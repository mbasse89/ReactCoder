import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import CartItem from '../CartItem/CartItem';

const CartView = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <div className='container pt-5'>
        <h2 className="pt-5">Carrito de Compras</h2></div>
      {cartItems.length === 0 ? (
        <div>
          <p>Tu carrito está vacío.</p>
        </div>
      ) : (
        <div>
          <p>Tenés {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'} en tu carrito.</p>
          <ul>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <button>Comprar</button>
        </div>
      )}
    </div>
  );
}

export default CartView;
