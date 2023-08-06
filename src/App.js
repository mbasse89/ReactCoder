import './App.css'
import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';




const App = () => {
  return (
    <div>
      <NavBar/>
      <h1>Contenido principal</h1>
      <ItemListContainer/>
    </div>
  )
}

export default App
  
