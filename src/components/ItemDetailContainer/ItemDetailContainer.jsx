import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

export default function ItemDetailContainer() {
  const [detail, setDetail] = useState({})
  const { itemId } = useParams()//  

  useEffect(() => { 
    const fetchItemDetails = async () => {
      try {
        // obtengo los detalles del producto desde el archivo JSON local
        const response = await fetch('/data/productos.json')
        const productosData = await response.json()

        // Encuentra el producto correspondiente según el 'itemId'
        const selectedItem = productosData.find(product => product.id === parseInt(itemId))

        if (selectedItem) {
          setDetail(selectedItem)
        } else {
          console.error("Producto no encontrado")
        }
      } catch (error) {
        console.error("Error al cargar los detalles:", error)
      }
    }

    fetchItemDetails()
  }, [itemId])

  return (
    <div className="">
      <ItemDetail detail={detail} />
    </div>
  );
}