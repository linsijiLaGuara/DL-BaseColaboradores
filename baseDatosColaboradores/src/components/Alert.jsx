import React from "react";
import Alert from "react-bootstrap/Alert";

const Alerta = ({ mensaje, color }) => {
  const textColorAlert = color === "success" ? "text-success" : "text-danger";

  return (
    <>
      {mensaje && (
        <Alert variant={color} className={textColorAlert}>
          {mensaje}
        </Alert>
      )}
    </>
  );
};

export default Alerta;
