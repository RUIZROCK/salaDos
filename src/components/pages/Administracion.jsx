import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { leerRecetasAPI } from "../helpers/queries";
import { useEffect, useState } from "react";
import ItemReceta from "./Receta/ItemReceta";

const Administracion = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    obtenerRecetas();
  }, []);

  const obtenerRecetas = async () => {
    const respuesta = await leerRecetasAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setRecetas(datos);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: `Intenta esta operación en unos minutos.`,
        icon: "error",
      });
    }
  };

  return (
    <Container className="mainContainer">
      <section className="py-3">
        <div className="row d-flex justify-content-between py-2 ">
          <div className="col-12 col-md-3">
            <h3>Administracion</h3>
          </div>
          <div className="col-12 col-md-1">
            <Link
              className="btn btn-primary"
              end
              to="/FormularioReceta/nuevo"
            >
              <i className="bi bi-file-earmark-plus-fill"></i>
            </Link>
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
            {
              recetas.map((receta)=> <ItemReceta key={receta.id} receta={receta} setReceta={setRecetas}></ItemReceta>)
            }
          </tbody>
        </Table>
      </section>
    </Container>
  );
};

export default Administracion;
