import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ItemListContainer.css'
import img from '../img/placeholder.png'
 
const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const { id } = useParams()
  const getProductos = async () => {
    try {
      const response = await fetch('/data/productos.json')
      const productosData = await response.json()

      // Filtrar productos por categoría si se proporciona una categoría
      const filteredProducts = id
        ? productosData.filter((product) => product.categoria === id)
        : productosData;

      setProductos(filteredProducts)
    } catch (error) {
      console.error('Error al cargar los productos:', error)
    }
  };

  useEffect(() => {
    getProductos() // Llama a getProductos cuando el componente se monta
  }, [id])

  return (
    <div className="row my-5">
      <h1 className="greetingMensaje"> {greeting} </h1>

      <div className="products-list contenedor mx-5">
        {productos.map((product) => (
          <div key={product.id} className="gap-3">
            <img
              className="imgProductos"
              src={ img}  
              alt={product.nombre}
            />
            <h3>{product.nombre}</h3>
            <p>Precio: ${product.precio}</p>
            {/* <button className='btn '>Ver más</button> */}
            {/* <Link to={`/item/${product.id}`}>Ver más</Link> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemListContainer