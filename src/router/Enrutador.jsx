import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export let Enrutador = [
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/registro",
        element: <Register />
    }
]