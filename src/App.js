import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './containers/ItemListContainer';

const App = () => {
    return (
            <div>
                <NavBar />
                <div>
                    <ItemListContainer greeting="Bienvenido a mi e-commerce" />
                </div>
                <Footer />
            </div>
    );
};

export default App;
