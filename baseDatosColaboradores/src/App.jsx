import React, { useState } from "react";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Alerta from "./components/Alert";
import { Buscador } from "./components/Buscador";
import { BaseColaboradores } from "./BaseColaborades";
import "./App.css";


function App() {
  const [listaNombres, setListaNombres] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState(null);
  const [colorAlerta, setColorAlerta] = useState(null);

  const agregarColaborador = (nuevoColaborador) => {
    setListaNombres([
      ...listaNombres,
      { ...nuevoColaborador, id: listaNombres.length + 1 },
    ]);
  };

  const mostrarAlerta = (mensaje, color) => {
    setMensaje(mensaje);
    setColorAlerta(color);
  };

  const handleFilterListaColaboradores = (listaColaboradoresFiltered) => {
    setListaNombres(listaColaboradoresFiltered);
  };

  return (
    <div className="app-container">
      <Buscador
        listaColaboradores={listaNombres}
        setListaColaboradores={handleFilterListaColaboradores}
      />
      <div className="orden">
        <Formulario
          onAlert={mostrarAlerta}
          onAgregarColaborador={agregarColaborador}
        />
        <Listado listaColaboradores={listaNombres} />
      </div>
      <Alerta mensaje={mensaje} color={colorAlerta} />
    </div>
  );
}

export default App;
