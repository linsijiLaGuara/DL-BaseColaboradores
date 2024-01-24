import React, { useState } from "react";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Alerta from "./components/Alert";
import { BaseColaboradores } from "./BaseColaborades";
import "./App.css";

function App() {
  const [listaNombres, setListaNombres] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState(null);
  const [colorAlerta, setColorAlerta] = useState(null);

  const agregarColaborador = (nuevoColaborador) => {
    setListaNombres([...listaNombres, { ...nuevoColaborador, id: listaNombres.length + 1 }]);
    setMensaje("¡Se agregó un nuevo colaborador exitosamente!");
    setColorAlerta(color);
  };

  const mostrarAlerta = (mensaje, color) => {
    setMensaje(mensaje);
    setColorAlerta(color);
  };

  return (
    <>
      <Alerta mensaje={mensaje} color={colorAlerta} />
      <Formulario onAlert={mostrarAlerta} onAgregarColaborador={agregarColaborador} />
      <Listado listaColaboradores={listaNombres} />
    </>
  );
}

export default App;