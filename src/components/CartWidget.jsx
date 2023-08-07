import React from 'react';
import './CartWidget.css'
// loibreria para cartwidget 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (

        <div className="px-5 cartWidget">
            <FontAwesomeIcon icon={faBeerMugEmpty} size="2x" />
            <p className="contadorCarrito">0</p>
        </div>

    );
};

export default CartWidget;