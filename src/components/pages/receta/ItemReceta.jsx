import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarRecetaAPI, leerRecetasAPI } from "../../helpers/queries";
import { Button } from "react-bootstrap";

const ItemReceta = ({ receta, setRecetas }) => {

    const borrarReceta = () => {
        Swal.fire({
          title: "¿Esta seguro de eliminar la receta?",
          text: "No se puede revertir este paso",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Borrar",
          cancelButtonText: "Cancelar",
        }).then(async (result) => {
          if (result.isConfirmed) {
            //agregar la logica correspondiente para borrar el producto en la api
            const respuesta = await borrarRecetaAPI(receta._id);
            if (respuesta.status === 200) {
              Swal.fire({
                title: "Producto eliminado",
                text: `El producto "${receta.titulo}" fue eliminado correctamente`,
                icon: "success",
              });
              //actualizar la tabla del admin
              const respuestaRecetas = await leerRecetasAPI();
              if (respuestaRecetas.status === 200) {
                const recetasRestantes = await respuestaRecetas.json();
                setRecetas(recetasRestantes);
              } else {
                Swal.fire({
                  title: "Ocurrio un error",
                  text: `No se pudo listar los productos`,
                  icon: "error",
                });
              }
            } else {
              Swal.fire({
                title: "Ocurrio un error",
                text: `El producto "${receta.titulo}" no fue eliminado. Intente esta operación en unos minutos`,
                icon: "error",
              });
            }
          }
        });
      };


    return (
        <tr>
              <td>{receta._id}</td>
              <td>{receta.titulo}</td>
              <td>
              <img
                    src={receta.img_url}
                    className="img-thumbnail"
                    alt={receta.titulo}
                ></img>
              </td>
              <td>
                <div className="d-flex justify-content-around">
                  <Link
                    className="btn btn-success mx-1"
                    end
                    to={`/DetalleReceta/${receta._id}`}
                  >
                    <i className="bi bi-eye-fill"></i>
                  </Link>
                  <Link
                    className="btn btn-warning mx-1"
                    end
                    to={'/FormularioReceta/editar/'+ receta._id}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                  <Button className="btn btn-danger mx-1" onClick={borrarReceta}>
                    <i className="bi bi-trash3-fill"></i>
                  </Button>
                </div>
              </td>
            </tr>
    );
};

export default ItemReceta;