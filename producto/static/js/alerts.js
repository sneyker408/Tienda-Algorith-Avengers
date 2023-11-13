//Funcion para realizar la venta de productos, cada vez que se haga una compra 
//se actualizara las existencias del producto
function vender(id, existencias, precio) {
    (async () => {

        const { value: cantidad } = await Swal.fire({
            title: '¡Detalle de Compra!',
            input: 'number',
            text: `〖 Existencias: ${existencias} 〗 〖 Precio: $${precio} 〗`,
            inputPlaceholder: 'Cantidad requerida',
            confirmButtonText: 'Ingresar <i class="bi bi-hand-index-thumb"></i>',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
            cancelButtonText: 'Cancelar <i class="bi bi-x-lg"></i>'
        })

        if (cantidad == "") {

        }
        //Validar que la cantidad ingresa sea mayor a 0 o menor e igual a la exitencias
        else if (cantidad > 0 && cantidad <= existencias) {

            let resul = cantidad * precio

            const { value: pago } = await Swal.fire({
                title: '¡ DETALLE DE PAGO !',
                text: `〖 Requerido: ${cantidad} 〗 〖 Cancelar: $${resul} 〗`,
                showCancelButton: true,
                cancelButtonText: 'Anular <i class="bi bi-x-lg"></i>',
                confirmButtonText: 'Pagar <i class="bi bi-cash-coin"></i>',
                confirmButtonColor: 'green',
                cancelButtonColor: 'red',
                input: 'number',
                inputPlaceholder: 'Ingresa la cantidad de efectivo'
            })
            //Validar si el pago es menor a la solicita mandarle un error
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
            //Si el pago es igual al resultado, la compra se realizara exitosamente
            else if (pago == resul) {

                Swal.fire({
                    icon: 'success',
                    iconColor: 'green',
                    title: '¡Compra Realizada EXITOSAMENTE!',
                    text: '- Gracias por su compra -',
                    showConfirmButton: true,
                    confirmButtonText: 'Volver <i class="bi bi-house-check"></i>',
                    confirmButtonColor: '#2471A3'

                }).then((result) => {
                    if (result.isConfirmed) {

                        window.location.href = "/producto/" + id + "/" + cantidad
                    }
                })
            }
            //SI el pago es mayor al solicitado se le hara la devolucion del dinero restante y se realizara al compra
            else if (pago > resul) {
                let devolucion = pago - resul
                Swal.fire({
                    icon: 'success',
                    title: '¡Compra Realizada EXITOSAMENTE!',
                    text: `Su cambio es: $${devolucion} |  Gracias por su compra `,
                    showConfirmButton: true,
                    confirmButtonText: 'Volver <i class="bi bi-house-check"></i>',
                    confirmButtonColor: '#2471A3',

                }).then((result) => {
                    if (result.isConfirmed) {

                        window.location.href = "/producto/" + id + "/" + cantidad
                    }
                })
            }
        }
        // si la cantidad que solita es menor o mayor a la exitencias le dara un error
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

//Funcion para validar el departamento de mensajeria
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
                timer: 1000
            })
        }
    })()
}
// Funcion para eliminar un producto
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

//Funcion para eliminar un mensaje
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
