import React from 'react';
import './NavBar.css' // estilo de NabVAr
import CartWidget from './CartWidget' // importo icono de carwidget
import Logo from './logo';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
            <div className="container-fluid ">
            <Logo/>
                <a className="navbar-brand text-center" href="">Bier Kurbis
                 </a>
                 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
       

                <CartWidget/>                 {/* aca llamamos al icono para que este dentro del navbar */}

            </div>
        </nav>
    )
}

export default NavBar