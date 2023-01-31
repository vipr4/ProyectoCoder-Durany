
//Ingreso a nuestra página web

/*
let nombre_usuario = prompt( "Ingrese su nombre: ");
let ubicacion = prompt( "De que provincia eres?" );
let edad_usuario = prompt( "Ingresa tu edad: ");

// El usuario no podrá ingresar a la página si no es mayor a 12 años

if( edad_usuario >= 12 ){

    console.log( nombre_usuario + " ha ingresado a nuestra página.." );
    alert( "Bienvenido a Diamond-s! Aquí encontraras los dispositivos electrónicos que tanto buscabas a un increíble precio." );
}

else if( edad_usuario < 12){  

    alert( "Lo sentimos, para ingresar debes ser mayor a 12 años." );
    let edad_usuario = prompt( "Ingresa tu edad: ");

    if( edad_usuario >= 12){

        alert( "Bienvenido a Diamond-s! Aquí encontraras los dispositivos electrónicos que tanto buscabas a un increíble precio." );
    }
    console.log( nombre_usuario + " ha ingresado a nuestra página.." );

}

let dispositivos = prompt( "Qué tipo de dispositivos buscabas? 1. Auriculares, 2. Computadoras, 3. Mouse y Teclados, 4. Consolas. ");

if( dispositivos == 1 ){

    alert( "Genial! Aquí encontrarás todo tipo de auriculares, tanto Gamers como normales. Bienvenido a Diamond-s, " + nombre_usuario );
}

else if( dispositivos == 2 ){

    alert( "Genial! Aquí encontrarás todo tipo de computadoras, tanto Gamers como Laptops. Bienvenido a Diamond-s, " + nombre_usuario );
}

else if( dispositivos == 3 ){

    alert( "Genial! Aquí encontrarás todo tipo de mouse y teclados, tanto profesionales como no tanto. Bienvenido a Diamond-s, " + nombre_usuario );
}

else if( dispositivos == 4 ){

    alert("Genial! Aquí encontrarás todo tipo de consolas, desde Play Station 2 hasta la más novedosa Play Station 5. Bienvenido a Diamond-s, " + nombre_usuario );
}

let lista_usuario = [ nombre_usuario, ubicacion, edad_usuario ];

for( let elemento of lista_usuario ){

    console.log( "----Datos de Usuario----" );
    console.log( "Nombre: " + nombre_usuario );
    console.log( "Ubicación: " + ubicacion);
    console.log( "Edad: " + edad_usuario);
}
*/

let img = document.getElementsByClassName("presentacion-2");

img.addEventListener("mouseover" , function(){

    img.src() = "imagenes-2/presentacion-2.png";

})
