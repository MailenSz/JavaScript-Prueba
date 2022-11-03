let productos = JSON.parse(localStorage.getItem("carrito"));

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