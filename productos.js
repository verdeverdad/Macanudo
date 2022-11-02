var comprado = []




function calculoSubTotal() {

    let cantidad = parseInt(document.getElementsByClassName("cantidad").value);
    let precio = parseInt(document.getElementById("precio").innerHTML);

    subTotal = cantidad * precio;

    document.getElementById("totalSub").innerHTML = subTotal

    totalSub();
    envio();
    calculoTotal();
}

function totalSub() {
    total = 0
    let sub = document.getElementsByClassName("subtotal");
    for (let i = 0; i < sub.length; i++) {
        total += parseInt(sub[i].innerHTML);

    }
    document.getElementById("totalSub").innerHTML = total
}

function envio() {
    let total1 = parseInt(document.getElementById("totalSub").innerHTML);
    total = 0

    let premium = document.getElementById("premium").checked;
    //console.log(premium)
    let express = document.getElementById("express").checked;
    let standard = document.getElementById("standard").checked;
    if (premium == true) {
        total = total1 * 15 / 100;
    }
    if (express == true) {
        total = total1 * 7 / 100;
    }
    if (standard == true) {
        total = total1 * 5 / 100;
    }

    document.getElementById("envio").innerHTML = total
    calculoTotal();
}


function calculoTotal() {
    total = 0
    let st = parseInt(document.getElementById("totalSub").innerHTML);
    let envio = parseInt(document.getElementById("envio").innerHTML);

    total = st + envio;
    document.getElementById("total").innerHTML = total

}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CARRITO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            comprado = resultObj.data.articles;

            mostrarCarrito(comprado);

        }
    });
});

/*let form = document.getElementById("datosEnvio");
let pago = document.getElementById("pago");
var camposCompletos = document.getElementsByClassName("form-control");
form.addEventListener("submit", function (event) {
    for (let i = 0; i < camposCompletos.length; i++) {
        if (camposCompletos[i].value != undefined) {
            pago.style.display = "inline-block";
        }
    }
});*/

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("datosEnvio").addEventListener('submit', validarFormulario);
});

function validarFormulario() {
    event.preventDefault();
    let metodo = document.getElementById("metodo").checked;
    let retiro = document.getElementById("retiro").checked;
    if (metodo == false && retiro == false) {
        alert('No has eseleccionado ningun método de envío');
        return;
    }
    if (metodo == true) {
        let fname = document.getElementById("fname").value;
        if (fname.length == 0) {
            alert("Debes completar tu nombre");
            return;
        }
        let emailenvio = document.getElementById("emailenvio").value;
        if (emailenvio.length == 0) {
            alert('Debes confirmr tu email');
            return;
        }
        let adr = document.getElementById("adr").value;
        if (adr.length == 0) {
            alert('No has proporcionado una dirección de envio');
            return;
        }
        let numpuerta = document.getElementById("numpuerta").value;
        if (numpuerta.length == 0) {
            alert('Agrega mas detalles  tu dirección');
            return;
        }
        let city = document.getElementById("city").value;
        if (city.length == 0) {
            alert('Proporciona una ciudad');
            return;
        }
        let departamento = document.getElementById("dpto").value;
        if (departamento.length == 0) {
            alert('Debes seleccionar un departamento');
            return;
        }
        let pais = document.getElementById("pais").value;
        if (pais.length == 0) {
            alert('Debes seleccionar un país');
            return;
        } let numcontacto = document.getElementById("numcontacto").value;
        if (numcontacto.length == 0) {
            alert('Confirma tu número de contacto');
            return;
        }
        let premium = document.getElementById("premium").checked;
        let express = document.getElementById("express").checked;
        let standard = document.getElementById("standard").checked;
        if (premium == false && express == false && standard == false) {
            alert('Confirma un tipo de envío');
            return;
        }

        let pago = document.getElementById("pago");
        pago.style.display = "inline-block";
    }
    if (retiro) {
            pago.style.display = "inline-block";
            /* localStorage.setItem("adr", JSON.stringify({ adr: adr }));
             localStorage.setItem("numpuerta", JSON.stringify({ numpuerta: numpuerta }));
             localStorage.setItem("city", JSON.stringify({ city: city }));
             localStorage.setItem("numcontacto", JSON.stringify({ numcontacto: numcontacto }));*/
        
    }
}

function validarPago() {
    event.preventDefault();
    let transferencia = document.getElementById("transferencia").checked;
    let terminos = document.getElementById("terminos").checked;
    let tj = document.getElementById("tj").checked;

    if (transferencia == false && tj == false) {
        alert('No has eseleccionado ningun método de pago');
        return;
    }
    if (transferencia == true) {
        let ccnum = document.getElementById("ccnum").value;
        if (ccnum.length == 0) {
            alert("Debes completar el número de transferencia");
            return;
        }
        if (terminos == false) {
            alert("Debes leer los términos y condiciones");
            return;
        }
        else (alert("felicitaciones"))
    }
    if (tj == true) {
        let ccnumtj = document.getElementById("ccnumtj").value;
        if (ccnumtj.length == 0) {
            alert("Debes completar el número de tarjeta");
            return;
        } let mestj = document.getElementById("mestj").value;
        if (mestj.length == 0) {
            alert("Debes completar el mes");
            return;
        } let añotj = document.getElementById("añotj").value;
        if (añotj.length == 0) {
            alert("Debes completar el año");
            return;
        } let expaño = document.getElementById("expaño").value;
        if (expaño.length == 0) {
            alert("Debes completar el año que expira");
            return;
        } let cvv = document.getElementById("cvv").value;
        if (cvv.length == 0) {
            alert("Debes completar el código de seguridad");
            return;
        }

        if (terminos == false) {
            alert("Debes leer los términos y condiciones");
            return;
        }
        else (alert("felicitaciones"))
    }
}
 function agregarProductos(){
     window.location.href = "categories.html"
 }

 function eliminarProducto(){
     console.log("elemento" + i)
     document.getElementById("carrito").innerHTML = ""
 }
