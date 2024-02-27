import { Container, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Administracion = () => {
  return (
    <Container className="mainContainer">
    <section className="py-3">
      <div className="row d-flex justify-content-between py-2 ">
        <div className="col-12 col-md-3">
          <h3>Administracion</h3>
        </div>
        <div className="col-12 col-md-1">
          <NavLink className="btn btn-primary" end
                  to="/FormularioReceta">
          <i className="bi bi-file-earmark-plus-fill"></i>
          </NavLink>
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
                  
                <NavLink className="btn btn-success mx-1" end
                  to="/DetalleReceta">
                <i className="bi bi-eye-fill"></i>
                </NavLink>
                <NavLink className="btn btn-warning mx-1" end
                  to="/FormularioReceta">
                <i className="bi bi-pencil-square"></i>
                </NavLink>
                <NavLink className="btn btn-danger mx-1" href="">
                <i className="bi bi-trash3-fill"></i>
                </NavLink>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
    </section>
    </Container>
  );
};

export default Administracion;
