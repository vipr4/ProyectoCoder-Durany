

// Aqui se colocara nuestro inicio de sesion

class Usuarios{

    constructor(nombreUsuario, passwordUsuario, mailUsuario, provinciaUsuario){
        this.nombre = nombreUsuario;
        this.password = passwordUsuario;
        this.mail = mailUsuario;
        this.provincia = provinciaUsuario;

    }
}

let arreglo_usuarios = [];

/*************************/

if (localStorage.getItem('arreglo_usuarios')) {

    let Usuarios = JSON.parse(localStorage.getItem('arreglo_usuarios'));
    
    for (let i = 0; i < Usuarios.length; i++) {
      arreglo_usuarios.push(Usuarios[i]);
    }
  }

/*************************/

let formulario = document.getElementById("form");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();
    arreglo_usuarios;
})

/********************************/

function datos_de_usuario() {

    let nombre = document.getElementById("nombre").value;
    let password = document.getElementById("pass").value;
    let mail = document.getElementById("mail").value;
    let provincia = document.getElementById("provincia").value;

    let nuevo_usuario = new Usuarios( nombre, password, mail, provincia);

    arreglo_usuarios.push(nuevo_usuario);

    //LocalStorage
    localStorage.setItem("arreglo_usuarios", JSON.stringify(arreglo_usuarios));

    let traer_usuarios = localStorage.getItem("arreglo_usuarios");
    console.log(traer_usuarios);

    Toastify({
        text:"Te has registrado con éxito!",
        duration: 3000,
        destination:"",
        gravity:"bottom",
        position:"left",
        style:{
            fontSize:"20px",
            color:"white",
            background:"#EEA921",
            border_radius:"10px"
        }
    }).showToast();
    formulario.reset();
}

/********************/

function loggin_usuario(){
    
    let nombre = document.getElementById("nombre").value;
    let password = document.getElementById("pass").value;
    let mail = document.getElementById("mail").value;
    let provincia = document.getElementById("provincia").value;

    let traer_usuarios = localStorage.getItem("arreglo_usuarios");
    traer_usuarios = JSON.parse(traer_usuarios);
    console.log(traer_usuarios);

    for (let nuevo_usuario of traer_usuarios){

        if( nombre.value == nuevo_usuario.nombreUsuario && password.value == nuevo_usuario.passwordUsuario && mail.value == nuevo_usuario.mailUsuario && provincia.value == nuevo_usuario.provinciaUsuario){

            Toastify({
                text:"Has ingresado con éxito!",
                duration: 3000,
                destination:"",
                gravity:"bottom",
                position:"left",
                style:{
                    fontSize:"20px",
                    color:"white",
                    background:"black",
                    border_radius:"10px"
                }
            }).showToast();
        }
        else{
            Toastify({
                text:"El usuario no ha sido registrado. Porfavor intentelo de nuevo.",
                duration: 3000,
                destination:"",
                gravity:"bottom",
                position:"left",
                style:{
                    fontSize:"20px",
                    color:"white",
                    background:"black",
                    border_radius:"10px"
                }
            }).showToast();
        }
    }

    formulario.reset();
}

let btn_registrar = document.getElementById("btn_registrarse");
btn_registrar.addEventListener("click", datos_de_usuario);

let btn_ingresar = document.getElementById("btn_ingresar");
btn_ingresar.addEventListener("click", loggin_usuario);

