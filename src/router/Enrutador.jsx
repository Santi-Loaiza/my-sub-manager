import RutaProtegida from "../components/RutaProtegida";
import AgregarSuscripcion from "../pages/AgregarSuscripcion/AgregarSuscripcion";
import EditarSuscripcion from "../pages/EditarSuscripcion/EditarSuscripcion";
import Login from "../pages/Login/Login";
import PanelPrincipal from "../pages/PanelPrincipal/PanelPrincipal";
import Register from "../pages/Register/Register";
import Suscripciones from "../pages/Suscripciones/Suscripciones";
import Usuario from "../pages/Usuario/Usuario";

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
            },
            {
                path: "agregar-suscripcion",
                element: <AgregarSuscripcion />
            },
            {
                path: "editar/:id",
                element: <EditarSuscripcion />
            },
            {
                path: "usuario",
                element: <Usuario />
            }
        ]
    }
]