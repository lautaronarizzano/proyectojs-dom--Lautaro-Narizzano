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


let usuarioLogueado


verificacion = 3

function iniciarSesion() {
    while(verificacion > 0) {
        const login = new inicioSesion(prompt('Ingrese su nombre de usuario:'), prompt('Ingrese su contraseña:'))

        usuarios.forEach((usuario) => {
            if (usuario.usuario === login.usuario && usuario.password === login.password) {
            usuarioLogueado = login
            verificacion -= 3
            alert(`su cunta ha sido iniciada con exito, Bienvenido!`)
        }
    }
    )
    if (!usuarioLogueado) alert('Lo siento, el usuario o la contraseña son incorrectas, vuelve a intentarlo')
    
}
}

iniciarSesion()
let nombre = prompt("Ingrese su nombre")

//Menu

// function menu (){
//     let apartado = parseInt(prompt(`Elegi que operacion deseas realizar: 
//     1.Transferencias
//     2.Comprar dolares
//     3.Plazo fijo
//     4.Prestamos
//     5.Finalizar
//     `))
//     if(apartado == 1){
//         enviarDinero()
//     }else if(apartado == 2){
//         dolares()
//     } else if(apartado == 3){
//         plazoFijo()
//     } else if(apartado == 4){
//         prestamo()
//     } else if(apartado == 5){
//         alert("Gracias por elegirnos!! Hasta pronto!!")
//     } else { alert("ha seleccionado una opcion incorrecta")
// menu()}
    
// }
// menu()

// transferencias

// function enviarDinero() {
    
//     let transferencia = new transaccion (prompt("Ingrese el nombre del destinatario"), prompt("Ingrese el cvu del destinatario"), Number(prompt("Ingrese el monto que desea enviar")), prompt("Ingrese el mensaje que quiera enviar"))
//     alert(`Transferencia realizada con exito! Se ha enviado $${transferencia.monto} a ${transferencia.nombre}`)
//     menu()
// }


//comprar dolares


// function dolares() {
//     let resultado
    
//     let impuestos
//     let elegi = prompt(`Elegi lo que quieras hacer:
//     1. Comprar dolares ingresando el monto en pesos
//     2. Comprar dolares ingresando el monto en dolares
//     3. Volver
//     `)
//     if (elegi == 1) {
//             let peso = Number(prompt("Ingresa el monto en pesos"))
//             resultado = peso / 240
//             impuestos = peso+(peso*(75/100))
//             if(resultado > 200){
//                 alert(`Lo siento, debido al cepo no se puede comprar mas de 200 dolares`)
//             } else{
//                 alert(`Gracias por realizar su compra. Usted a comprado un total de ${resultado}$Usd y debido a los impuestos tuvo que pagar $${impuestos}`)
//             }
//         } else if (elegi == 2){
//             let dolar = Number(prompt("Ingrese el monto en dolares"))
//             resultado = dolar * 240
//             impuestos = resultado+(resultado*(75/100))
//             if(dolar > 200){
//                 alert(`Lo siento, debido al cepo no se puede comprar mas de 200 dolares`)
//             } else{
//                 alert(`Gracias por realizar su compra. Usted a comprado un total de ${resultado}$Usd y debido a los impuestos tuvo que pagar $${impuestos}`)
//             }
//         } else if (elegi == 3) {
//             menu()
//         } else{
//             alert("Lo siento, Elegiste una opcion incorrecta")
//         }
//         menu()
//     }

        // //Plazo fijo
        // function plazoFijo(){
        //     let dineroIngresado = Number(prompt("Ingrese la cantidad de dinero que desea poner en plazo fijo"))
        //     let dineroGenerado = dineroIngresado * (65.9/100)
        //     let dinerTotal = dineroIngresado + dineroGenerado
        //     alert('Felicidades, Ingresaste' + ' ' + '$' + Math.round(dineroIngresado) + ' ' + 'y obtendra una ganancia de' + ' ' + '$' + Math.round(dineroGenerado) + '. Al finalizar los 12 meses tendra un dinero total disponible de' + ' ' + '$' + Math.round(dinerTotal) + '.')
        //     menu()
        // }
        
        
        // //Prestamos
        // function prestamo(){
        // let dineroPedido = Number(prompt("Ingrese la cantidad de dinero que desea pedir"))
        // let meses = (Number(prompt("Ingrese la cantidad de meses que emplea para devolver el dinero")))
        // interes = meses * 7.2;
        // let dineroInteres = Math.round(dineroPedido * (interes/100))
        // let dineroDeuda = Math.round(dineroPedido + dineroInteres)
        // alert(`Gracias por confiar en nosotros! Usted ha pedido un prestamo de $${dineroPedido}, con un plazo de ${meses} meses. Este tendra un interes de $${dineroInteres} y a final del plazo usted debera pagar $${dineroDeuda}`)
        // menu()
        // }

    //dom
    let bienvenido = document.querySelector(".section-1__h2")
    bienvenido.innerHTML = `Bienvenido ${nombre}!!!`

// function transferencia (){
//     let inputNombre = document.querySelector("#nombre")
//     let inputCvu = document.querySelector("#cvu")
//     let inputDineroEnviar = document.querySelector("#dineroEnviar")
//     let inputMensaje = document.querySelector("#mensaje")

//     let receptor = new transaccion (inputNombre.value, inputCvu.value, inputDineroEnviar.value, inputMensaje.value)

//     let enviarTransaccion = document.querySelector("#enviarTransaccion")
//     enviarTransaccion.addEventListener('click', () => {
//         alert(`Gracais por confiar en nosotros! se ha realizado una transferencia a ${receptor.nombre} de un monto de ${receptor.monto}`)
//     })

// }
// transferencia ()
function dolares () {

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
        return parseInt(inputPesos.value) + (parseInt(inputPesos.value)*(75/100))
    }
    
    inputDolares.addEventListener('keyup', () => {
        inputPesos.value = convertirAPesos()
    })
    
    inputPesos.addEventListener('keyup', () => {
        inputDolares.value = convertirADolares()
    })
    
    inputImpuesto.addEventListener('keyup', () => {
        inputImpuesto.value = convertirAImpuestos()
    })
    let inputComprarDolares = document.querySelector("#inputComprarDolares")

    inputComprarDolares.addEventListener('click', () => {
        alert(`Gracias por hacer su compra! usted compro una cantidad de ${inputDolares.value}$USD a un costo total de $${convertirAImpuestos()}`)
    })
}

dolares()

function plazoFijo () {
    const inputDinero = document.querySelector("#dinero")
    const inputMeses = document.querySelector("#meses")
    const inputTotal = document.querySelector("#total")

    const finalizarMeses = () => {
        return parseInt(inputDinero.value * (65.9/100))
    }

    const dineroTotal = () => {
        return parseInt(inputDinero.value) + (parseInt(inputDinero.value) * (65.9/100))
    }

    inputDinero.addEventListener('keyup', () => {
        inputMeses.value = Math.round(finalizarMeses())
    })

    inputTotal.addEventListener('keyup', () => {
        inputTotal.value = Math.round(dineroTotal())
    })

    const pedirPlazo = document.querySelector("#plazo")
    pedirPlazo.addEventListener('click', () => {
        alert(`Usted ha hecho un plazo fijo con exito!! usted a depositado $${inputDinero.value} y al finalizar 12 meses usted recibira $${inputMeses.value}. En total usted podra retirar al finalizar los meses una cantidad de $${inputTotal.value}`)
    })
}

plazoFijo()

function prestamo () {
    let inputPedir = document.querySelector("#dineroPedir")
    let inputInteres = document.querySelector("#dineroInteres")
    let inputDineroFinal = document.querySelector("#dineroFinal")
    const dineroInteres = () => {
        return parseInt(inputPedir.value) * (86/100)
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
