import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css";
import './App.css'
import { Route, Routes } from "react-router"
import Menu from "./components/common/Menu"
import Administracion from "./components/pages/Administracion"
import DetalleReceta from "./components/pages/DetalleReceta"
import FormularioReceta from "./components/pages/FormularioReceta"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
    
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
      <Route exact path='/Administracion' element={<Administracion></Administracion>}></Route>
      <Route exact path='/DetalleReceta' element={<DetalleReceta></DetalleReceta>}></Route>
      <Route exact path='/FormularioReceta/nuevo' element={<FormularioReceta editar={false} titulo="Nueva Receta" ></FormularioReceta>}></Route>
      <Route exact path='/FormularioReceta/editar/:id' element={<FormularioReceta editar={true} titulo="Editar Receta"></FormularioReceta>}></Route>
    </Routes>
    <footer className="bg-dark text-light">
      <p className='text-center'>&copy; Todos los derechos reservados</p>
    </footer>
    
    </BrowserRouter>
    </>
  )
}

export default App
