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
        console.log("por ahora solo vas a poder comer y beber sin alcohol, pero hay cosas muy ricas!, te esperamos");
    }
}

let tienePermiso = permiso(32);

mensaje(tienePermiso);