import { Button, Container, Form} from "react-bootstrap";

const FormularioReceta = () => {
  return (
    <Container className="mainContainer">
    <section className="py-3">
        <h3>Formulario</h3>
        <hr />
      <Form>
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ej: Asado"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="4" controlId="validationCustom02">
            <Form.Label>Tipo</Form.Label>
            <select className="form-select">
              <option value="">Seleccione tipo</option>
              <option value="Comun">Comun</option>
              <option value="Especial">Especial</option>
              <option value="Tradicional">Tradicional</option>
              <option value="Navidad">Navidad</option>
            </select>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>


          <Form.Group md="4" controlId="validationCustom02">
            <Form.Label>Subtitulo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ej: Alto asaaaaao"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>


          <Form.Group md="3" controlId="validationCustom04">
            <Form.Label>Detalles</Form.Label>
            <Form.Control type="text" placeholder="Ej: Un asado se realiza..." required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group md="3" controlId="validationCustom05">
            <Form.Label>URL imagen</Form.Label>
            <Form.Control type="text" placeholder="Ej: img.com.ar/img12313,jpg" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>

        <Button type="submit" className="my-3">Guardar</Button>
      </Form>
    </section>
    </Container>
  );
};

export default FormularioReceta;
