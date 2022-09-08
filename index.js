//comentario de una sola linea

/* alt+shift+a 
comentario
de mas
de una 
linea... */



/* 
1-DECLARACION de una variable
let edad;
const ALTURA = 180;

2-ASIGNACION de variable
edad = 18;

PARA VER en CONSOLA (run code) lo que hago:
console.log(edad);

si quiero ver TEXTO + VARIABLE en CONSOLA
console.log("Esta es la forma de poner texto y verlo en consola, con variables", ALTURA); 
*/



/*
prueba variable SUMA+ RESTA- MULTIPLICACION* DIVISION/
1-DECLARO variables
let numUno = 5;
let numDos = 10;

let suma = numUno + numDos;
let resta = numUno - numDos;
let multiplicacion = numUno * numDos;
let division = numUno / numDos;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);  
*/

/*  
uso de variable + -- consola se ve Hola Thelma!! - CONCATENA variables, para espaciar seria +"..."; o vario + " ";
y
uso de `backtics` -- que se puede reemplazar variables con ${...}; y ademas, se puede escribir sin el + "...";
usa menos linea de codigo.
ejemplo para terminar viendo en consola: Hola Thelma!, bienvenidx!

let nombre = "Thelma";
let saludo = "Hola";

    VARIABLE +
let mensaje = saludo + " " + nombre + "!, bienvenidx!";
console.log(mensaje);

    `BACKTICS`
    let mensaje1 = `${saludo} ${nombre}!, bienvenidx!`;
console.log(mensaje1);
*/


/* PROMPT = CUADRO de DIALOGO en pagina web
prompt();  -> abre un cuadro de dialogo en pagina web.

le pudo asignar una VARIABLE(let) a ese PROMPT a completar con info.
let nombre = prompt("Ingrese su nombre:");
console.log(nombre); - consola que se abre web no LiveServer

ALERT
let nombre = prompt("Ingrese su nombre:");
alert(nombre); - muestra el resultado del nombre, al poner aceptar, en el mismo CUADRO de DIALOGO
*/


/* PROMPT (cuadro de dialogo) = STRING ->data que devuelve.
let numero1 = prompt("Ingrese un numero 1");
let numero2 = prompt("Ingrese un numero 2");

console.log(numero1 + numero2);

se ve= 38
porque la DATA que DEVUELVE PROMPT, es STRING = TEXTO => CONCATENA = JUNTA, no suma. No considera NUMERO la info.

    Para CONVERTIR el PROMPT en NUMBER y poder sumar en vez de concatenar (juntar): 3 FORMAS
        1) parseInt(prompt a convertir en numero ENTERO);
            let numero1 = parseInt(prompt("Ingrese un numero 1"));
            let numero2 = parseInt(prompt("Ingrese un numero 2"));

            let suma = (numero1 + numero2);

            alert(suma);

        2) parseFloat (para convertir a numero CON DECIMALES)

        3) Number( para convertir ambos, numero ENTERO Y CON DECIMAL)
*/
let numero1 = parseFloat(prompt("Ingrese un numero 1"));
let numero2 = parseFloat(prompt("Ingrese un numero 2"));

let suma = (numero1 + numero2);

alert(suma);