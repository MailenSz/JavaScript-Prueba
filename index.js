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

//DUDAAAA
/* let usuario = prompt("Ingrese su nombre");

while (usuario!= " "){
    alert("Bienvenidx a Halawai Bar!!");
    usuario = prompt("Ingrese su nombre");
}
alert("Bienvenidx!"); */


const permiso = (edad) => {
    if(edad >= 18){
        return true;
    }else{
        return false;
    }
}

const mensaje = (autorizacion) => {
    if(autorizacion){
        console.log("podes entrar a Halawai Bar and Grill, y consumir lo que elijas de la carta!");
    }else{
        console.log("podes venir a Halawai Bar and Grill a comer y beber sin alcohol, hay cosas muy ricas!, te esperamos");
    }
}

let tienePermiso = permiso(13);

mensaje(tienePermiso);



//OPERADORES AVANZADOS - operador ternario
let edaD = 32;
let entrada = edaD >= 18 ? true : false;

entrada ? console.log("podes entrar a Halawai Bar and Grill, y consumir lo que elijas de la carta!") : console.log("podes venir a Halawai Bar and Grill a comer y beber sin alcohol, hay cosas muy ricas!, te esperamos");

// OP. AVANZADOS - || = or - acceso CONDICIONAL a un {objeto}

class Usuarixs{
    constructor(nombre, apellido, edad, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
}};

const usuarix1 = new Usuarixs(
    "thelma",
    "mimi",
    32,
    112344456
);

const usuarix2 = new Usuarixs(
    "margo",
    "rollw",
    18,
    118903344
);

const usuarix3 = new Usuarixs(
    "barto",
    "picos",
    54,
    1138849583
);

const usuarixN = null;

console.log(usuarix1?.nombre || "El usuarix no existe" );
console.log(usuarixN?.nombre || "El usuarix no existe" );

// OP. AVANZADOS - DESESTRUCTURACION 
let{nombre, telefono} = usuarix1;
console.log(nombre, telefono);



