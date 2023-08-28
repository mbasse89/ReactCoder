import React, { useState, useEffect, } from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../logo'
import { Link } from 'react-router-dom'
import { Spinner } from '../Spinner/Spinner'

const NavBar = () => {
    const [loading, setLoading] = useState(true); // Estado de carga
    const [itemCount, setItemCount] = useState(0); // Estado de cantidad de elementos en el carrito

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);

        // Simular cambio en la cantidad de elementos en el carrito
        setItemCount(3); // Cambia este valor según tus necesidades reales
    }, [])

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
            <div className="container-fluid ">
                <Logo />
                <a className="navbar-brand d-flex justify-content-center" href="">Bier Kurbis
                </a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/category/Rubias" className="nav-link"> Rubias         </Link>
                        <Link to="/category/Negras" className="nav-link"> Negras                        </Link>
                        <Link to="/category/Ipas" className="nav-link">IPAs                        </Link>
                        <Link to="/category/Rojas" className="nav-link">Rojas                         </Link>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {loading ? <Spinner /> : <CartWidget itemCount={itemCount} />}
                {/*ternario que carga spinner e inicializa carrito en 0  */}

            </div>
        </nav>
    )
}

export default NavBar