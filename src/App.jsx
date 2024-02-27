import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap'
import './App.css'
import { Menu } from "react-bootstrap/lib/Dropdown"

function App() {

  return (
    <>
    <Menu></Menu>
    <Container className='mainContainer'></Container>
    <footer className="bg-dark text-light">
      <p className='text-center'>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
