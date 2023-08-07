import React, { useState } from 'react';
import './ItemListContainer.css'


const ItemListContainer = ({ greeting }) => {

  return (
    <div>
              <h1 className='greetingMensaje'> {greeting} </h1>

      <div className='fondoDiv bg-light'>

        <p className='text-center'>Lista de productos </p>

        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Rubias
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Negras
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Ipas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Rojas
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};




export default ItemListContainer