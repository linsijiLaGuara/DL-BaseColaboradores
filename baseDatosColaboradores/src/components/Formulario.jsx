/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Formulario.css";
import Button from "react-bootstrap/Button";

const Formulario = ({ onAlert }) => {
    const [colaborador, setColaborador] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

    };
    const capturaInput =(e)=>{
        setColaborador(e.target.value)
    } 
    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-regist">
                    <input
                        type="text"
                        name={colaborador}
                        onChange={capturaInput}
                        placeholder="Nombre"
                    />
                    <Button variant="success" type="submit">
                        agregar colaborador
                    </Button>
                </div>
            </form>
        </>
    );
};

export default Formulario;