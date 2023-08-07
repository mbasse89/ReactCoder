import './App.css'
import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer';
import { useState } from 'react';




const App = () => {
  return (
    <div>
      <NavBar/>
      <div>
      <ItemListContainer greeting="Bienvenido a mi e-commerce" /> 
    </div>    </div>
  )
}

export default App
  
