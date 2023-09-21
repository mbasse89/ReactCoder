  import React from 'react';
  import './CartItem.css';
  import { useCartContext } from '../CartContext/CartContext';
  

  const CartItem = ({ product }) => {
    const { cartItems, setCartItems, setCartTotal } = useCartContext();

    const removeFromCart = () => {
      const updatedCart = cartItems.filter((item) => item.id !== product.id);
      const newTotal = updatedCart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      setCartItems(updatedCart);
      setCartTotal(newTotal);
      console.log(product.image )
    };

    return (
      
      <div className="container cart-item card">
        <div className="item-details card-body">
          <h3>{product.name}</h3>
          <img className=' ' src={product.image} alt={product.title} />
          <p>Cantidad: {product.quantity}</p>
          <p>Precio unitario: ${product.price}</p>
          <p>Total: ${product.price * product.quantity}</p>
          <button onClick={removeFromCart} className="btn btn-danger">
            Eliminar
          </button>
          
        </div>
      </div>
    );
  };

  export default CartItem;


