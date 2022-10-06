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


//ME TRAIGO EL CONTENEDOR DE HTML
let contenedor = document.getElementById("contenedor"); 

//TENGO PRODUCTOS en un array
let cervezas = [{ id: 1, nombre: "IPA", precio: 390 },
                { id: 2, nombre: "RUBIA", precio: 330 },
                { id: 3, nombre: "HONEY", precio: 330 },
                { id: 4, nombre: "ROJA", precio: 330 },]; 

cervezas.forEach(cervezas => { 
    //CREO UN NUEVO DIV CON ELEMENTOS
let item = document.createElement("div");
    //CONTENIDO DE LA NUEVA DIV
item.innerHTML = 
    `<h2>Id: ${cervezas.id}</h2>
    <p>Cervezas: ${cervezas.nombre}</p>
    <b>$${cervezas.precio}</b>`;

//DONDE LO AGREGO EN HTML - UBICACION "AL CONTENEDOR METELE EL ITEM"
contenedor.append(item);
})
