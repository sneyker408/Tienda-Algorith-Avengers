function validar() {

    (async () => {
        const { value: password } = await Swal.fire({
            title: '¡Departamento Restringido!',
            input: 'password',
            inputLabel: '- Validar Permisos -',
            confirmButtonText:'Verificar <i class="bi bi-person-lock"></i>',
            confirmButtonColor:'#328880',
            inputPlaceholder: 'Ingrese su contraseña',
            inputAttributes: {
                maxlength: 10,
                autocapitalize: 'off',
                autocorrect: 'off'
            }
        })
        if (password == "admin123") {

            window.location.href = "/producto/Reportes"
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
        confirmButtonText: 'Si, borrar <i class="bi bi-check2-circle"></i>',
        cancelButtonText: 'No, cancelar <i class="bi bi-x-circle"></i>',
        reverseButtons: true

    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "/producto/" + id
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
        confirmButtonText: 'Si, borrar <i class="bi bi-check2-circle"></i>',
        cancelButtonText: 'No, cancelar <i class="bi bi-x-circle"></i>',
        reverseButtons: true

    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "/producto/Reportes/" + id
        }
    })
}