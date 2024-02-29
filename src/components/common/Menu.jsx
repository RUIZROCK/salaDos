import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo1 from '../../assets/logo1.png'

const Menu = () => {
  return (
    <header>
      <Navbar expand="lg" className="menu text-light p-2">
        <Container>
          <Navbar.Brand href="/"><img className='logo' src={logo1} alt="Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-end w-100">
              <NavLink end className="text-light nav-link" to="/">Inicio</NavLink>
              <NavLink end className="text-light nav-link" to="/Administracion">Administración</NavLink>
              <NavLink end className="text-light nav-link" to="/registrate">Registrate</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
