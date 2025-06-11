import { useEffect, useState } from "react";
import './Suscripciones.css'
import { Link } from "react-router-dom";
import { alertaConfirmacion } from "../../helpers/functions";
let apiSuscripciones = 'http://localhost:3000/suscripciones'

const Suscripciones = () => {
    // Usuario logueado 
    let usuario = JSON.parse(localStorage.getItem("usuario"));

    // Declaracion de estados
    const [suscripciones, setSuscripciones] = useState([]);
    const [filtro, setFiltro] = useState("");
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

    // Obtener las suscripciones por medio del API
    function getSuscripciones() {
        fetch(apiSuscripciones)
            .then((response) => response.json())
            .then((data) => setSuscripciones(data))
            .catch((error) => console.log(error));
    }
    useEffect(() => {
        getSuscripciones();
    }, []);

    // Mostrar suscripciones segun el valor de busqueda
    const filtradas = suscripciones.filter((sub) =>
        sub.usuarioId === usuario.id &&
        sub.nombre.toLowerCase().includes(filtro.toLowerCase()) &&
        (categoriaSeleccionada === "" || sub.categoria === categoriaSeleccionada)
    );

    // Obtener categorías de las suscripciones del usuario
    const categorias = Array.from(new Set(
        suscripciones
            .filter(sub => sub.usuarioId === usuario.id)
            .map(sub => sub.categoria)
    ));

    function eliminarSuscripcion(id){
        alertaConfirmacion(id, apiSuscripciones, getSuscripciones)
    }

    return (
        <div className="submanager-container">
            <div className="submanager-acciones">
                <input
                    className="buscar"
                    type="text"
                    placeholder="🔍 Buscar suscripciones"
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                />
                <Link to="/panel-principal/agregar-suscripcion" >
                    <button className="nueva">+ Nueva suscripción</button>
                </Link>
            </div>
             <div className="filtros-categorias">
                <button
                    className={categoriaSeleccionada === "" ? "activo" : ""}
                    onClick={() => setCategoriaSeleccionada("")}
                >
                    Todas
                </button>
                {categorias.map((cat) => (
                    <button
                        key={cat}
                        className={categoriaSeleccionada === cat ? "activo" : ""}
                        onClick={() => setCategoriaSeleccionada(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="lista">
                {filtradas.map((sub) => (
                    <div key={sub.id} className="item">
                        <div>
                            <h3>{sub.nombre}</h3>
                            <p>${sub.precio} / {sub.frecuencia}</p>
                            <span className="descripcion">{sub.descripcion}</span>
                        </div>
                        <div className="acciones-item">
                            <Link to={"/panel-principal/editar/" + sub.id}><button className="editar">Editar</button></Link>
                            <button className="eliminar" onClick={() => {eliminarSuscripcion(sub.id)}}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Suscripciones
