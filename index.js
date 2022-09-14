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


//DESAFIO ENTREGABLE Nª 1 - SIMULADOR INTERACTIVO - PRECIO TOTAL PROMO HH - 
let suma = (a,b) => a + b
let resta = (a,b) => a - b

let descuentoHH = precio => resta / 2
let producto = prompt("Ingrese el precio del producto");

let total = resta(producto, descuentoHH);
console.log(alert(total));

