const cervezas = [{ id: 1, nombre: "IPA", precio: 390 },
                { id: 2, nombre: "RUBIA", precio: 330 },
                { id: 3, nombre: "HONEY", precio: 330 },
                { id: 4, nombre: "ROJA", precio: 330 },];

/* localStorage.setItem("cerve", JSON.stringify(cervezas));
 */

let contenedor = document.getElementById("contenedor");
let botonEliminar = document.getElementById("botonCarritoEliminar");

/* let carrito = [];
let botonEliminar = JSON.parse(localStorage.getItem("botonCarritoEliminar"));

if(carritoStorage){
    carrito = carritoStorage;
}
 */
let arrayCarrito = [];

let productosUser = JSON.parse(localStorage.getItem("carrito"));

if(productosUser){
    arrayCarrito = productosUser;
}

cervezas.forEach(cervezas => {
    let div = document.createElement("div");

    div.innerHTML = `
        <h5>ID: ${cervezas.id}</h5>
        <p>Nombre: ${cervezas.nombre}</p>
        <b>$ ${cervezas.precio}</b>
        <button id="${cervezas.id}"> comprar <i class="fas-fa-shopping-cart"></i> </button>
        `;
    
    contenedor.append(div);
    let comprarElement = document.getElementById(cervezas.id);
    comprarElement.addEventListener("click", () =>{
        arrayCarrito.push(cervezas);
        localStorage.setItem("carrito", JSON.stringify(arrayCarrito)); 
    })
});

botonEliminar.addEventListener("click", () => {
    localStorage.clear();
    contenedor.innerHTML = "";
    Swal.fire(
        'Atencion!',
        'Has eliminado el carrito!',
        'warning'
    )
})





let contador = 0;

function respuesta(){
    console.log("carrito")
    contador = contador ++;
};

let boton = document.getElementById("botonCarritoEliminar");
let botonComprar = document.getElementsByName()

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




// FETCH + falsa API -> .json local.

//para formulario ver "emailjs.com"

const lista = document.getElementById("lista");

fetch("./data.json")
.then(response => response.json())
.then(data => {
    data.forEach(itemLista => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h2>${itemLista.nombre}</h2>
            <p>${itemLista.precio}</p>
            <p>${itemLista.id}</p>
        `;
        
        lista.append(li);
    });
})
/* const traerProductos = async () => {
    const lista = document.getElementById("lista");

    try{
        const response = await fetch("./data.json");
        const data = await response.json();

        data.forEach((publicacion) => {
            const li = document.getElements("ul");
            li.innerHTML = `
                <h2>${publicacion.nombre}</h2>
                <p>${publicacion.precio}</p>
            `;
        
        listado.append(li);
        });

    }catch(error){
        console.log(error);
    };

    const response = await fetch("./data.json");
    const data = await response.json();


};

traerProductos();
 */

//CARRITO
/* let productos = JSON.parse(localStorage.getItem("carrito"));

let carrito = document.getElementById("productos");

productos.forEach(cervezas => {
    let div = document.createElement("div");

    div.innerHTML = `
        <h5>ID: ${cervezas.id}</h5>
        <p>Nombre: ${cervezas.nombre}</p>
        <b>$ ${cervezas.precio}</b>
        <button id="${cervezas.id}"> eliminar </button>
        `;
    
        carrito.append(div);

    let comprarElement = document.getElementById(cervezas.id);
    comprarElement.addEventListener("click", () =>{
        localStorage.removeItem("carrito"); 
    })
});
 */
