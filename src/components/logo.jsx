import React from 'react';
import logoImage from '../img/logo2.png';
import './logo.css'



const Logo = () => {
  return (
    <div>
      <img className=' mx-3 logo' src={logoImage} alt="Logo de la empresa" />
    </div>
  );
}


export default Logo