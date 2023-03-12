
// Aqui se colocara el evento de imagen presentacion

let presentacion = document.getElementById("img_presentacion");

presentacion.addEventListener("mouseover", function(){

    presentacion.src = "./imagenes-2/presentacion-2.png";
})

presentacion.addEventListener("mouseout", function(){

    presentacion.src = "./imagenes-2/teconologia-presentacion.jpg";
})



//Evento de carrito

class Cart{

    constructor(nombreProducto, precioProducto, imgProducto, cantidadProducto){
        this.nombre = nombreProducto;
        this.precio = precioProducto;
        this.img = imgProducto;
        this.cantidad = cantidadProducto;
    }
}

let carrito_storage = [];

/*****************/

if (localStorage.getItem('ListaProductos')) {

    let Cart = JSON.parse(localStorage.getItem('ListaProductos'));
    
    for (let i = 0; i < Cart.length; i++) {
      carrito_storage.push(Cart[i]);
    }
  }

/*****************/

function agregar_al_carrito(e){

    console.log("Se agregó al carrito: ", e.target);

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    let nombreProducto = padre.querySelector("h5").textContent;
    let precioProducto = padre.querySelector("span").textContent;
    let imgProducto = padre.querySelector("img").src;

    let producto = {
        nombre: nombreProducto,
        precio: precioProducto,
        img: imgProducto,
        cantidad:1
    }

    // Local Storage
    carrito_storage.push(producto);

    localStorage.setItem("ListaProductos", JSON.stringify(carrito_storage));

    let traer_producto = JSON.parse(localStorage.getItem("ListaProductos"));
    console.log(traer_producto);

    //Carrito Visible
    let contenedorItems = document.getElementById("items");

    carrito_storage.forEach(function(producto){
        contenedorItems.innerHTML +=
                             `
                             <span class="carrito-item-titulo"> ${producto.nombre} </span>
                             <div class="selector-cantidad"> 
                                 <i class="fa-solid fa-minus restar-cantidad"></i>
                                 <input type="text" value="${producto.cantidad}" class="carrito-item-cantidad" disabled>
                                 <i class="fa-solid fa-plus sumar-cantidad"></i> 
                                 <span class="btn-eliminar">
                                     <i class="fa-solid fa-trash"></i>
                                 </span>
                             </div>
                             <span class="carrito-item-precio"> ${producto.precio} </span>
                            `;
    }); 
}

let btn_carrito = document.querySelectorAll(".btnAuris");

for ( let boton of btn_carrito){

    boton.addEventListener("click", agregar_al_carrito);
}



