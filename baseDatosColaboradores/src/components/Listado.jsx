/* eslint-disable react/prop-types */
import Table from "react-bootstrap/Table";
import "./Listado.css";

function Listado({ listaColaboradores }) {
  return (
    <Table className="table-custom" striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre </th>
          <th>Correo </th>
          <th>Edad </th>
          <th>Cargo </th>
          <th>Teléfono </th>
        </tr>
      </thead>
      <tbody>
        {listaColaboradores.map((colaborador) => (
          <tr key={colaborador.id}>
            <td>{colaborador.id}</td>

            <td> {colaborador.nombre} </td>

            <td>{colaborador.correo} </td>

            <td>{colaborador.edad} </td>

            <td>{colaborador.cargo} </td>

            <td>{colaborador.telefono} </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Listado;
