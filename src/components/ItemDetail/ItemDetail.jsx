import img from '../../img/placeholder.png'
import React, { useEffect, useState } from "react"
import ItemCount from '../ItemCount/ItemCount'
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
        <div>

          <h1>Detalles del Producto</h1>
          <img
            className="imgProductos py-3"
            src={img}
            alt={detail.nombre}
          />
          <div className='row'>
            <div className='col'>
              <p>Nombre: {detail.nombre}</p>
              <p>Precio: ${detail.precio}</p>
              <p>Categoría: {detail.categoria}</p>
            </div>
            <div className='col'>
              <ItemCount />
            </div>
          </div>
        </div>)}
    </div>
  )
}

export default ItemDetail
