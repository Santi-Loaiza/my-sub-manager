import { RectangleGroupIcon } from "@heroicons/react/16/solid"
import './Login.css'
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { alertaError, alertaRedireccion, generarToken } from "../../helpers/functions"
let apiUsuarios = "http://localhost:3000/usuarios"

const Login = () => {
    //Declaracion de estados
    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [usuarios, setUsuarios] = useState([])

    //Declaracion del navigate
    const navigate = useNavigate()

    //Obtener los usuarios del API
    function getUsuarios() {
        fetch(apiUsuarios)
            .then((response) => response.json())
            .then((data) => setUsuarios(data))
            .catch((error) => console.log(error));
    }
    useEffect(() => {
        getUsuarios();
    }, []);

    //Buscar usuario segun los valores del formulario
    function buscarUsuario() {
        let usuarioEncontrado = usuarios.find(
            (item) =>
                usuario == item.usuario && contraseña == item.contraseña
        );
        return usuarioEncontrado;
    }
    //Iniciar sesion con redireccionamiento
    function iniciarSesion() {
        if (buscarUsuario()) {
            let tokenAcceso = generarToken();
            localStorage.setItem("token", tokenAcceso);
            localStorage.setItem("usuario", JSON.stringify(buscarUsuario()));

            // Hora de inicio actual
            const horaInicio = new Date().toISOString();

            // Obtener historial actual o crear uno si no existe
            const historialActual = buscarUsuario().historialLogin || [];

            // Crear nuevo historial con la hora actual agregada
            const nuevoHistorial = [...historialActual, horaInicio];
 
            // Actualizar el usuario en la API con el nuevo historial
            fetch(`${apiUsuarios}/${buscarUsuario().id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    historialLogin: nuevoHistorial
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log("Historial de login actualizado:", data)});
                    alertaRedireccion(
                        navigate,
                        "Bienvenido " + buscarUsuario().nombres + " " + buscarUsuario().apellidos,
                        "En breves segundos será redireccionado al panel principal",
                        "success",
                        "/panel-principal/suscripciones"
                    );
                } else {
                    alertaError("Error", "Usuario y/o contraseña incorrectos", "error");
                }
    }


        return (
            <main className="main-login">
                <section className="container-login">
                    <div className="logo-container">
                        <RectangleGroupIcon className="icon-sub-manager-login" />
                        <h1 className="my-sub-manager-title">My SubManager</h1>
                    </div>
                    <div className="form-container">
                        <form className="form">
                            <p className="title">Inicia sesión </p>
                            <p className="message">Ingresa los datos correspondientes para comenzar a utilizar My SubManager. </p>
                            <label>
                                <input className="input" type="text"
                                    onChange={(e) => setUsuario(e.target.value)} />
                                <span>Usuario</span>
                            </label>
                            <label>
                                <input className="input" type="password"
                                    onChange={(e) => setContraseña(e.target.value)} />
                                <span>Contraseña</span>
                            </label>
                            <button type="button" className="submit" onClick={iniciarSesion}>Iniciar sesion</button>
                            <p className="signin">¿ Aún no tienes cuenta ? <Link to="/registro">Crea una</Link> </p>
                        </form>
                    </div>
                </section>
            </main>
        )
    }

    export default Login
