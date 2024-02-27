import { Button, Container, Form} from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (receta) => {
    receta===null? alert("Carga exitosa"):alert("Error");
  };
  return (
    <Container className="mainContainer">
    <section className="py-3">
        <h3>Formulario</h3>
        <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Asado"
              {...register("titulo", {
                required: "Campo obligatorio",
                minLength: { value: 2, message: "Minimo 2 caracteres" },
                maxLength: { value: 20, message: "Maximo 30 caracteres" },
              })}
            />
            <Form.Text className="text-danger">
            {errors.titulo?.message}
          </Form.Text>
          </Form.Group>

          <Form.Group md="4" controlId="validationCustom02">
            <Form.Label>Tipo</Form.Label>
            <select className="form-select" 
              {...register("tipo", {
                required: "Selecciona un tipo",
              })}>
              <option value="">Seleccione tipo</option>
              <option value="Comun">Comun</option>
              <option value="Especial">Especial</option>
              <option value="Tradicional">Tradicional</option>
              <option value="Navidad">Navidad</option>
            </select>
            <Form.Text className="text-danger">
              {errors.tipo?.message}
            </Form.Text>
          </Form.Group>


          <Form.Group md="4" controlId="validationCustom02">
            <Form.Label>Subtitulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Alto asaaaaao"
              {...register("subtitulo", {
                required: "Campo obligatorio",
                minLength: { value: 2, message: "Minimo 2 caracteres" },
                maxLength: { value: 30, message: "Maximo 30 caracteres" },
              })}
            />
            <Form.Text className="text-danger">
            {errors.subtitulo?.message}
          </Form.Text>
          </Form.Group>

          <Form.Group md="3" controlId="validationCustom04">
            <Form.Label>Detalles</Form.Label>
            <Form.Control type="text" placeholder="Ej: Un asado se realiza..." 
            as="textarea"
            {...register("detalles", {
              required: "Los detalles de la receta es obligatoria",
              minLength: {
                value: 10,
                message: "Debe ingresar como minimo 10 caracteres",
              },
              maxLength: {
                value: 300,
                message: "Debe ingresar como maximo 300 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.detalles?.message}
          </Form.Text>
          </Form.Group>


          <Form.Group md="3" controlId="validationCustom05">
            <Form.Label>URL imagen</Form.Label>
            <Form.Control type="text" placeholder="Ej: img.com.ar/img12313,jpg" 
            {...register("img_url", {
              required: "Campo obligatorio",
              pattern: {
                value:
                  /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
                message: "debe ingresar una url valida",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.img_url?.message}
          </Form.Text>
          </Form.Group>

        <Button type="submit" className="my-3">Guardar</Button>
      </Form>
    </section>
    </Container>
  );
};

export default FormularioReceta;
