import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Spinner } from '../Spinner/Spinner';

const ItemDetail = ({ detail }) => {
  return (
    <div className='container item-detail'>
      <h1 className='text-center'>Detalles del Producto</h1>
      {detail ? (
        <>
          <div className='row'>
            <div className='col-md-6'>
              <img className='imgProductos' src={detail.image} alt={detail.title} />
            </div>
            <div className='col-md-6 detalles'>
              <p className=''>{detail.title}</p>
              <p className=' '>Precio: ${detail.price}</p>
              <p className=' '>Categoría: {detail.categoryId}</p>
              <div className=' '>
                <ItemCount product={detail} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ItemDetail;
