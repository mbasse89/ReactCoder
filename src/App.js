import './App.css';
import React from 'react';
import Footer from './components/Footer/Footer';
import ItemListContainer from './containers/ItemListContainer';
import Router from './Router/Router';

const App = () => {
    return (
            <div>
                <Router/> 
                {/* llamo a mi navbar */}
        
                <Footer />
            </div>
    );
};

export default App;
