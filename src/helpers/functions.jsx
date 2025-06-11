import Swal from "sweetalert2";

export function alertaRedireccion(redireccion, titulo, mensaje, icono, url) {
    let timerInterval;
    Swal.fire({
        title: titulo,
        html: mensaje,
        timer: 2000,
        icon: icono,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 150);
        },
        willClose: () => {
            clearInterval(timerInterval);
            redireccion(url);
        },
    });
}

export function alertaError(titulo, mensaje, icono) {
    Swal.fire({
        title: titulo,
        text: mensaje,
        icon: icono,
    });
}

export function generarToken() {
    return (
        Math.random().toString(36).substring(2, 10) +
        Math.random().toString(36).substring(2, 10) +
        Math.random().toString(36).substring(2, 10)
    );
}

export function alertaConfirmacion(id, apiSuscripciones, getSuscripciones) {
  Swal.fire({
    title: "¿Estas seguro?",
    text: "No se puede reviertir la acción!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, Eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(apiSuscripciones + "/" + id, {
        method: "DELETE"
      }).then(() => {
        getSuscripciones()
      }).catch((error) => {
        console.log(error)
      })
      Swal.fire({
        title: "Eliminado",
        text: "La suscripcion ha sido eliminada",
        icon: "success"
      });
    }
  });
}