import './Usuario.css'
const Usuario = () => {
    // Usuario logueado 
    let usuario = JSON.parse(localStorage.getItem("usuario"));

    const formatearFecha = (fechaIso) =>
    new Date(fechaIso).toLocaleString("es-CO", {
      dateStyle: "short",
      timeStyle: "short",
    });
    return (
        <div className="perfil-usuario">
  <h2 className="titulo-seccion">Perfil de Usuario</h2>
  <div className="tarjeta-usuario">
    <div>
      <p><strong>Nombre completo:</strong> {usuario.nombres} {usuario.apellidos}</p>
      <p><strong>Usuario:</strong> {usuario.usuario}</p>
      <p><strong>Correo:</strong> <em>{usuario.correo}</em></p>
    </div>
    <div>
      <p><strong>Últimos accesos:</strong></p>
      <ul className="lista-login">
        {usuario.historialLogin.map((fecha, i) => (
              <li key={i}>{formatearFecha(fecha)}</li>
            ))}
      </ul>
    </div>
  </div>
</div>
    )
}

export default Usuario
