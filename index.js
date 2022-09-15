/* HALAWAI Bar and Grill,
es la página que hice en Desarrollo Web.
Como es un bar con alcohol, se me ocurrió hacer pregunta de edad para acceso.
*/
/* 
let edad = parseInt(prompt("¿Qué edad tenés?"));

if((edad >= 18) && (edad != "")){
    console.log("Bienvenidx a Halawai Bar and Grill");
} else if(edad < 18){
    console.log("Te esperamos en Halawai, para comer y beber sin alcohol!, veni a conocer las distintas opciones");
}else{
    console.log("ERROR, ¿Que edad tenes?");
} */


/* let entrada = prompt("Ingrese X...");

while(entrada != "ESC"){
    let mensaje = `Ingresaste ${entrada}`;
    alert(mensaje);

    entrada = prompt("Ingrese X...");
} */

//ENTREGA 1 - CILOS e ITERACIONES//
/* let entrada = prompt("Ingrese el usuario");

while(entrada != "mailen"){
    alert("usuario incorrecto");

    entrada = prompt("Ingrese su nombre de usuario...");
}

alert("bienvenida!!");
 */

/* function saludar(){
    let nombre = prompt("Ingrese su nombre");
    let mensaje = `Hola ${nombre}!!, bienvenidx a Halawai`;

    alert(mensaje);
}

saludar();
 */

//FUNCIONES
/* function calculadora(num1, operacion, num2){
    switch(operacion){
        case "+":
            return num1 + num2;
            breack;
        case "-":
            return num1 - num2;
            breack;
        case "*":
            return num1 * num2;
            breack;
        case "/":
            return num1 / num2;
            breack;
        default:
            return "operacion no disponible";
            breack;
    }
}

console.log(calculadora(3, "+", 4)); */

//DESAFIO ENTREGABLE Nª 1 - SIMULADOR INTERACTIVO - PRECIO TOTAL de PRODUCTO
/* let suma = (a,b) => a + b
let resta = (a,b) => a - b

let precio = Number(prompt("Ingrese el precio del producto"));
let descuentoHH = precio => (resta/2);

let total = resta(precio, descuentoHH);
alert(total);
 */

//DESAFIO ENTREGABLE Nª 1 - SIMULADOR INTERACTIVO - PRECIO TOTAL de PRODUCTOS

let total = 0;
let precioBirra = 0;
let contador = 0;

alert(`Hola!, te pido que vayas ingresando de a uno, el precio de los distintos productos que queres llevarte.`);

//DESIGNO / CREO las funciones.. "se guardan en cajitas, pero necesitan ser llamadas"
//PIDO DATOS
function ingresarPrecio() {
    precioBirra = Number(prompt(`Ingrese el precio de la cerveza` + (contador + 1) + ':'));

    while (precioBirra > 0) {
        total = calcularTotal(precioBirra);
        contador++; //incrementa el valor de la variable CONTADOR
        //NO PUEDE FALTAR LA COPIA DE LA FUNCION O CIERRE DE BUCLE..SE ROMPE LA PC SI NO . OJO FOR /WHILE
        //cuando cliente ponga Precio = 0, se detiene bucle.
        precioBirra = Number(prompt(`Ingrese el precio de la cerveza` + (contador + 1) + ':')); //NO PUEDE FALTAR 
    }

    if (precioBirra <= 0 || isNaN(precioBirra)) {
        console.log(`Hola!, has introducido un valor igual o menor a cero, o algun valor no numerico.
                    Entiendo no quieres sumar mas Cervezas a tu carrito.
                    Gracias!!`);
        
    }
};

//PROCESO DATOS
function calcularTotal(precioBirra) {
    return precioBirra + total;
};

//MUESTRO DATOS
function mostrarTotal() {
    console.log(`Cantidad de Cervezas:  ` + contador);
    console.log(`El precio total es: $ ` + total); 
};

//UTILIZO las funciones
ingresarPrecio();
mostrarTotal();
