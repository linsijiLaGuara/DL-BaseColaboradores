/* eslint-disable react/prop-types */
import React from "react";
import Alert from "react-bootstrap/Alert";
import "./Alert.css";

const Alerta = ({ mensaje, color }) => {
  const textColorClass = color === "success" ? "text-success" : "text-danger";

  return (
    <>
      {mensaje && (
        <Alert variant={color} className={`custom-alert ${textColorClass}`}>
          {mensaje}
        </Alert>
      )}
    </>
  );
};

export default Alerta;
