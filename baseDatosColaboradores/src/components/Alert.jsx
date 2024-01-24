import React from "react";
import Alert from "react-bootstrap/Alert";

const Alerta = ({ mensaje, color }) => {
  const textColorClass = color === "success" ? "text-success" : "text-danger";

  return (
    <>
      {mensaje && (
        <Alert variant={color} className={textColorClass}>
          {mensaje}
        </Alert>
      )}
    </>
  );
};

export default Alerta;
