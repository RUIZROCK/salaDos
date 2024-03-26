import { Container } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { leerRecetasAPI } from "../helpers/queries";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const DetalleReceta = () => {
  const { id } = useParams();

  const [receta, setReceta] = useState([]);

  useEffect(() => {
    obtenerReceta();
    console.log("receta", receta);
  }, []);

  const obtenerReceta = async () => {
    const respuesta = await leerRecetasAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setReceta(datos.find((receta) => receta._id == id));
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
      <section>
        <div className="row d-flex justify-content-between py-3">
          <div className="col-12 col-md-4">
            <img className="img-fluid" src={receta.img_url} alt="" />
          </div>
          <div className="col-12 col-md-8">
            <h3>{receta.titulo}</h3>
            <hr />
            <p>
              {receta.subtitulo}
              <br />
              <br />
              <strong>Tipo:</strong>{receta.tipo}
              <br />
              <br />
              {receta.detalle}
            </p>
            <NavLink className="my-3 btn btn-primary" end to="/Administracion">
              Volver
            </NavLink>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default DetalleReceta;
