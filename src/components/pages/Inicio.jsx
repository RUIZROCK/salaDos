import { Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Inicio = () => {
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
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the content.
                                </Card.Text>
                                <Button variant="primary">Ver Receta</Button>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the content.
                                </Card.Text>
                                <Button variant="primary">Ver Receta</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the content.
                                </Card.Text>
                                <Button variant="primary">Ver Receta</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row className="justify-content-between py-3">

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the content.
                                </Card.Text>
                                <Button variant="primary">Ver Receta</Button>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the content.
                                </Card.Text>
                                <Button variant="primary">Ver Receta</Button>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the content.
                                </Card.Text>
                                <Button variant="primary">Ver Receta</Button>
                            </Card.Body>
                        </Card>
                    </Row>

            </Container>
        </>

    );
};


export default Inicio;