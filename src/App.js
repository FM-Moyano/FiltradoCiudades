import React, { useState } from 'react';
import './App.css';
 
function App() {
 
  const ciudades = ['Cordoba', 'Sevilla', 'Cadiz', 'Malaga',
    'Almeria', 'Jaen', 'Huelva'];
 
  //filtro de busqueda teniendo en cuenta el valor del input y que no sea case sensitive
  const [filtro, setFiltro] = useState('');
  const [ciudadesFiltradas, setCiudadesFiltradas] = useState(ciudades);

  return (
    <div className="App">
      <h1>Filtrado de ciudades</h1>
      <input type="text" value={filtro} onChange={(e) => {
        setFiltro(e.target.value);
        setCiudadesFiltradas(ciudades.filter(ciudad => ciudad.toLowerCase().includes(e.target.value.toLowerCase())));
      }
      } />
      <ul>
        {ciudadesFiltradas.map((ciudad, index) => <li key={index}>{ciudad}</li>)}
      </ul>
    </div>
  );

}
 
export default App;
