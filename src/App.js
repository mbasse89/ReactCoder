import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    const [contador, setContador] = useState(0)
    const [cargando, setCargando] = useState(false)
  const [inputValor, setInputValor] = useState(0)
    
    const sumar = () => {
      setContador(contador + 1)
    }
  
    const restar = () => {
      setContador(contador - 1)
    }
  
    const limpiar = () =>{
        setContador (0)
    }

      // Ejercicio:
    // 1) Sumar un boton de restart // FACIL
  
    return (
      <div className="App">
        <header className="App-header">
          <p>Contador: {contador}</p>
          <div className='contador-container'>
            <button className='btn' onClick={restar} >-</button>
            <button className='btn' onClick={sumar} >+</button>
            <button className='btn' onClick={limpiar}> Limpiar    </button>
            <input onChange={input}>
          </div>
  
  
        </header>
      </div>
    );
  }
  
  export default App;