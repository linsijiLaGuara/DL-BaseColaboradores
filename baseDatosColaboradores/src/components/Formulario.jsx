import { useState } from "react";
import "./Formulario.css";
import Button from "react-bootstrap/Button";

const Formulario = ({ onAlert, onAgregarColaborador }) => {
  const [colaborador, setColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que todos los campos estén completos
    if (
      colaborador.nombre &&
      colaborador.correo &&
      colaborador.edad &&
      colaborador.cargo &&
      colaborador.telefono
    ) {
      // Llamar a la función para agregar el colaborador
      onAgregarColaborador(colaborador);

      // Limpiar los campos después de agregar el colaborador
      setColaborador({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
    } else {
      // Mostrar alerta si algún campo está vacío
      onAlert("Todos los campos son obligatorios");
    }
  };

  const capturaInput = (e) => {
    // Actualizar el estado según el nombre del campo
    setColaborador({
      ...colaborador,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-regist">
          <input
            type="text"
            name="nombre"
            value={colaborador.nombre}
            onChange={capturaInput}
            placeholder="Nombre"
          />
          <input
            type="text"
            name="correo"
            value={colaborador.correo}
            onChange={capturaInput}
            placeholder="Correo"
          />
          <input
            type="text"
            name="edad"
            value={colaborador.edad}
            onChange={capturaInput}
            placeholder="Edad"
          />
          <input
            type="text"
            name="cargo"
            value={colaborador.cargo}
            onChange={capturaInput}
            placeholder="Cargo"
          />
          <input
            type="text"
            name="telefono"
            value={colaborador.telefono}
            onChange={capturaInput}
            placeholder="Teléfono"
          />
          <Button variant="success" type="submit">
            Agregar colaborador
          </Button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
