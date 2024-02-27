import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { Route, Routes } from "react-router"
import Menu from "./components/common/Menu"
import Administracion from "./components/pages/Administracion"

function App() {

  return (
    <>
    <Menu></Menu>
    
    <Routes>
      <Route exact path='/Administracion' element={<Administracion></Administracion>}></Route>
    </Routes>


    <footer className="bg-dark text-light">
      <p className='text-center'>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
