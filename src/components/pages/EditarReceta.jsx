import { Button, Form} from "react-bootstrap";

const EditarReceta = () => {
  return (
    <section className="py-3">
        <h3>Editar Receta</h3>
        <hr />
      <Form>
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
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
              placeholder="Last name"
              defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>


          <Form.Group md="3" controlId="validationCustom04">
            <Form.Label>Detalles</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group md="3" controlId="validationCustom05">
            <Form.Label>URL imagen</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>


        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>


        <Button type="submit">Submit form</Button>
      </Form>
    </section>
  );
};

export default EditarReceta;
