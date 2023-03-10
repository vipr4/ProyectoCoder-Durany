

// Aqui se colocara nuestro inicio de sesion

class Usuarios{

    constructor(nombreUsuario, passwordUsuario, mailUsuario, provinciaUsuario){
        this.nombreUsuario = nombre;
        this.passwordUsuario = password;
        this.mailUsuario = mail;
        this.provinciaUsuario = provincia;

    }
}

let arreglo_usuarios = [];

/********************************/


/*************************/

let formulario = document.getElementById("form");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();
    arreglo_usuarios;
})

/********************************/

function datos_de_usuario() {

    let nombre = document.getElementById("nombre");
    let password = document.getElementById("pass");
    let mail = document.getElementById("mail");
    let provincia = document.getElementById("provincia");

    let usuario = {nombre: nombre.value , password: password.value , mail: mail.value , provincia: provincia.value};

    arreglo_usuarios.push(usuario);

    //LocalStorage
    let arreglo_json = JSON.stringify(arreglo_usuarios);
    localStorage.setItem( "arreglo_clientes", arreglo_json );

    let traer_usuarios = localStorage.getItem("arreglo_clientes");
    console.log(traer_usuarios);

    formulario.reset();
}

let btn_registrar = document.getElementById("btn_registrarse");
btn_registrar.addEventListener("click", datos_de_usuario);

