






























//SEGUNDA ENTREGA del PROYECTO FINAL

/* 
//STORAGE + JSON.stringify

localStorage.setItem("tipo de bebida", "cerveza");
localStorage.setItem("nombre", "IPA");
localStorage.setItem("precio", 390);

let tipoBebida = localStorage.getItem("tipo de bebida");
let nombreBebida = localStorage.getItem("nombre");
let precioBebida = localStorage.getItem("precio");
let objeto = {nombre: "ROJA", precio: 330}


console.log(tipoBebida);
console.log(nombreBebida);
console.log(precioBebida);


for(let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i);
    console.log("tipo de bebida");
    console.log("cerveza", localStorage.getItem("nombre"));
}

localStorage.setItem("objeto", JSON.stringify(objeto));
let objet = JSON.parse(localStorage.getItem(typeof(objeto)));
console.log(objeto); */


//CARRITO + BOTON para ELIMINAR

/* const cervezas = [{ id: 1, nombre: "IPA", precio: 390 },
                { id: 2, nombre: "RUBIA", precio: 330 },
                { id: 3, nombre: "HONEY", precio: 330 },
                { id: 4, nombre: "ROJA", precio: 330 },];

let contenedor = document.getElementById("contenedor");
let botonStorage = document.getElementById("botonStorage");

let carrito = [];
let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

if(carritoStorage){
    carrito = carritoStorage;
}

cervezas.forEach(cervezas => {
    let div = document.createElement("div");

    div.innerHTML = `
        <h2>ID: ${cervezas.id}</h2>
        <p>Nombre: ${cervezas.nombre}</p>
        <b>$ ${cervezas.precio}</b>
        `;
    
    contenedor.append(div);
});

botonStorage.addEventListener("click", () => {
    localStorage.clear();
    contenedor.innerHTML = "";
    alert("productos borrados del carrito");
}) */




//EVENTOS 

//EVENTO - MOUSE
/* let contador = 0;

function respuesta(){
    console.log("Carrito");
    contador = contador ++;
}

let boton = document.getElementById("botonStorage");

boton.addEventListener("mousedown", () =>{boton.className = "amarilloJs"});
boton.addEventListener("mouseover", () =>{boton.className = "naranjaJs"});
boton.addEventListener("mouseout", () =>{boton.className = "rosaJs"}); */



//EVENTO - TECLADO
//let boton = document.getElementById("boton");
/* let input = document.getElementById("nombreJs");

input.addEventListener("keydown", () => console.log("keydown"));


//FORMULARIO para CONTACTO HTML
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

//donde se guarda la info que se pone en el formulario
    let inputs = e.target.children;
    
    if (!inputs [0].value.includes("@")){
        inputs [0].value = "";
    }

console.log("funciona, hola!");
});
 */


//DOM "INTERACTUAR CON HTML"

//ME TRAIGO EL CONTENEDOR DE HTML = let contenedor
//TENGO PRODUCTOS en un array = let cervezas
    //CREO UN NUEVO DIV CON ELEMENTOS = let item
    //CONTENIDO DE LA NUEVA DIV = item.innerHTML
//DONDE LO AGREGO EN HTML - UBICACION "AL CONTENEDOR METELE EL ITEM" = append

/* let contenedOr = document.getElementById("contenedOr");

let cervezAs = [{ id: 1, nombre: "IPA", precio: 390 },
                { id: 2, nombre: "RUBIA", precio: 330 },
                { id: 3, nombre: "HONEY", precio: 330 },
                { id: 4, nombre: "ROJA", precio: 330 },];

cervezas.forEach(cervezAs => {
    let item = document.createElement("div");

    item.innerHTML = 
        `<h2>Id: ${cervezAs.id}</h2>
        <p>Cervezas: ${cervezAs.nombre}</p>
        <b>$${cervezAs.precio}</b>`;

contenedOr.append(item);
})
 */




//PARA COMPRAS HTML
/* let cervezasArtesanales = [{ id: 1, nombre: "IPA", precio: 390,  },
                            { id: 2, nombre: "RUBIA", precio: 330 },
                            { id: 3, nombre: "HONEY", precio: 330 },
                            { id: 4, nombre: "ROJA", precio: 330 },];

cervezas.forEach(cervezasArtesanales => {
    //CREO UN NUEVO DIV CON ELEMENTOS
let item = document.createElement("div");
    //CONTENIDO DE LA NUEVA DIV
item.innerHTML = 
        `<h2>Id: ${cervezas.id}</h2>
        <p>Cervezas: ${cervezas.nombre}</p>
        <b>$${cervezas.precio}</b>`;

//DONDE LO AGREGO EN HTML - UBICACION "AL CONTENEDOR METELE EL ITEM"
contenedor.append(item);
}) */













//PRIMERA ENTREGA DEL PROYECTO FINAL.

//para usar ALERT
//1ER CARTEL PARA SABER SI ES MAYOR DE EDAD PARA ENTRAR AL BAR
/* let edad = Number(prompt("¿Qué edad tenés?"));

if((edad >= 18) && (edad != "")){
    alert("Bienvenidx a Halawai Bar and Grill");
} else if(edad < 18){
    alert("Te esperamos en Halawai, para comer y beber sin alcohol!, veni a conocer las distintas opciones");
}else{
    alert("ERROR, ¿Que edad tenes?");
//se volvia a poner lo mismo para evitar bucle infinito?
    let edad = Number(prompt("¿Qué edad tenés?"));
}
 */
// para usar ALERT + herramienta para desarrolladores (ahi se ve el precio total y cant de birras)
//no se como hacer para que se vea por un alert u otro lado.

//DECLARO VARIABLES GLOBALES
/* let total = 0;
let precioBirra = 0;
let contador = 0; */

//INDICO TAREA A REALIZAR
/* alert(`Hola!, te pido que vayas ingresando de a uno, el precio de los distintos Bebidas que queres llevarte.`); */

//DESIGNO / CREO las funciones.. "se guardan en cajitas, pero necesitan ser llamadas"
//PIDO DATOS
/* const ingresarPrecio = function(){
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
}; */

//PROCESO DATOS
/* const calcularTotal = function(precioBirra) {
    return precioBirra + total;
}; */

//MUESTRO DATOS
/* const mostrarTotal = function() {
    console.log(`Cantidad de Cervezas:  ` + contador);
    console.log(`El precio total es: $ ` + total); 
}; */

//UTILIZO las funciones
/* ingresarPrecio();
mostrarTotal(); */




//para usar CONSOLE.LOG

//CLASE - BebidaS
/* class Bebida{
    constructor(tipo, nombre, precio, cantidad){
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
 */
//esta bien escrito ?, NO ME FUNCIONA
// abajo lo LLAMO: console.log(Ipa.vender());         -NO ME SALE, ME PONE 0 y NAN 
/*     vender(){
        console.log(this.cantidad = this.cantidad - 1); //esto para que vaya sacando 1 unidad de Bebida en cada "venta".
    }
} */

//DECLARACION CERVEZAS  BIERHOUSE.
/* const ipa = new Bebida("cerveza", `Ipa Super Star`, 390, 1);
const rubia = new Bebida("cerveza", `Mexican Lager`, 330, 1);
const roja = new Bebida("cerveza", `Scotch Ness`, 330, 1);
const honey = new Bebida("cerveza", `Sweetheart Honey`, 330, 1); */

//DECLARACION TRAGOS
/* const fernet = new Bebida(`trago`, `Branca con coca`, 500, 1);
const brancaJulep = new Bebida(`trago`, `Branca julep`, 550, 1);
const cynar = new Bebida(`trago`, `Cynar pomelo`, 500, 1);
const cynarJulep = new Bebida(`trago`, `Cynar julep`, 550, 1);
const negroni = new Bebida(`trago`, `Branca con coca`, 500, 1);
const negroniSbagliatto = new Bebida(`trago`, `Branca julep`, 550, 1);
const mojito = new Bebida(`trago`, `mojito`, 500, 1);
const campari = new Bebida(`trago`, `Campari naranja`, 500, 1);
const cubaLibre = new Bebida(`trago`, `Ron con coca`, 500, 1);
const ginTonic = new Bebida(`trago`, `Gin con tonica`, 500, 1);
const aperolSpritz = new Bebida(`trago`, `Aperol`, 500, 1);
const Halawai = new Bebida(`trago`, `Isla tropical`, 600, 1); */

//DECLARACION BEBIDAS SIN ALCOHOL
/* const agua = new Bebida(`sin alcohol`, `Agua Mineral sin gas`, 200, 1);
const aguaConGas = new Bebida(`sin alcohol`, `Agua con gas`, 200, 1);

const coca = new Bebida(`sin alcohol`, `Coca Cola`, 240, 1);
const coca0 = new Bebida(`sin alcohol`, `Coca Cola cero azúcar`, 240, 1);
const sprite = new Bebida(`sin alcohol`, `Sprite`, 240, 1);
const sprite0 = new Bebida(`sin alcohol`, `Spirte cero azúcar`, 240, 1);
const fanta = new Bebida(`sin alcohol`, `Fanta`, 240, 1);
const fanta0 = new Bebida(`sin alcohol`, `Fanta cero azúcar`, 240, 1);

console.log(ipa);
console.log(sprite0);
console.log(aguaConGas); */

// console.log(Ipa.vender());         -NO ME SALE, ME PONE 0 y NAN 

//ARRAYS
/* const cervezas = ["ipa", "rubia", "roja", "honey"];
const tragos = ["fernet", "brancaJulep", "cynar", "cynarJulep",
                    "negroni", "negroniSbagliatto", "mojito", "campari", 
                    "cubaLiber", "ginTonic", "aperolSpritz", "Halawai",];

const sinAlcohol = ["agua", "aguaConGas", "coca", "coca0",
                        "sprite", "sprite0", "fanta", "fanta0"];

const preciosBebidas = [240, 330, 390, 500, 550, 600];

console.log(sinAlcohol);
console.log(cervezas + tragos);
console.log(tragos.indexOf("GinTonic"));
console.log(tragos.indexOf("ginTonic"));
console.log(tragos.includes("Wiskey"));

console.log(tragos[3]);

console.log(cervezas[0] + " " + preciosBebidas[2]); */

//no se como hacer para traer SOLO el NOMBRE y el PRECIO de una Bebida.
//console.log(Bebida(this.nombre + this.precio));   -- o esta bien como lo hice?


//FUNCIONES de ORDEN SUPERIOR
/* 
const cerveza = [
    {nombre:"ipa", precio: 390},
    {nombre: "rubia", precio: 330},
    {nombre: "roja", precio: 330},
    {nombre: "honey", precio: 330}
];

let preciosActualizados = cerveza.map( item => {
    return{
        nombre: item.nombre, 
        precio: item.precio + 50
    };
});

console.log(preciosActualizados);
 */
















//DESAFIO ENTREGABLE Nº 2 - ARRAYS

//lo que no entiendo de las clases es, YO lo escribo y guardo asi?, o es para que alguien complete?, no veo funcionalidad
//seria mejor hacer una LISTA (ARRAY) MIXTO y guardar cada tipo con su nombre y precio?

//CLASE BEBIDAS
/* class Bebidas{
    constructor(tipo, nombre, precio){
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
    }

    //NO ME SALE LO SIGUIENTE, quizas tengo mal anotado, o no entendi.
metodo(){
        console.log("Hola, soy", this.nombre);  
    };
}

const bebida1 = new Bebidas("Cerveza", "Ipa SuperStar", "$ 390");
console.log(bebida1);



//ARRAYS - LISTADOS
const cervezaArtesanal = ["IPA SuperStar", "Mexican LAGER", "SCOTCH Ness", "SweetHeart honey"];
//al ser tantos, que me conviene?, lista larga o alguna otra funcionalidad?
const tragos = ["Branca con cocaCola", "Branca Julep", "Cynar Pomelo", "Cynar Julep", "Campari Naranja", 
                "Gin Tonic", "Aperol Spritz", "Cuba Libre", "Mojito", "Halawai Julep", "Serenillo", 
                "Negroni", "Negroni Sbagliatto"];
const sinAlcohol = ["Agua Mineral sin gas", "Agua con gas", "Gaseosas"];

NO ME LO TOMA CON `` PARA QUE AL "console.log", ME QUEDEN LAS PALABRAS SEPARADAS como en gaseosas...
const sinAlcohol = [`Agua Mineral sin gas, Agua con gas, Gaseosas`];
const gaseosas = [`CocaCola, Coca-0-azucar`];

sinAlcohol.pop();
gaseosas.unshift("Sprite, Sprite sin azucar");
gaseosas.push("Fanta, Fanta sin azucar");


console.log(sinAlcohol + gaseosas);
console.log(tragos.indexOf("Gin Tonic"));
console.log(tragos.includes("Wiskey")); */














/* //DESAFIO ENTREGABLE Nº 1 - SIMULADOR INTERACTIVO - PRECIO TOTAL de BebidaS

let total = 0;
let precioBirra = 0;
let contador = 0;

alert(`Hola!, te pido que vayas ingresando de a uno, el precio de los distintos Bebidas que queres llevarte.`);

//DESIGNO / CREO las funciones.. "se guardan en cajitas, pero necesitan ser llamadas"
//PIDO DATOS
const ingresarPrecio = function(){
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
const calcularTotal = function(precioBirra) {
    return precioBirra + total;
};

//MUESTRO DATOS
const mostrarTotal = function() {
    console.log(`Cantidad de Cervezas:  ` + contador);
    console.log(`El precio total es: $ ` + total); 
};

//UTILIZO las funciones
ingresarPrecio();
mostrarTotal();
 */


















//TODO.
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
} 
    let edad = parseInt(prompt("¿Qué edad tenés?"));
*/


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

ESTRUCTURA --> {Key1: value1, key2: value2, keyn: valuen};

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
/* class Bebidas{
    constructor(tipo, nombre, precio){
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
    }
    //NO ME SALE LO SIGUIENTE, quizas tengo mal anotado, o no entendi.
    metodo(){
        console.log("Hola, soy", this.nombre);  
    };
}

const bebida1 = new Bebidas("Cerveza", "Ipa SuperStar", "$ 390");
console.log(bebida1);



//ARRAYS - LISTADOS
const cervezaArtesanal = ["IPA SuperStar", "Mexican LAGER", "SCOTCH Ness", "SweetHeart honey"];
const tragos = ["Branca con cocaCola", "Branca Julep", "Cynar Pomelo", "Cynar Julep", "Campari Naranja", 
                "Gin Tonic", "Aperol Spritz", "Cuba Libre", "Mojito", "Halawai Julep", "Serenillo", 
                "Negroni", "Negroni Sbagliatto"];
const sinAlcohol = ["Agua Mineral sin gas", "Agua con gas", "Gaseosas"];
//NO ME LO TOMA CON `` PARA QUE AL "console.log", ME QUEDEN LAS PALABRAS SEPARADAS como en gaseosas...
const gaseosas = [`CocaCola, Coca-0-azucar`];

sinAlcohol.pop();
gaseosas.unshift("Sprite, Sprite sin azucar");
gaseosas.push("Fanta, Fanta sin azucar");


console.log(sinAlcohol + gaseosas);
console.log(tragos.indexOf("Gin Tonic"));
console.log(tragos.includes("Wiskey")); */




//PRIMERA ENTREGA PROYECTO FINAL
//CLASE - BebidaS
/* class Bebida{
    constructor(tipo, nombre, precio, cantidad){
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

//esta bien escrito ?, NO ME FUNCIONA
// abajo lo LLAMO: console.log(Ipa.vender());         -NO ME SALE, ME PONE 0 y NAN 
    vender(){
        console.log(this.cantidad = this.cantidad - 1); //esto para que vaya sacando 1 unidad de Bebida en cada "venta".
    }
}

//DECLARACION CERVEZAS  BIERHOUSE.
const ipa = new Bebida("cerveza", `Ipa Super Star`, 390, 1);
const rubia = new Bebida("cerveza", `Mexican Lager`, 330, 1);
const roja = new Bebida("cerveza", `Scotch Ness`, 330, 1);
const honey = new Bebida("cerveza", `Sweetheart Honey`, 330, 1);

//DECLARACION TRAGOS
const fernet = new Bebida(`trago`, `Branca con coca`, 500, 1);
const brancaJulep = new Bebida(`trago`, `Branca julep`, 550, 1);
const cynar = new Bebida(`trago`, `Cynar pomelo`, 500, 1);
const cynarJulep = new Bebida(`trago`, `Cynar julep`, 550, 1);
const negroni = new Bebida(`trago`, `Branca con coca`, 500, 1);
const negroniSbagliatto = new Bebida(`trago`, `Branca julep`, 550, 1);
const mojito = new Bebida(`trago`, `mojito`, 500, 1);
const campari = new Bebida(`trago`, `Campari naranja`, 500, 1);
const cubaLibre = new Bebida(`trago`, `Ron con coca`, 500, 1);
const ginTonic = new Bebida(`trago`, `Gin con tonica`, 500, 1);
const aperolSpritz = new Bebida(`trago`, `Aperol`, 500, 1);
const Halawai = new Bebida(`trago`, `Isla tropical`, 600, 1);

//DECLARACION BEBIDAS SIN ALCOHOL
const agua = new Bebida(`sin alcohol`, `Agua Mineral sin gas`, 200, 1);
const aguaConGas = new Bebida(`sin alcohol`, `Agua con gas`, 200, 1);

const coca = new Bebida(`sin alcohol`, `Coca Cola`, 240, 1);
const coca0 = new Bebida(`sin alcohol`, `Coca Cola cero azúcar`, 240, 1);
const sprite = new Bebida(`sin alcohol`, `Sprite`, 240, 1);
const sprite0 = new Bebida(`sin alcohol`, `Spirte cero azúcar`, 240, 1);
const fanta = new Bebida(`sin alcohol`, `Fanta`, 240, 1);
const fanta0 = new Bebida(`sin alcohol`, `Fanta cero azúcar`, 240, 1);

console.log(ipa);
console.log(sprite0);
console.log(aguaConGas);

// console.log(Ipa.vender());         -NO ME SALE, ME PONE 0 y NAN 

//ARRAYS
const cervezas = ["ipa", "rubia", "roja", "honey"];
const tragos = ["fernet", "brancaJulep", "cynar", "cynarJulep",
                    "negroni", "negroniSbagliatto", "mojito", "campari", 
                    "cubaLiber", "ginTonic", "aperolSpritz", "Halawai",];

const sinAlcohol = ["agua", "aguaConGas", "coca", "coca0",
                        "sprite", "sprite0", "fanta", "fanta0"];

const preciosBebidas = [240, 330, 390, 500, 550, 600];

console.log(sinAlcohol);
console.log(cervezas + tragos);
console.log(tragos.indexOf("GinTonic"));
console.log(tragos.indexOf("ginTonic"));
console.log(tragos.includes("Wiskey"));

console.log(tragos[3]);

console.log(cervezas[0] + " " + preciosBebidas[2]);
 */
//no se como hacer para traer SOLO el NOMBRE y el PRECIO de una Bebida.
//console.log(Bebida(this.nombre + this.precio));   -- o esta bien como lo hice?





//FUNCIONES de ORDEN SUPERIOR
//DOM

/* const cervezas = [
    {nombre:"ipa", precio: 390},
    {nombre: "rubia", precio: 330},
    {nombre: "roja", precio: 330},
    {nombre: "honey", precio: 330}
];

let preciosActualizados = cervezas.map( item => {
    return{
        nombre: item.nombre, 
        precio: item.precio + 50
    };
});

console.log(preciosActualizados);
 */






//DESAFIO DOM "INTERACTUAR CON HTML"

//ME TRAIGO EL CONTENEDOR DE HTML
/* let contenedor = document.getElementById("contenedor"); */

//TENGO PRODUCTOS en un array
/* let cervezas = [{ id: 1, nombre: "IPA", precio: 390 },
                { id: 2, nombre: "RUBIA", precio: 330 },
                { id: 3, nombre: "HONEY", precio: 330 },
                { id: 4, nombre: "ROJA", precio: 330 },]; */

/* cervezas.forEach(cervezas => { */
    //CREO UN NUEVO DIV CON ELEMENTOS
/*     let item = document.createElement("div"); */
    //CONTENIDO DE LA NUEVA DIV
/*     item.innerHTML = 
        `<h2>Id: ${cervezas.id}</h2>
        <p>Cervezas: ${cervezas.nombre}</p>
        <b>$${cervezas.precio}</b>`; */

//DONDE LO AGREGO EN HTML - UBICACION "AL CONTENEDOR METELE EL ITEM"
/* contenedor.append(item);
}) */







/* 


//EVENTOS - desafio 

//EVENTO - MOUSE
let contador = 0;

function respuesta(){
    console.log("Click");
    contador = contador ++;
}

let saludo = document.getElementById("saludoJs");
let boton = document.getElementById("boton");

boton.addEventListener("mousedown", () =>{saludo.className = "amarilloJs"});
boton.addEventListener("mouseover", () =>{saludo.className = "naranjaJs"});
boton.addEventListener("mouseout", () =>{saludo.className = "rosaJs"});


//EVENTO - TECLADO
//let boton = document.getElementById("boton");
let input = document.getElementById("nombreJs");

input.addEventListener("keydown", () => console.log("keydown"));


//FORMULARIO
let formulario = document.getElementById("formularioJs");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

//donde se guarda la info que se pone en el formulario
    let inputs = e.target.children;
    
    if (!inputs [0].value.includes("@")){
        inputs [0].value = "";
    }

/*     console.log("funciona, hola!");
 *//* }); */ 


