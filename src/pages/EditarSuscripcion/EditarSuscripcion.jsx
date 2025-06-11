import { ChevronLeftIcon } from "@heroicons/react/16/solid"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { alertaRedireccion } from "../../helpers/functions"
let apiSuscripciones = 'http://localhost:3000/suscripciones'

const EditarSuscripcion = () => {
    // Declaracion de estados
    const [categoria, setCategoria] = useState("")
    const [nombre, setNombre] = useState("")
    const [precio, setPrecio] = useState("")
    const [frecuencia, setFrecuencia] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [fechaInicio, setFechaInicio] = useState("")
    const [renovacionAutomatica, setRenovacionAutomatica] = useState()
    const [estado, setEstado] = useState("")

    let navigate = useNavigate()
    let { id } = useParams()

    // Obtener la suscripcion correspondiente
    function getSuscripcionId() {
        fetch(apiSuscripciones + "/" + id)
            .then((response) => response.json())
            .then((data) => {
                setNombre(data.nombre)
                setPrecio(data.precio)
                setFrecuencia(data.frecuencia)
                setDescripcion(data.descripcion)
                setCategoria(data.categoria)
                setFechaInicio(data.fechaInicio)
                setRenovacionAutomatica(data.renovacionAutomatica)
                setEstado(data.estado)
            })
    }
    useEffect(() => {
        getSuscripcionId();
    }, []);

    function editarSuscripcion() {
        let nuevaSuscripcion = {
            nombre: nombre,
            precio: precio,
            frecuencia: frecuencia,
            descripcion: descripcion,
            categoria: categoria,
            fechaInicio: fechaInicio,
            renovacionAutomatica: renovacionAutomatica,
            estado: estado
        };
        fetch(apiSuscripciones + "/" + id, {
            method: "PATCH",
            body: JSON.stringify(nuevaSuscripcion),
        })
            .then(() => {
                alertaRedireccion(
                    navigate,
                    "Suscripcion editado correctamente",
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
                <p className="title">Edita tu suscripcion de {nombre}</p>
                <p className="message">Ingresa los datos a editar correspondientes de la suscripción. </p>
                <div className='flex select-container'>
                    <label className='label-select'>Estado de la suscripcion</label>
                    <select
                        className="input"
                        onChange={(e) => setEstado(e.target.value)}
                        value={estado}>
                        <option value="" disabled>Selecciona un estado de la suscripcion</option>
                        <option value="activa">Activa</option>
                        <option value="inactiva">Inactiva</option>
                        <option value="vencida">Vencida</option>
                        <option value="pendiente">Pendiente</option>
                    </select>
                </div>
                <div className='flex select-container'>
                    <label className='label-select'>Categoría de suscripción</label>
                    <select
                        className="input"
                        onChange={(e) => setCategoria(e.target.value)}
                        value={categoria}>
                        <option value="" disabled>Selecciona una categoría</option>
                        <option value="Streaming">Streaming</option>
                        <option value="Educación">Educación</option>
                        <option value="Productividad">Productividad</option>
                        <option value="Software">Software</option>
                        <option value="Noticias">Noticias</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Diseño">Diseño</option>
                        <option value="Entretenimiento">Entretenimiento</option>
                        <option value="Otros">Otros</option>
                    </select>
                </div>
                <div className="flex">
                    <label>
                        <input className="input" type="text"
                            onChange={(e) => setNombre(e.target.value)}
                            value={nombre} />
                        <span>Nombre</span>
                    </label>

                    <label>
                        <input className="input" type="number"
                            onChange={(e) => setPrecio(e.target.value)}
                            value={precio} />
                        <span>Precio</span>
                    </label>
                </div>
                <div className='flex select-container'>
                    <label className='label-select'>Frecuencia de pago</label>
                    <select
                        className="input"
                        onChange={(e) => setFrecuencia(e.target.value)}
                        value={frecuencia}>
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
                        onChange={(e) => setDescripcion(e.target.value)}
                        value={descripcion} />
                    <span>Descripcion</span>
                </label>
                <label>
                    <input className="input" type="date"
                        onChange={(e) => setFechaInicio(e.target.value)}
                        value={fechaInicio} />
                    <span>Fecha Inicio</span>
                </label>
                <label className='container-checkbox'>
                    <input className="checkbox ui-checkbox" type="checkbox"
                        onChange={(e) => setRenovacionAutomatica(e.target.value)} />
                    <span>Renovacion Automatica</span>
                </label>
                <button type="button" className="submit" onClick={editarSuscripcion} >Actualizar suscripcion</button>
            </form>
        </div>
    )
}

export default EditarSuscripcion
