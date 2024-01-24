/* eslint-disable react/prop-types */
import React from "react";


const Alerta = ({message}) => {
  return (
    <>
      {message && (
        <div className={message.includes("exitoso") ? "alert-success" : "alert-danger"}>
          {message}
        </div>
      )}
    </>
  );
};

export default Alerta;