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
        ? productosData.filter((product) => product.categoria.toLowerCase() === id.toLowerCase())
        : productosData;

      setProductos(filteredProducts)
    } catch (error) {
      console.error('Error al cargar los productos:', error)
    }
  }

  useEffect(() => {
    console.log("Filtrando por categoría:", id)
    getProductos() // Llama a getProductos cuando el componente se monta
  }, [id])

  return (
    <div className="  my-5 productoContenedor">
      <div className="product-list-container">
        {productos.map((product) => (
          
          <div key={product.id} className="  py-5 px-3 card">
            <img
              className="productoImagen"
              src={ img}  
              alt={product.nombre}
            />
            <h3>{product.nombre}</h3>
            <p>Precio: ${product.precio}</p>
            <p>Categoria: {product.categoria}</p>
            
            <Link className='btn btn-outline-dark ' to={`/item/${product.id}`}>Ver más</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemListContainer