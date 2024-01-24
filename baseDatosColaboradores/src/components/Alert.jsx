/* eslint-disable react/prop-types */
import React from "react";
import Alert from "react-bootstrap/Alert";

const Alerta = ({ mensaje, color }) => {
  return (
    <>
      {mensaje && (
        <Alert variant={color}>
          {mensaje}
        </Alert>
      )}
    </>
  );
};

export default Alerta;