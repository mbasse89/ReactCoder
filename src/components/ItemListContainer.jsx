import React, { useState } from 'react';
import './ItemListContainer'
 

const ItemListContainer = () =>{
    const [listaProductos, setListaProductos] = useState ([])

    return(
        <div>
            <ul >
                <p>Lista Productos</p>
                    <li >Productos</li>
            </ul>
        </div>
    )
}


export default ItemListContainer