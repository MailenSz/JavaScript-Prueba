//DESAFIO ENTREGABLE Nº 1 - SIMULADOR INTERACTIVO - PRECIO TOTAL de PRODUCTOS quedó al final = linea

//DESAFIO ENTREGABLE Nº 2 - ARRAYS

//lo que no entiendo de las clases es, YO lo escribo y guardo asi?, o es para que alguien complete?, no veo funcionalidad
//seria mejor hacer una LISTA (ARRAY) MIXTO y guardar cada tipo con su nombre y precio?

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

//esta parte no entiendo, creo el objeto BEBIDAS pero lo completo yo misma..?
const bebida1 = new Bebidas("Cerveza", "Ipa SuperStar", "$ 390");
console.log(bebida1);



//ARRAYS - LISTADOS
const cervezaArtesanal = ["IPA SuperStar", "Mexican LAGER", "SCOTCH Ness", "SweetHeart honey"];
//al ser tantos, que me conviene?, lista larga o alguna otra funcionalidad?
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

/* MI MAYOR CONSULTA.
Si tengo un menu lleno de tituloProducto + imagen(quizas) + precio + detalleContenido, qué figura me conviene hacer?
un array por cada producto?, objetos?.. me perdi aguna funcion?
*/














/* //DESAFIO ENTREGABLE Nº 1 - SIMULADOR INTERACTIVO - PRECIO TOTAL de PRODUCTOS

let total = 0;
let precioBirra = 0;
let contador = 0;

alert(`Hola!, te pido que vayas ingresando de a uno, el precio de los distintos productos que queres llevarte.`);

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