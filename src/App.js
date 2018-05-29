import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Formulario from './Components/Formulario'
import Tabla from './Components/Tabla'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Estadisticas</h1>
        <Formulario/>
        <Tabla/>
      </div>
    );
  }
}

export default App;
