import { useState } from 'react';
import Listado from './components/Listado';
import { BaseColaboradores } from './BaseColaborades'
import './App.css';

function App() {
  const [listaNombres, setListaNombres] = useState(BaseColaboradores);

  return (
    <>
      <Listado listaColaboradores={listaNombres} />
    </>
  );
}

export default App;