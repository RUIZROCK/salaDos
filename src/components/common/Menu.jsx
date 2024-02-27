import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-dark py-3">
        <Container>
          <Navbar.Brand className="text-light display-5" href="#home">SalaDos</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-end w-100">
              <NavLink end className="text-light nav-link" href="#home">Inicio</NavLink>
              <NavLink end className="text-light nav-link" to="/Administracion">Administracion</NavLink>
              <NavLink end className="text-light nav-link" href="#link">Registrate!</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
