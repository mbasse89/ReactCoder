import React from 'react'
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons'

const CartWidget = ({ itemCount }) => {

    
    return (
        <div className="px-5 cartWidget">
            <FontAwesomeIcon icon={faBeerMugEmpty} size="2x" />
            <p className="contadorCarrito">{itemCount}</p>
        </div>
    );
};

export default CartWidget



