import React from 'react';
import PropTypes from 'prop-types';

export const Buscador = ({ listaColaboradores, setListaColaboradores }) => {
    const handleFilterListaColaboradores = (listaColaboradoresFiltered) => {
        setFilter(listaColaboradoresFiltered);
    };

    const handleOnChange = (event) => {
        event.preventDefault();
        const { value } = event.target;
        const valueToLowerCase = value.toLowerCase();

        const listaColaboradoresFiltered = listaColaboradores.filter((user) => {
            return (
                user.nombre.toLowerCase().includes(valueToLowerCase) ||
                user.correo.toLowerCase().includes(valueToLowerCase) ||
                user.edad.toLowerCase().includes(valueToLowerCase) ||
                user.cargo.toLowerCase().includes(valueToLowerCase) ||
                user.telefono.toLowerCase().includes(valueToLowerCase)
            );
        });

        // if (!dataFiltered.length) {
        // setErrors('nO DATA fOUND');
        // }

        handleFilterListaColaboradores(listaColaboradoresFiltered);
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    onChange={(event) => handleOnChange(event)}
                />
            </div>
        </>
    );
};

Buscador.propTypes = {
    listaColaboradores: PropTypes.array.isRequired,
    setListaColaboradores: PropTypes.func.isRequired,
};