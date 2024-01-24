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
        if (
            colaborador.nombre &&
            colaborador.correo &&
            colaborador.edad &&
            colaborador.cargo &&
            colaborador.telefono
        ) {
            onAgregarColaborador(colaborador);

            // Limpiar los campos después de agregar el colaborador
            setColaborador({
                nombre: "",
                correo: "",
                edad: "",
                cargo: "",
                telefono: "",
            });
        } else if (!validateCorreo(colaborador.correo)) {
            onAlert("Ingrese un correo electrónico válido.");

        } else if (nombre === "" ||
            correo === "" ||
            edad === "" ||
            cargo === "" ||
            telefono === "") {
            onAlert("Debe completar todos los campos.");


        }
        else {
            onAlert("¡se agrego un nuevo colaborador!");
        }
    };


    const validateCorreo = (correo) => {
        // Expresión regular para validar el formato del correo electrónico
        const expresionRegularCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return expresionRegularCorreo.test(correo);
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
