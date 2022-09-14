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

const login = new inicioSesion(prompt('Ingrese su nombre de usuario:'), prompt('Ingrese su contraseña:'))

verificacion = 3

function iniciarSesion() {
    
    
    while(verificacion > 0) {
        
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

//Menu

function menu (){
    let apartado = parseInt(prompt(`Elegi que operacion deseas realizar: 
    1.Transferencias
    2.Comprar dolares
    3.Plazo fijo
    4.Prestamos
    5.Finalizar
    `))
    if(apartado == 1){
        enviarDinero()
    }else if(apartado == 2){
        dolares()
    } else if(apartado == 3){
        plazoFijo()
    } else if(apartado == 4){
        prestamo()
    } else if(apartado == 5){
        alert("Gracias por elegirnos!! Hasta pronto!!")
    } else { alert("ha seleccionado una opcion incorrecta")
menu()}
    
}
menu()

// transferencias

function enviarDinero() {
    
    let transferencia = new transaccion (prompt("Ingrese el nombre del destinatario"), prompt("Ingrese el cvu del destinatario"), Number(prompt("Ingrese el monto que desea enviar")), prompt("Ingrese el mensaje que quiera enviar"))
    alert(`Transferencia realizada con exito! Se ha enviado $${transferencia.monto} a ${transferencia.nombre}`)
    menu()
}


//comprar dolares


function dolares() {
    let resultado
    
    let impuestos
    let elegi = prompt(`Elegi lo que quieras hacer:
    1. Comprar dolares ingresando el monto en pesos
    2. Comprar dolares ingresando el monto en dolares
    3. Volver
    `)
    if (elegi == 1) {
            let peso = Number(prompt("Ingresa el monto en pesos"))
            resultado = peso / 240
            impuestos = peso+(peso*(75/100))
            if(resultado > 200){
                alert(`Lo siento, debido al cepo no se puede comprar mas de 200 dolares`)
            } else{
                alert(`Gracias por realizar su compra. Usted a comprado un total de ${resultado}$Usd y debido a los impuestos tuvo que pagar $${impuestos}`)
            }
        } else if (elegi == 2){
            let dolar = Number(prompt("Ingrese el monto en dolares"))
            resultado = dolar * 240
            impuestos = resultado+(resultado*(75/100))
            if(dolar > 200){
                alert(`Lo siento, debido al cepo no se puede comprar mas de 200 dolares`)
            } else{
                alert(`Gracias por realizar su compra. Usted a comprado un total de ${resultado}$Usd y debido a los impuestos tuvo que pagar $${impuestos}`)
            }
        } else if (elegi == 3) {
            menu()
        } else{
            alert("Lo siento, Elegiste una opcion incorrecta")
        }
        menu()
    }

        //Plazo fijo
        function plazoFijo(){
            let dineroIngresado = Number(prompt("Ingrese la cantidad de dinero que desea poner en plazo fijo"))
            let dineroGenerado = dineroIngresado * (65.9/100)
            let dinerTotal = dineroIngresado + dineroGenerado
            alert('Felicidades, Ingresaste' + ' ' + '$' + Math.round(dineroIngresado) + ' ' + 'y obtendra una ganancia de' + ' ' + '$' + Math.round(dineroGenerado) + '. Al finalizar los 12 meses tendra un dinero total disponible de' + ' ' + '$' + Math.round(dinerTotal) + '.')
            menu()
        }
        
        
        //Prestamos
        function prestamo(){
        let dineroPedido = Number(prompt("Ingrese la cantidad de dinero que desea pedir"))
        let meses = (Number(prompt("Ingrese la cantidad de meses que emplea para devolver el dinero")))
        interes = meses * 7.2;
        let dineroInteres = Math.round(dineroPedido * (interes/100))
        let dineroDeuda = Math.round(dineroPedido + dineroInteres)
        alert(`Gracias por confiar en nosotros! Usted ha pedido un prestamo de $${dineroPedido}, con un plazo de ${meses} meses. Este tendra un interes de $${dineroInteres} y a final del plazo usted debera pagar $${dineroDeuda}`)
        menu()
        }

    //dom
    let bienvenido = document.querySelector(".section-1__h2")
    bienvenido.innerHTML = `Bienvenido ${login.usuario}`

