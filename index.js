
// Aqui se colocara el evento de imagen presentacion

let presentacion = document.getElementById("img_presentacion");

presentacion.addEventListener("mouseover", function(){

    presentacion.src = "./imagenes-2/presentacion-2.png";
})

presentacion.addEventListener("mouseout", function(){

    presentacion.src = "./imagenes-2/teconologia-presentacion.jpg";
})


//Evento de carrito

function agregar_al_carrito(e){

    console.log("Se clickeo el boton: ", + e.target);

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    let nombre_producto = padre.querySelector("h5").textContent;

    console.log(nombre_producto);
}

let btn_carrito = document.querySelectorAll(".btnAuris");

console.log(btn_carrito);

for ( let boton of btn_carrito){

    boton.addEventListener("click", agregar_al_carrito);

}







