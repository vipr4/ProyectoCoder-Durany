
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

    let nombre_producto = padre.querySelector("h5").textContent;
    let precio_producto = padre.querySelector("span").textContent;
    let img_producto = padre.querySelector("img").src;

    let producto = {
        nombre: nombre_producto,
        precio: precio_producto,
        img: img_producto,
        cantidad:1
    };

    // Local Storage
    carrito_storage.push(producto);

    localStorage.setItem("ListaProductos", JSON.stringify(carrito_storage));

    let traer_producto = JSON.parse(localStorage.getItem("ListaProductos"));
    console.log(traer_producto);

    //Carrito Visible
    let contenedorItems = document.getElementById("items");
    contenedorItems.innerHTML = `
                                    <span class="carrito-item-titulo"> ${producto.nombre} </span>
                                    <div class="selector-cantidad"> 
                                    <i class="fa-solid fa-minus restar-cantidad"></i>
                                    <input type="text" value="${producto.cantidad}" class="carrito-item-cantidad" disabled>
                                    <i class="fa-solid fa-plus sumar-cantidad"></i> 
                                    </div>
                                    <span class="carrito-item-precio"> ${producto.precio} </span>
                                    <div>
                                        <span class="btn-eliminar">
                                            <i class="fa-solid fa-trash"></i>
                                        </span>
                                    </div>
                                    `;  

    traer_producto.forEach(function(){
        contenedorItems.innerHTML =
                                    `
                                    <span class="carrito-item-titulo"> ${producto.nombre} </span>
                                    <div class="selector-cantidad"> 
                                    <i class="fa-solid fa-minus restar-cantidad"></i>
                                    <input type="text" value="${producto.cantidad}" class="carrito-item-cantidad" disabled>
                                    <i class="fa-solid fa-plus sumar-cantidad"></i> 
                                    </div>
                                    <span class="carrito-item-precio"> ${producto.precio} </span>
                                    <div>
                                        <span class="btn-eliminar">
                                            <i class="fa-solid fa-trash"></i>
                                        </span>
                                    </div>
                                    `;  
    })
}

let btn_carrito = document.querySelectorAll(".btnAuris");

for ( let boton of btn_carrito){

    boton.addEventListener("click", agregar_al_carrito);
}


