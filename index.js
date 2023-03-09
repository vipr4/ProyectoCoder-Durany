
// Aqui se colocara el evento de imagen presentacion

let presentacion = document.getElementById("img_presentacion");

presentacion.addEventListener("mouseover", function(){

    presentacion.src = "./imagenes-2/presentacion-2.png";
})

presentacion.addEventListener("mouseout", function(){

    presentacion.src = "./imagenes-2/teconologia-presentacion.jpg";
})


//Evento de carrito

let carrito_storage = [];

function agregar_al_carrito(e){

    console.log("Se agregó al carrito: ", e.target);

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    let nombre_producto = padre.querySelector("h5").textContent;
    let precio_producto = padre.querySelector("p").textContent;
    let img_producto = padre.querySelector("img").src;

    // console.log(nombre_producto);
    // console.log(precio_producto);
    // console.log(img_producto);

    let producto = {

        nombre: nombre_producto,
        precio: precio_producto,
        img: img_producto,
        cantidad:1
    };

    // Local Storage
    carrito_storage.push(producto);

    let guardar_carrito = JSON.stringify(carrito_storage);
    localStorage.setItem("Lista_productos", guardar_carrito);

    let traer_producto = localStorage.getItem("Lista_productos");
    console.log(traer_producto);
}

let btn_carrito = document.querySelectorAll(".btnAuris");

console.log(btn_carrito);

for ( let boton of btn_carrito){

    boton.addEventListener("click", agregar_al_carrito);

}



