import { Outlet } from "react-router-dom"
import './Contenido.css'

const Contenido = () => {
  return (
    <main className="main-container-contenido">
        <Outlet />
    </main>
  )
}

export default Contenido
