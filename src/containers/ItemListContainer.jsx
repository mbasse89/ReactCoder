import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ItemListContainer.css';
 import { Spinner } from '../components/Spinner/Spinner';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/client';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para controlar la carga de datos
  const { id: categoryName } = useParams(); // Captura la categoría desde la URL

  useEffect(() => {
    // Simular una carga de datos con un retraso
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  // Función para obtener los productos desde Firebase
  const getProducts = async () => {
    const ref = collection(db, 'products'); // Referencia a la colección 'products' en Firebase
    const data = await getDocs(ref); // Obtener documentos de la colección
    const dataFiltrada = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })); // Mapear datos y agregar IDs
    console.log(dataFiltrada);

    // Filtrar productos según la categoría seleccionada o mostrar todos los productos
    const filteredProducts = categoryName
      ? dataFiltrada.filter((product) => product.categoryId === categoryName)
      : dataFiltrada;

    setProducts(filteredProducts); // Actualizar el estado con los productos filtrados
  };

  useEffect(() => {
    getProducts(); // Llamar a la función para obtener productos cuando cambie la categoría
  }, [categoryName]);

  return (
    <div className="my-5 productoContenedor">
      <div className="product-list-container">
        {loading ? ( // Si está cargando, muestra el spinner
          <Spinner />
        ) : (
          // Si no está cargando, muestra los productos
          productos.map((product) => (
            <div key={product.id} className="py-5 px-3 card productos">
              <img className="productoImagen" src={product.image} alt={product.nombre} />
              <h3>{product.title}</h3>
              <p>Precio: ${product.price}</p>
              <p>Categoría: {product.categoryId}</p>
              <Link className="btn btn-outline-dark" to={`/item/${product.id}`}>
                Ver más
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
