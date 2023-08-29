import img from '../../img/placeholder.png'
import React, { useEffect, useState } from "react"

 import './ItemDetail.css'
import { Spinner } from '../Spinner/Spinner'


const ItemDetail = ({ detail }) => {
  const [loading, setLoading] = useState(true); // Estado de carga
  
  useEffect(() => {
    setTimeout(() => {
        setLoading(false);
    }, 500);
}, [])


  return (
    <div className='d-flex justify-content-center my-5 py-5 '>
       {loading ? ( // Si está cargando, muestra el spinner
          <Spinner />
        ) : (
      <div className=' '>
        
        <h1>Detalles del Producto</h1>
        <img
          className="imgProductos py-3"
          src={img}
          alt={detail.nombre}
        />
        <p>Nombre: {detail.nombre}</p>
        <p>Precio: ${detail.precio}</p>
        <p>Categoría: {detail.categoria}</p>
      </div>)}
    </div>
  )
}

export default ItemDetail
