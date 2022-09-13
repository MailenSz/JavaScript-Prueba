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

let entrada = prompt("Ingrese el usuario");

while(entrada != "mailen"){
    alert("usuario incorrecto");

    entrada = prompt("Ingrese su nombre de usuario...");
}

alert("bienvenida!!");
