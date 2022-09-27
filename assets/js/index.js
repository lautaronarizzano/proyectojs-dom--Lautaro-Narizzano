// clases
class transaccion {
    constructor(nombre, cvu, monto, mensaje) {
        this.nombre = nombre;
        this.cvu = cvu;
        this.monto = monto;
        this.mensaje = mensaje;
    }
}
class inicioSesion {
    constructor(usuario, password) {
        this.usuario = usuario
        this.password = password
    }
}
//inicio de secion


let usuarios = [
    new inicioSesion("admin", "1234"),
    new inicioSesion("omar", "manias"),
    new inicioSesion("osvaldo", "perro123"),
    new inicioSesion("agustin", "caniche")
]


verificacion = 3

function iniciarSesion() {
    while (verificacion > 0) {
        let usuarioLogueado = localStorage.getItem('usuario')

        if (usuarioLogueado) { 
            verificacion -= 3
            let bienvenido = document.querySelector("#saludo")
            usuarioLogueado = JSON.parse(usuarioLogueado)
            bienvenido.innerHTML = `Bienvenido ${usuarioLogueado.usuario} !!!`

        } else { 
            const login = new inicioSesion(prompt('Ingrese su nombre de usuario:'), prompt('Ingrese su contraseña:'))

            usuarios.forEach((usuario) => {
                if (usuario.usuario === login.usuario && usuario.password === login.password) {
                    verificacion -= 3

                    const usuarioParseado = JSON.stringify(login)
                    localStorage.setItem('usuario', usuarioParseado)

                    alert(`su cuenta ha sido iniciada con exito, Bienvenido!`)
                    let bienvenido = document.querySelector("#saludo")
                    bienvenido.innerHTML = `Bienvenido ${login.usuario} !!!`

                }
            })

            if (verificacion > 0) alert('Lo siento, el usuario o la contraseña son incorrectas, vuelve a intentarlo')
        }
    }
}

iniciarSesion()




function transferencia() {

    let inputNombre = document.querySelector("#nombre")

    let inputCvu = document.querySelector("#cvu")

    let inputDineroEnviar = document.querySelector("#dineroEnviar")

    let inputMensaje = document.querySelector("#mensaje")

    let enviarTransaccion = document.querySelector("#enviarTransaccion")

    enviarTransaccion.addEventListener('click', () => {

        let receptor = new transaccion(

            inputNombre.value,

            inputCvu.value,

            inputDineroEnviar.value,

            inputMensaje.value)

        alert(`Gracais por confiar en nosotros! se ha realizado una transferencia a ${receptor.nombre} de un monto de $${receptor.monto}`)

    })

}

transferencia()

function dolares() {

    const COTIZACION_DOLAR = 240

    const inputDolares = document.querySelector('#dolar')
    const inputPesos = document.querySelector('#peso')
    const inputImpuesto = document.querySelector('#impuestos')

    function convertirAPesos() {
        return parseInt(inputDolares.value) * 240
    }

    function convertirADolares() {
        return parseInt(inputPesos.value) / 240
    }

    function convertirAImpuestos() {
        return parseInt(inputPesos.value) + (parseInt(inputPesos.value) * (75 / 100))
    }

    inputDolares.addEventListener('keyup', () => {

        inputPesos.value = convertirAPesos()

        inputImpuesto.value = convertirAImpuestos()

    })

    inputPesos.addEventListener('keyup', () => {

        inputDolares.value = convertirADolares()

        inputImpuesto.value = convertirAImpuestos()

    })
    let inputComprarDolares = document.querySelector("#inputComprarDolares")

    inputComprarDolares.addEventListener('click', () => {
        alert(`Gracias por hacer su compra! usted compro una cantidad de ${inputDolares.value}$USD a un costo total de $${convertirAImpuestos()}`)
    })
}

dolares()

function plazoFijo() {
    const inputDinero = document.querySelector("#dinero")
    const inputMeses = document.querySelector("#meses")
    const inputTotal = document.querySelector("#total")

    const finalizarMeses = () => {
        return parseInt(inputDinero.value * (65.9 / 100))
    }

    const dineroTotal = () => {
        return parseInt(inputDinero.value) + (parseInt(inputDinero.value) * (65.9 / 100))
    }


    inputDinero.addEventListener('keyup', () => {

        inputMeses.value = Math.round(finalizarMeses())

        inputTotal.value = Math.round(dineroTotal())

    })

    const pedirPlazo = document.querySelector("#plazo")
    pedirPlazo.addEventListener('click', () => {
        alert(`Usted ha hecho un plazo fijo con exito!! usted a depositado $${inputDinero.value} y al finalizar 12 meses usted recibira $${inputMeses.value}. En total usted podra retirar al finalizar los meses una cantidad de $${inputTotal.value}`)
    })
}

plazoFijo()

function prestamo() {
    let inputPedir = document.querySelector("#dineroPedir")
    let inputInteres = document.querySelector("#dineroInteres")
    let inputDineroFinal = document.querySelector("#dineroFinal")
    const dineroInteres = () => {
        return parseInt(inputPedir.value) * (86 / 100)
    }
    const dineroFinal = () => {

        return parseInt(inputPedir.value) + (parseInt(inputPedir.value) * (86 / 100))

    }
    inputPedir.addEventListener('keyup', () => {
        inputInteres.value = dineroInteres()
    })
    inputPedir.addEventListener('keyup', () => {
        inputDineroFinal.value = dineroFinal()
    })

    let btnPrestamo = document.querySelector("#btnPrestamo")
    btnPrestamo.addEventListener('click', () => {
        alert(`Usted ha pedido un prestamo de $${inputPedir.value} con un interes de $${inputInteres.value} y un plazo final a pagar de $${inputDineroFinal.value} en 12 meses`)
    })
}

prestamo()