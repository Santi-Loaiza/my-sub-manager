import RutaProtegida from "../components/RutaProtegida";
import Login from "../pages/Login/Login";
import PanelPrincipal from "../pages/PanelPrincipal/PanelPrincipal";
import Register from "../pages/Register/Register";

export let Enrutador = [
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/registro",
        element: <Register />
    },
    {
        path: "/panel-principal",
        element: <RutaProtegida proteger={<PanelPrincipal/>}/>
    }
]