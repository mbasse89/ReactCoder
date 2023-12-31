import React, { useState, useEffect } from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../logo';
import { Link } from 'react-router-dom';
import { Spinner } from '../Spinner/Spinner';
import { useCartContext } from '../CartContext/CartContext';

const NavBar = () => {
   const [loading, setLoading] = useState(true);
  
  // Usa el contexto para obtener el estado del carrito y la función para actualizar el contador
  const { cartItemCount, setCartItemCount } = useCartContext();

  useEffect(() => {
     setTimeout(() => {
      setLoading(false);
    }, 1500);

   }, [setCartItemCount]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid d-flex justify-content-center">
        <Logo />
        <Link to="/" className="navbar-brand">
          Bier Kurbis
        </Link>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/category/Rubia" className="nav-link">
              Rubias
            </Link>
            <Link to="/category/Negra" className="nav-link">
              Negras
            </Link>
            <Link to="/category/Ipa" className="nav-link">
              IPAs
            </Link>
            <Link to="/category/Roja" className="nav-link">
              Rojas
            </Link>
            <Link to="/category/Otras" className="nav-link">
              Otras
            </Link>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Renderiza un spinner o el widget del carrito y muestra el contador del carrito */}
        {loading ? (
          <Spinner />
        ) : (
          <Link to="/cartview" className="nav-link">
            <CartWidget itemCount={cartItemCount} />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
