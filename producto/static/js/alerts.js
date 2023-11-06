function vender(id, existencias, precio) {
    (async () => {

        const { value: cantidad } = await Swal.fire({
            title: '¡Detalle de Compra!',
            input: 'number',
            text: `〖 Existencias: ${existencias} 〗 〖 Precio: $${precio} 〗`,
            inputPlaceholder: 'Cantidad requerida',
            confirmButtonText: 'Ingresar <i class="bi bi-hand-index-thumb"></i>',
            showCancelButton: true,
            cancelButtonText: 'Cancelar <i class="bi bi-x-lg"></i>'
        })

        if (cantidad == "") {

        }
        else if (cantidad > 0 && cantidad <= existencias) {

            let resul = cantidad * precio

            const { value: pago } = await Swal.fire({
                title: '¡ DETALLE DE PAGO !',
                text: `〖 Requerido: ${cantidad} 〗 〖 Cancelar: $${resul} 〗`,
                showCancelButton: true,
                cancelButtonText: 'Regresar <i class="bi bi-x-lg"></i>',
                confirmButtonText: 'Pagar <i class="bi bi-cash-coin"></i>',
                confirmButtonColor: 'green',
                cancelButtonColor: 'red',
                input: 'number',
                inputPlaceholder: 'Ingresa la cantidad de efectivo'
            })
            if (pago < resul) {
                Swal.fire({
                    icon: 'error',
                    iconColor: 'red',
                    title: '¡Error de Compra!',
                    text: '- La cantidad de dinero es menor a la solicitada -',
                    showConfirmButton: false,
                    timer: 3200
                })
            }
            else if (pago == resul) {

                window.location.href = "/producto/" + id +"/"+ cantidad  
            }
            else if (pago > resul) {
                let devolucion = pago - resul
                window.location.href = "/producto/" + id +"/"+ cantidad
            }
        }
        else if (cantidad <= 0 || cantidad > existencias) {
            Swal.fire({
                icon: 'warning',
                iconColor: '#FF3200',
                title: '¡Cantidad Incorrecta!',
                text: '- Cantidad menor o mayor a la existente -',
                showConfirmButton: false,
                timer: 3000
            })
        }
    })()
}
function validar() {

    (async () => {
        const { value: password } = await Swal.fire({
            title: '¡Departamento Restringido!',
            input: 'password',
            inputLabel: '- Validar Permisos -',
            confirmButtonText: 'Verificar <i class="bi bi-person-lock"></i>',
            confirmButtonColor: '#328880',
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
                iconColor: 'red',
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
        iconColor: '#FF3200',
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
        iconColor: '#FF3200',
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


if (cantidad <= existencias && cantidad > 0) {

    let resul = cantidad * precio

    Swal.fire({
        title: '¡ DETALLE DE PAGO !',
        text: `
        Requerido: ${cantidad}
        Pagar: $${resul}`,
        showCancelButton: true,
        cancelButtonText: 'Cancelar <i class="bi bi-x-lg"></i>',
        confirmButtonText: 'Pagar <i class="bi bi-cash-coin"></i>',
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
    })
} else {
    Swal.fire({
        icon: 'warning',
        iconColor: '#FF3200',
        title: '¡Cantidad Incorrecta!',
        text: '- Cantidad menor o mayor a la existente -',
        showConfirmButton: false,
        timer: 3000
    })
}