import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { Spinner } from '../Spinner/Spinner'
import "./ItemDetailContainer.css"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/client"

 


export default function ItemDetailContainer() {
  const [detail, setDetail] = useState({});
  const { itemId } = useParams();
  const [loading, setLoading] = useState(true); //  

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const docRef = doc(db, 'products', itemId);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          setDetail({ id: itemId, ...docSnapshot.data() });
          setLoading(false); // 
        } else {
          console.error("Producto no encontrado");
          setLoading(false); // 
        }
      } catch (error) {
        console.error("Error al cargar los detalles:", error);
        setLoading(false);  
      }
    };

    fetchItemDetails();
  }, [itemId]);

  
  useEffect(() => {
    setTimeout(() => {
        setLoading(false);
    }, 500);
}, [])

  return (
    <div className="body">
      {loading ? ( // Si está cargando, muestra el spinner
          <Spinner />
        ) : (
      <ItemDetail detail={detail} />
        )}
    </div>
  );
}