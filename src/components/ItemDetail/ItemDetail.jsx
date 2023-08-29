import img from '../../img/placeholder.png'
import React from "react"
import './ItemDetail.css'

const ItemDetail = ({ detail }) => {
  return (
    <div className='d-flex justify-content-center my-5 py-5'>
      <div className=''>
        <h1>Detalles del Producto</h1>
        <img
          className="imgProductos py-3"
          src={img}
          alt={detail.nombre}
        />
        <p>Nombre: {detail.nombre}</p>
        <p>Precio: ${detail.precio}</p>
        <p>Categoría: {detail.categoria}</p>
      </div>
    </div>
  )
}

export default ItemDetail
