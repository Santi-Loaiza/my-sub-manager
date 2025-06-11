import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import './AgregarSuscripcion.css'
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { alertaRedireccion } from '../../helpers/functions'
let apiSuscripciones = 'http://localhost:3000/suscripciones'

const AgregarSuscripcion = () => {
    // Declaracion de estados
    const [categoria, setCategoria] = useState("")
    const [nombre, setNombre] = useState("")
    const [precio, setPrecio] = useState("")
    const [frecuencia, setFrecuencia] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [fechaInicio, setFechaInicio] = useState("")
    const [renovacionAutomatica, setRenovacionAutomatica] = useState()

    let navigate = useNavigate()

    // Registrar suscripcion
    function registrarSuscripcion() {
        let usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));
        let nuevaSuscripcion = {
            usuarioId: usuarioLogueado.id,
            nombre: nombre,
            precio: precio,
            frecuencia: frecuencia,
            descripcion: descripcion,
            categoria: categoria,
            fechaInicio: fechaInicio,
            renovacionAutomatica: renovacionAutomatica,
            estado: "activa"
        };
        fetch(apiSuscripciones, {
            method: "POST",
            body: JSON.stringify(nuevaSuscripcion),
        })
            .then(() => {
                alertaRedireccion(
                    navigate,
                    "Suscripcion registrada correctamente",
                    "En breves segundos será redireccionado",
                    "success",
                    "/panel-principal/suscripciones"
                );
            })
            .catch((error) => console.log(error));
    }

    return (
        <div className="container-agregar-form">
            <section className="back-icon-agregar">
                <Link to="/panel-principal/suscripciones"><ChevronLeftIcon /></Link>
            </section>
            <form className="form">
                <p className="title">Registra tu nueva suscripcion ! </p>
                <p className="message">Ingresa los datos correspondientes de la suscripción. </p>
                <div className='flex select-container'>
                    <label className='label-select'>Categoría de suscripción</label>
                    <select
                        className="input"
                        onChange={(e) => setCategoria(e.target.value)} >
                        <option value="" disabled>Selecciona una categoría</option>
                        <option value="Streaming">Streaming</option>
                        <option value="Educación">Educación</option>
                        <option value="Productividad">Productividad</option>
                        <option value="Software">Software</option>
                        <option value="Noticias">Noticias</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Entretenimiento">Entretenimiento</option>
                        <option value="Otros">Otros</option>
                    </select>
                </div>
                <div className="flex">
                    <label>
                        <input className="input" type="text"
                            onChange={(e) => setNombre(e.target.value)} />
                        <span>Nombre</span>
                    </label>

                    <label>
                        <input className="input" type="number"
                            onChange={(e) => setPrecio(e.target.value)} />
                        <span>Precio</span>
                    </label>
                </div>
                                <div className='flex select-container'>
                    <label className='label-select'>Frecuencia de pago</label>
                    <select
                        className="input"
                        onChange={(e) => setFrecuencia(e.target.value)} >
                        <option value="" disabled>Selecciona un periodo de pago</option>
                        <option value="mensual">Mensual</option>
                        <option value="anual">Anual</option>
                        <option value="semestral">Semestral</option>
                        <option value="trimestral">Trimestral</option>
                        <option value="bimestral">Bimestral</option>
                    </select>
                </div>
                <label>
                    <input className="input" type="text"
                        onChange={(e) => setDescripcion(e.target.value)} />
                    <span>Descripcion</span>
                </label>
                <label>
                    <input className="input" type="date"
                        onChange={(e) => setFechaInicio(e.target.value)} />
                    <span>Fecha Inicio</span>
                </label>
                <label className='container-checkbox'>
                    <input className="checkbox ui-checkbox" type="checkbox"
                        onChange={(e) => setRenovacionAutomatica(e.target.value)} />
                    <span>Renovacion Automatica</span>
                </label>
                <button type="button" className="submit" onClick={registrarSuscripcion} >Registrar</button>
            </form>
        </div>
    )
}

export default AgregarSuscripcion
