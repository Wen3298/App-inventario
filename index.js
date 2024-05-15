const nombre = document.getElementById("name");
const Cantidad = document.getElementById("eventcantidad");
const Precio = document.getElementById("eventprecio");
const formulario = document.getElementById("eventoformulario");
const btnAgregar = document.getElementById("btnagregar");

let datosLocalStorage = JSON.parse(localStorage.getItem("formulario"));
// Agregar un evento al formulario para guardar los datos en localStorage cuando se envíe//
function guardarprodu() {

    let datosproducto = {
        nombre: nombre.value,
        cantidad: Cantidad.value,
        Precio: Precio.value
    }
    datosLocalStorage.push (datosproducto)

    
}
   //aqui se guardan losdatos en localstorage//
    localStorage.setItem("formulario", datosLocalStorage);

// puse una alerta para ver si todo funciona y si se guardan los datos
    alert("Producto Guadado");




