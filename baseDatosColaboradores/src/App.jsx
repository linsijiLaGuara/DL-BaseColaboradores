import React, { useState } from 'react';
import Listado from './components/Listado';
import Formulario from './components/Formulario'
import Alerta from './components/Alert';
import { BaseColaboradores } from './BaseColaborades';
import './App.css';

function App() {
  const [listaNombres, setListaNombres] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState(null);

  const agregarColaborador = (nuevoColaborador) => {
    setListaNombres([...listaNombres, { ...nuevoColaborador, id: listaNombres.length + 1 }]);
    setAlerta(null); 
  };

  const mostrarAlerta = (mensaje) => {
    setAlerta(mensaje);
  };

  return (
    <>
      {alerta && <Alerta mensaje={alerta} />} {/* Mostrar la alerta si existe */}
      <Formulario onAlert={mostrarAlerta} onAgregarColaborador={agregarColaborador} />
      <Listado listaColaboradores={listaNombres} />
    </>
  );
}
export default App;
