import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ItemListContainer.css'
import img from '../img/placeholder.png'
import { Spinner } from '../components/Spinner/Spinner'

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true); // Estado de carga
  
  useEffect(() => {
    setTimeout(() => {
        setLoading(false);
    }, 500);
}, [])

  const { id } = useParams()
  const getProductos = async () => {
    try {
      const response = await fetch('/data/productos.json')
      const productosData = await response.json()

      // Filtrar productos por categoría si se proporciona una categoría
      const filteredProducts = id
        ? productosData.filter((product) => product.categoria.toLowerCase() === id.toLowerCase())
        : productosData

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
    <div className="my-5 productoContenedor">
      {/* <h1 className="greetingMensaje"> {greeting} </h1> */}
      <div className="product-list-container">
        {loading ? ( // Si está cargando, muestra el spinner
          <Spinner />
        ) : (
          // Si no está cargando, muestra los productos
          productos.map((product) => (
            <div key={product.id} className="py-5 px-3 card">
              <img
                className="productoImagen"
                src={img}  
                alt={product.nombre}
              />
              <h3>{product.nombre}</h3>
              <p>Precio: ${product.precio}</p>
              <p>Categoría: {product.categoria}</p>
              <Link className='btn btn-outline-dark ' to={`/item/${product.id}`}>Ver más</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemListContainer