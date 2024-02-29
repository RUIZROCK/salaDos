import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css";
import './App.css'
import { Route, Routes } from "react-router"
import Menu from "./components/common/Menu"
import Administracion from "./components/pages/Administracion"
import DetalleReceta from "./components/pages/DetalleReceta"
import FormularioReceta from "./components/pages/FormularioReceta"
import Footer from "./components/common/Footer";
import { BrowserRouter } from "react-router-dom"
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404";

function App() {

  return (
    <>
    
      <BrowserRouter>
        <Menu></Menu>
      
        <Routes>
          <Route exact path='/' element={ <Inicio></Inicio>}></Route>
          <Route exact path='/Administracion' element={<Administracion></Administracion>}></Route>
          <Route exact path='/DetalleReceta/:id' element={<DetalleReceta></DetalleReceta>}></Route>
          <Route exact path='/FormularioReceta/nuevo' element={<FormularioReceta editar={false} titulo="Nueva Receta" ></FormularioReceta>}></Route>
          <Route exact path='/FormularioReceta/editar/:id' element={<FormularioReceta editar={true} titulo="Editar Receta"></FormularioReceta>}></Route>
          <Route path='*' element={ <Error404 /> }></Route>
        </Routes>

        <Footer></Footer>
        
      </BrowserRouter>
    </>
  )
}

export default App
