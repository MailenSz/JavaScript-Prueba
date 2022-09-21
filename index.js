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
/* 
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
mostrarTotal(); */




//OBJETOS - estructura que permite agrupar/asociar varios datos de 1 mismo elemento.
/* 
OBJETOS - puede ser una computadora, una pantalla, una persona...(nombre/edad/color de pelo/ojos,etc)

ESTRUCTURA --> {jey1: value1, key2: value2, keyn: valuen};

*en vez de escribir:
let nombre: "pepito";
let edad: 30;
let direccion: "Av";
-->
*/


//OBJETO = persona1 - VALORES= nombre, edad, dire
/* let persona1 = {
    nombre: "Pepito",
    edad: 30,
    direccion: "Av siempre viva"
}; */

//para ACCEDER a datos dentro de 1 objeto -->
//DOT NOTATION (objeto.propiedad/valor);
/* console.log(persona1.nombre);
//BREACK NOTATION (objeto["propiedad"]); - al ser "string", podemos usar VARIABLE
console.log(persona1["direccion"]); */

//para CAMBIAR dato dentro de 1 objeto -->
/* persona1.nombre = "Thelma";
persona1["edad"] = 103;

console.log(persona1); */




//FUNCIONES CONSTRUCTORAS = CREADORAS/GENERADORAS de OBJETOS (p/ no escribir 1x1)

/* ESTRUCTURA de las FUNCIONES CONSTRUCTORAS
1- CREO la MAQUINA:
***IMPORTANTE*** - para distinguir FUNCION CONSTRUCTORA de otro tipo de funcion la 1er letra del nombre de 
la "maquina creadora de objetos (funcion)", DEBE ir en Mayuscula. Ejemplo: function Persona()....

function Maquina/Persona(parametro1(nombre) parametro2(edad), parametro3(direccion)){
    this.name = parametro1(nombre);
    this.age = parametro2(edad);
    this.adress = parametro3(direccion);
}

const persona1 = new Persona(Pili, 45, "av");
const persona1 = new Persona(Thelma, 32, "costa");
console.log(persona1);

*/

//CREO LA MAQUINA creadora de OBJETOS
/* function Persona(nombre, edad, direccion){
    this.name = nombre;
    this.age = edad;
    this.address = direccion;
}

//CREO un NUEVO OBJETO DE la MAQUINA "P"ersona"
const persona1 = new Persona("Thelma", 32, "La Costa");
const persona2 = new Persona("Poli", 46, "AV lalal");

//MUESTRO en CONSOLA
console.log(persona1);
console.log(persona2.name);
 */


//CLASES - JS
// NUEVA FORMA DE ESCRIBIR EN JS.. se usa esta:

/* class Producto{
    constructor(nombre, imagen, precio, cantidad){
        this.name = nombre;
        this.img = imagen;
        this.cost = precio;
        this.cantidad = cantidad;
    }

    vender(){
        this.cantidad = this.cantidad - 1; //esto para que vaya sacando 1 unidad de producto en cada "venta".
    }
}

const producto1 = new Producto("TV", "http:...", 358000, 1);
const producto2 = new Producto("Lavarropas", "http:..", 458784, 1);
console.log(producto1);
console.log(producto2); */





//-------[]ARRAYS[]-------------------------------------------------------------------------------

/* const nombre = ["Thelma", "Luisa", "Margo", "Lupe", "Poli"];
console.log(nombre[2]);

const numeros = [1, 3, 2, 5, 8, 4, 9];
console.log(numeros[1] + numeros[3]); */

//CLASE BEBIDAS
class Bebidas{
    constructor(tipo, nombre, precio){
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
    }
    //NO ME SALE LO SGUIENTE, quizas tengo mal anotado, o no entendi.
/*     metodo(){
        console.log(`Hola, soy this.nombre`); -> como se escribe dentro de console.log para que aparezca lo que sea "this.nomre" x ej.
    }; */
}

const bebida1 = new Bebidas("Cerveza", "Ipa SuperStar", "$ 390");
console.log(bebida1);



//ARRAYS - LISTADOS
const cervezaArtesanal = ["IPA SuperStar", "Mexican LAGER", "SCOTCH Ness", "SweetHeart honey"];
const tragos = ["Branca con cocaCola", "Branca Julep", "Cynar Pomelo", "Cynar Julep", "Campari Naranja", 
                "Gin Tonic", "Aperol Spritz", "Cuba Libre", "Mojito", "Halawai Julep", "Serenillo", 
                "Negroni", "Negroni Sbagliatto"];
const sinAlcohol = ["Agua Mineral sin gas", "Agua con gas", "Gaseosas"];
/* NO ME LO TOMA CON `` PARA QUE AL "console.log", ME QUEDEN LAS PALABRAS SEPARADAS como en gaseosas...
const sinAlcohol = [`Agua Mineral sin gas, Agua con gas, Gaseosas`]; */
const gaseosas = [`CocaCola, Coca-0-azucar`];

sinAlcohol.pop();
gaseosas.unshift("Sprite, Sprite sin azucar");
gaseosas.push("Fanta, Fanta sin azucar");


console.log(sinAlcohol + gaseosas);
console.log(tragos.indexOf("Gin Tonic"));
console.log(tragos.includes("Wiskey"));