//FORMULARIO - no me anda.

let miFormulario = document.getElementById("formulario");

miFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let input = e.target.children;
    console.log(input[0].value);
    console.log(input[1].value);
    console.log(input[2].value);
});


//BOTON

let botonEnviar = document.getElementById("botonEnviar");

botonEnviar.addEventListener("mousseover", () => {botonEnviar.id = "yellow"});
botonEnviar.addEventListener("moussedown", () => {botonEnviar.id = "orange"});
botonEnviar.addEventListener("mousseout", () => {botonEnviar.id = "green"});

/* let contador = 0;

function respuesta(){
    console.log("Click");
    contador = contador ++;
}

let saludo = document.getElementById("saludoJs");
let boton = document.getElementById("boton");

boton.addEventListener("mousedown", () =>{saludo.className = "amarilloJs"});
boton.addEventListener("mouseover", () =>{saludo.className = "naranjaJs"});
boton.addEventListener("mouseout", () =>{saludo.className = "rosaJs"}); */