import { RectangleGroupIcon } from "@heroicons/react/16/solid"
import './NavBar.css'
import { useNavigate } from "react-router-dom"
import { alertaRedireccion } from "../../helpers/functions"


const NavBar = () => {
    let navigate = useNavigate()
    function cerrarSesion() {
        localStorage.removeItem("token")
        localStorage.removeItem("usuario")
        alertaRedireccion(navigate, "Sesion finalizada", "En Breves segundos cerraremos la sesión", "info", "/")
    }
    return (
        <nav>
            <section className="logo-container-nav">
                <RectangleGroupIcon className="icon-sub-manager-panel-principal" />
                <h1 className="my-sub-manager-title">My SubManager</h1>
            </section>
            <section className="container-buttons-nav">
                <ul>
                    <li><button className="usuario-button">Usuario</button></li>
                    <li>
                        <button className="button type1" type="button" onClick={cerrarSesion}>
                            <span className="btn-txt">Cerrar sesion</span>
                        </button>
                    </li>
                </ul>

            </section>
        </nav>
    )
}

export default NavBar
