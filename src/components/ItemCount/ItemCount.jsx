import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = () => {

    // 
    const [cantidad, setCantidad] = useState(1);

            const restarProducto = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const sumarProducto = () => {
        setCantidad(cantidad + 1)
    }



    return (
        <div className=''>
            <div className="contenedorContador  my-3">
                <button className="  btn btn-outline-warning " onClick={restarProducto}>-</button>
                <p className='text-center'>{cantidad}</p>
                <button className="  btn btn-outline-warning" onClick={sumarProducto}>+</button>
            </div>
            <div className='d-flex justify-content-around'>
                <button className="   btn btn-outline-warning  botonAgregar "   >Agregar </button>
            </div>
        </div>
    )
}

export default ItemCount

