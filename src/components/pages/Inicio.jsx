import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { leerRecetasAPI } from "../helpers/queries";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";


const Inicio = () => {
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
        <>
            <h1> Las Mejores Recetas para Dos</h1>
            <Container className="mainContainer display-3">
                <img
                    className="banner"
                    src="https://media.istockphoto.com/id/646714512/es/foto/joven-pareja-en-el-amor-en-la-cocina.jpg?s=1024x1024&w=is&k=20&c=yRVQac3IDAkJ56y84gQgDkqs96fzi1IS4vKOU3cvxxA="
                />
            </Container>
            <h2 className="h2"> Cocinar siempre es mejor de a 2</h2>
            <Container >


                <Row className="justify-content-between">
                    {
                        recetas.slice(0, 3).map((receta) =>
                            <Card key={receta.id} style={{ width: '18rem' }}>
                                <Card.Img  className="img-comida" variant="top" src={receta.img_url} />
                                <Card.Body>
                                    <Card.Title>{receta.titulo}</Card.Title>

                                    <Card.Text>
                                        {receta.subtitulo}
                                    </Card.Text>

                                    <Link
                                        className="btn btn-success mx-1"
                                        end
                                        to={`/DetalleReceta/${receta.id}`}
                                    >
                                        <Button variant="success">Ver más</Button>
                                    </Link>
                                    
                                </Card.Body>
                            </Card>
                        )
                    }
                </Row>
                <Row className="justify-content-between py-3">
                    {
                        recetas.slice(3, 6).map((receta) =>
                            <Card key={receta.id} style={{ width: '18rem' }}>
                                <Card.Img className="img-comida" variant="top" src={receta.img_url} />
                                <Card.Body>
                                    <Card.Title>{receta.titulo}</Card.Title>

                                    <Card.Text>
                                        {receta.subtitulo}
                                    </Card.Text>
                                    <Link
                                        className="btn btn-success mx-1"
                                        end
                                        to={`/DetalleReceta/${receta.id}`}
                                    >
                                        <Button variant="success">Ver más</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        )
                    }
                </Row>

                

            </Container>
        </>

    );
};


export default Inicio;