import { Container } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { leerRecetasAPI  } from "../helpers/queries";
import Swal from "sweetalert2";
import { useState,useEffect } from "react";

const DetalleReceta = () => {
  const { id } = useParams();

  const [receta, setReceta] = useState([]);

    useEffect(() => {
        obtenerReceta();
        console.log('receta', receta)
    }, []);

  const obtenerReceta = async () => {
    const respuesta = await leerRecetasAPI();
    if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setReceta(datos.find((receta) => receta.id == id))
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
          <img src={receta.img_url} alt="" />
        </div>
        <div className="col-12 col-md-8">
          <h3>Detalles del producto: {receta.titulo}</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos quos
            consectetur quibusdam repellendus atque, tempore deleniti
            voluptatibus, distinctio maiores esse aperiam accusantium!
            Perferendis ab est doloremque temporibus corrupti laboriosam quos
            cupiditate dicta hic repellendus. Beatae sit molestias expedita
            sapiente fugiat enim harum odit ullam? Vitae optio quas delectus
            accusantium, sunt adipisci nemo sit, eveniet aut perspiciatis cum
            obcaecati ea tenetur odio excepturi dicta recusandae neque ex
            quidem. Eius, nam eum laboriosam officia, neque quam beatae facilis
            nobis illo dolorem esse assumenda veniam sit omnis est magnam modi.
            Optio ducimus quod ut saepe dolorem iste a pariatur qui possimus
            ipsam quisquam minima porro facilis aperiam, temporibus dolorum
            asperiores ea ad! Iure facere at magni esse animi similique
            molestias placeat soluta error, voluptates aspernatur inventore
            sequi voluptas exercitationem doloremque earum laboriosam, saepe
            provident explicabo amet rerum. Ipsum, reprehenderit, doloribus
            laborum quaerat quasi deleniti quas vel adipisci placeat, natus et
            repudiandae repellendus?
          </p>
          <NavLink className="my-3 btn btn-primary" end
                  to="/Administracion">Volver</NavLink>
        </div>
      </div>
    </section>
    </Container>
  );
};

export default DetalleReceta;
