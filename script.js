/*let h1 = document.getElementsByClassName("titulo");
console.log(h1.innerHTML);
function Saludar() {
    console.log("¡Hola vamos a comenzar!");

}
Saludar();
const empresa = {
    nombre: "Electronic",
    calle: "Buenos aires 1234",
    informacion: "Venta de productos electronicos"

}
console.log(empresa["nombre"])
console.log(empresa["calle"])
console.log(empresa["informacion"])


let nombre = prompt("Ingrese su nombre completo");
let resultado = nombre;
console.log(resultado)
let salida = "Bienvenida/o" + " " + nombre;
function sumar(descuento1, descuento2){
    return descuento1 + descuento2
}
let result = sumar (2500, 2500);

console.log("¡Solo por hoy"+" "+"$"+ result +" " + "de descuento!")
const div = document.createElement("div");
const productos = [
    { id: 1, nombre: "notebook", precio: 85000 },
    { id: 2, nombre: "notebook", precio: 65000 },
    { id: 3, nombre: "parlante", precio: 10500 },
    { id: 4, nombre: "parlante", precio: 20600 },
    { id: 5, nombre: "celular samsung A03", precio: 52000 },
    { id: 6, nombre: "celular motorola E20", precio: 34000 },
    { id: 7, nombre: "smartv 43", precio: 73000 },
    { id: 8, nombre: "smartv 32", precio: 45000 }

];

productos.forEach((producto) => {
    console.log(producto.nombre)
    console.log(producto.precio)
});
let filtro = productos.filter(producto => producto.nombre === "parlante" && producto.precio < 25000)
console.log(filtro);

function Productos(titulo, color) {
    this.titulo = titulo;
    this.color = color;

}
const producto1 = new Productos("notebook", "gris")
const producto2 = new Productos("parlante", "negro")
const producto3 = new Productos("parlante", "azul")
const producto4 = new Productos("celular", "azul")
const producto5 = new Productos("smartv", "negro")
const producto6 = new Productos("tablet", "blanca")
const producto7 = new Productos("monitor", "negro")
console.log(producto1, producto2, producto3, producto4, producto5, producto6)
let opcion;
do {
    opcion = prompt("¿Que producto quiere comprar? \n1.Notebook\n2.Parlante\n3.Parlante azul\n4.Celular\n5.Smartv\n6.Tablet\n7.Monitor22p");
} while (opcion > 7 || opcion == 0  && opcion)
    ;
 
switch (opcion) {
    case "1":
        console.log("se agrego Notebook x $100000")
        cantidad = prompt("¿cantidad?");
        var descuento = 5000
        var subtotal = (100000 * cantidad) - 5000;
        console.log(subtotal)
        alert("Monto a pagar" + " " + subtotal.toFixed(2));

        break;
    case "2":
        console.log("Se agrego Parlante x $20000")
        cantidad = prompt("¿cantidad?");
        var descuento = 5000
        var subtotal = (20000 * cantidad) - descuento;

        console.log(subtotal)
        alert("Monto a pagar" + " " + subtotal.toFixed(2));
        break;
    case "3":
        console.log("Se agrego Parlante x $15000")
        cantidad = prompt("¿cantidad?");
        var descuento = 5000
        var subtotal = (15000 * cantidad) - descuento;

        console.log(subtotal)
        alert("Monto a pagar" + " " + subtotal.toFixed(2));
        break;
    case "4":
        console.log("Se agrego Celular x $99000")
        cantidad = prompt("¿cantidad?");
        var descuento = 5000
        var subtotal = (99000 * cantidad) - descuento;
        console.log(subtotal)
        alert("Monto a pagar" + " " + subtotal.toFixed(2));
        break;
    case "5":
        console.log("Se agrego Smartv x $58000 ")
        cantidad = prompt("¿cantidad?");
        var descuento = 5000
        var subtotal = (58000 * cantidad) - descuento;
        console.log(subtotal)
        alert("Monto a pagar" + " " + subtotal.toFixed(2));
        break;
    case "6":
        console.log("Se agrego Tablet x $28000")
        cantidad = prompt("¿cantidad?");
        var descuento = 5000
        var subtotal = (28000 * cantidad) - descuento;
        console.log(subtotal)
        alert("Monto a pagar" + " " + subtotal.toFixed(2));
        break;
    case "7":
        console.log("Se agrego Monitor x $15000 ")
        cantidad = prompt("¿cantidad?");
        var descuento = 5000
        var subtotal = (15000 * cantidad) - descuento;
        console.log(subtotal)
        alert("Monto a pagar" + " " + subtotal.toFixed(2));
        break;

    default: alert("Producto inexistente")
        break;
}

function Finalizarcompra() {
    console.log("¡Vamos a finalizar la compra!");

}
Finalizarcompra();
var envio=500
var total= subtotal + envio;
alert("Su pago total es" + " " + total)
function Saludar() {
    console.log("¡Gracias por su compra!");

}
Saludar();

let indice = opcion.indexOf("7");
console.log(indice);*/




























