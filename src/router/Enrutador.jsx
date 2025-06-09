import RutaProtegida from "../components/RutaProtegida";
import Login from "../pages/Login/Login";
import PanelPrincipal from "../pages/PanelPrincipal/PanelPrincipal";
import Register from "../pages/Register/Register";
import Suscripciones from "../pages/Suscripciones/Suscripciones";

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
        path: "/panel-principal/",
        element: <RutaProtegida proteger={<PanelPrincipal/>}/>,
        children: [
            {
                path: "suscripciones",
                element: <Suscripciones />
            }
        ]
    }
]