//PRIMERA ENTREGA DEL PROYECTO FINAL.

//para usar ALERT
//1ER CARTEL PARA SABER SI ES MAYOR DE EDAD PARA ENTRAR AL BAR
let edad = Number(prompt("¿Qué edad tenés?"));

if((edad >= 18) && (edad != "")){
    alert("Bienvenidx a Halawai Bar and Grill");
} else if(edad < 18){
    alert("Te esperamos en Halawai, para comer y beber sin alcohol!, veni a conocer las distintas opciones");
}else{
    alert("ERROR, ¿Que edad tenes?");
//se volvia a poner lo mismo para evitar bucle infinito?
    let edad = Number(prompt("¿Qué edad tenés?"));
}

// para usar ALERT + herramienta para desarrolladores (ahi se ve el precio total y cant de birras)
//no se como hacer para que se vea por un alert u otro lado.

//DECLARO VARIABLES GLOBALES
let total = 0;
let precioBirra = 0;
let contador = 0;

//INDICO TAREA A REALIZAR
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




//para usar CONSOLE.LOG

//CLASE - BebidaS
class Bebida{
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

//no se como hacer para traer SOLO el NOMBRE y el PRECIO de una Bebida.
//console.log(Bebida(this.nombre + this.precio));   -- o esta bien como lo hice?


//FUNCIONES de ORDEN SUPERIOR

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