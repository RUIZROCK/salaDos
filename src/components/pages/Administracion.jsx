import { Table } from "react-bootstrap";

const Administracion = () => {
  return (
    <section className="py-3">
      <div className="row d-flex justify-content-between py-2 ">
        <div className="col-12 col-md-3">
          <h3>Administracion</h3>
        </div>
        <div className="col-12 col-md-1">
          <a className="btn btn-primary" href="">
            Nuevo
          </a>
        </div>
      </div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th className="col-1">#</th>
              <th className="col-5">Receta</th>
              <th className="col-4">URL Img</th>
              <th className="col-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Locro!</td>
              <td><img src="" alt="" /></td>
              <td>
                <div className="d-flex justify-content-around">
                <a className="btn btn-success" href="">
                  Editar
                </a>{" "}
                <a className="btn btn-danger" href="">
                  Borrar
                </a>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
    </section>
  );
};

export default Administracion;
