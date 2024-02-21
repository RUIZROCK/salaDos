import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap'
import './App.css'

function App() {

  return (
    <>
    <header className="bg-dark text-light"> 
      <h1 className='text-center'>Titulo</h1>
    </header>
    <Container className='mainContainer'></Container>
    <footer className="bg-dark text-light">
      <p className='text-center'>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
