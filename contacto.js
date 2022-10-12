//FORMULARIO CONTACTO

let miFormulario = document.getElementById("formulario");

miFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let input = e.target.children;
    console.log(input[1].value);
    console.log(input[3].value);
    console.log(input[4].children[1].value);
});


//BOTON
/* 
let botonEnviar = document.getElementById("botonEnviar");

botonEnviar.addEventListener("mousseover", () => {botonEnviar.id = "yellow"});
botonEnviar.addEventListener("moussedown", () => {botonEnviar.id = "orange"});
botonEnviar.addEventListener("mousseout", () => {botonEnviar.id = "green"}); */


// BOTON + LIBRERIA SWEET-ALERT

let botonCancelarF = document.getElementById("botonCancelar");

botonCancelarF.addEventListener("click", () => {
    Swal.fire({
        title: 'Estas segurx de Cancelar el formulario?',
        text: "Si estas segurx, dele ok nomas!",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#D54838',
        confirmButtonColor: '#89C925',
        cancelButtonText: 'NO!, quiero volver'
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire(
            'Borrado!',
            'Has cancelado el envio del formulario',
            'success'
        )}
    })
})

