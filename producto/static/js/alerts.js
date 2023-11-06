function validar() {

    (async () => {
        const { value: password } = await Swal.fire({
            title: '¡Departamento Restringido!',
            input: 'password',
            inputLabel: '- Validar Permisos -',
            confirmButtonText:'Verificar',
            inputPlaceholder: 'Ingrese su contraseña',
            inputAttributes: {
                maxlength: 10,
                autocapitalize: 'off',
                autocorrect: 'off'
            }
        })
        if (password == "admin123") {

            window.location.href = "/contacto/recibidos"
        }
        else {
            Swal.fire({
                icon: 'error',
                iconColor:'red',
                title: 'Error de Autenticación',
                text: '- Contraseña Incorrecta -',
                showConfirmButton: false,
                timer: 1750
            })
        }
    })()
}
function eliminarProducto(id) {
    Swal.fire({
        title: '¿Deseas Eliminar El Producto?',
        text: "¡No podras revertir esta acción!",
        icon: 'warning',
        iconColor:'#E7590D90',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar',
        cancelButtonText: 'No, cancelar',
        reverseButtons: true

    }).then((result) => {
        if (result.isConfirmed) {
     
            window.location.href = "eliminar/" + id
          
        }
      })
}

function eliminarReporte(id) {
    Swal.fire({
        title: '¿Deseas Eliminar El Mensaje?',
        text: "¡No podras revertir esta acción!",
        icon: 'warning',
        iconColor:'#E7590D90',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar',
        cancelButtonText: 'No, cancelar',
        reverseButtons: true

    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "/contacto/recibidos/" + id
        }
    })
}