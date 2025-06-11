import { RectangleGroupIcon } from '@heroicons/react/16/solid'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { alertaError, alertaRedireccion } from '../../helpers/functions'
let apiUsuarios = "http://localhost:3000/usuarios"
const Register = () => {
    //Declaracion de estados
    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [usuarios, setUsuarios] = useState([])
    const [nombres, setNombres] = useState([])
    const [apellidos, setApellidos] = useState([])
    const [correo, setCorreo] = useState("")

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

    function registrarUsuario() {
        if (!buscarUsuario()) {
            let nuevoUsuario = {
                nombres: nombres,
                apellidos: apellidos,
                usuario: usuario,
                contraseña: contraseña,
                correo: correo
            };
            fetch(apiUsuarios, {
                method: "POST",
                body: JSON.stringify(nuevoUsuario),
            }).then(() => {
                getUsuarios();
            }).catch((error) => console.log(error))
            alertaRedireccion(
                navigate,
                "El usuario registrado correctamente",
                "En breves segundos será redireccionado al login",
                "success",
                "/"
            );
            let horaInicio = new Date();
            console.log(horaInicio);
            // setHoraLogin(horaInicio)
            // console.log(getHoraLogin);
        } else {
            alertaError("Error", "Usuario ya existe en la base de datos", "error");
        }
    }

    return (
        <main className="main-register">
            <section className="container-register">
                <div className="logo-container">
                    <RectangleGroupIcon className="icon-sub-manager-register" />
                    <h1 className="my-sub-manager-title">My SubManager</h1>
                </div>
                <div className="form-container">
                    <form className="form">
                        <p className="title">Registrate </p>
                        <p className="message">Ingresa los datos correspondientes para crear tu cuenta de My SubManager. </p>
                        <div className="flex">
                            <label>
                                <input className="input" type="text"
                                    onChange={(e) => setNombres(e.target.value)} />
                                <span>Nombres</span>
                            </label>

                            <label>
                                <input className="input" type="text"
                                    onChange={(e) => setApellidos(e.target.value)} />
                                <span>Apellidos</span>
                            </label>
                        </div>
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
                        <label>
                            <input className="input" type="email"
                                onChange={(e) => setCorreo(e.target.value)} />
                            <span>Correo</span>
                        </label>
                        <button type="button" className="submit" onClick={registrarUsuario} >Registrar</button>
                        <p className="signin">¿ Ya tienes cuenta ? <Link to="/">Ingresa aqui</Link> </p>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Register
