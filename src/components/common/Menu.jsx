import { Container, Nav, Navbar } from "react-bootstrap";

const Menu = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-dark py-3">
        <Container>
          <Navbar.Brand className="text-light display-5" href="#home">SalaDos</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-end w-100">
              <Nav.Link className="text-light" href="#home">Inicio</Nav.Link>
              <Nav.Link className="text-light" href="#link">Administracion</Nav.Link>
              <Nav.Link className="text-light" href="#link">Registrate!</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
