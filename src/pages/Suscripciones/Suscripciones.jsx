import { useEffect, useState } from "react";
import './Suscripciones.css'
let apiSuscripciones = 'http://localhost:3000/suscripciones'

const Suscripciones = () => {
    // Usuario logueado 
    let usuario = JSON.parse(localStorage.getItem("usuario"));

    // Declaracion de estados
    const [suscripciones, setSuscripciones] = useState([]);
    const [filtro, setFiltro] = useState("");

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


    const filtradas = suscripciones.filter((sub) =>
        sub.usuarioId === usuario.id &&
        sub.nombre.toLowerCase().includes(filtro.toLowerCase())
    );

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
                <button className="nueva">+ Nueva suscripción</button>
            </div>
            <div className="lista">
                {filtradas.map((sub) => (
                    <div key={sub.id} className="item">
                        <div>
                            <h3>{sub.nombre}</h3>
                            <p>${sub.precio} / mes</p>
                            <span className="descripcion">{sub.descripcion}</span>
                        </div>
                        <div className="acciones-item">
                            <button className="editar">Editar</button>
                            <button className="eliminar">Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Suscripciones
