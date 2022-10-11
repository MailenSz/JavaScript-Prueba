const cervezas = [{ id: 1, nombre: "IPA", precio: 390 },
                { id: 2, nombre: "RUBIA", precio: 330 },
                { id: 3, nombre: "HONEY", precio: 330 },
                { id: 4, nombre: "ROJA", precio: 330 },];

let contenedor = document.getElementById("contenedor");
let botonEliminar = document.getElementById("botonCarritoEliminar");

/* let carrito = [];
let botonEliminar = JSON.parse(localStorage.getItem("botonCarritoEliminar"));

if(carritoStorage){
    carrito = carritoStorage;
}
 */
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
})





let contador = 0;

function respuesta(){
    console.log("carrito");
    contador = contador ++;
}

let boton = document.getElementById("botonEliminarCarrito");

boton.addEventListener("mousedown", () =>{boton.className = "amarilloJs"});
boton.addEventListener("mouseover", () =>{boton.className = "naranjaJs"});
boton.addEventListener("mouseout", () =>{boton.className = "rosaJs"});






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
console.log(objeto);