

// Aqui se colocara nuestro inicio de sesion

let arreglo_usuarios = [];

let formulario = document.getElementById("form");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();
    arreglo_usuarios;
})

function datos_de_usuario() {

    let nombre_usuario = document.getElementById("nombre");
    let pass_usuario = document.getElementById("pass");
    let mail_usuario = document.getElementById("mail");
    let prov_usuario = document.getElementById("provincia");

    let usuario = {nombre: nombre_usuario.value , password: pass_usuario.value , mail: mail_usuario.value , provincia: prov_usuario.value};

    arreglo_usuarios.push(usuario);

    //LocalStorage
    let arreglo_json = JSON.stringify(arreglo_usuarios);
    localStorage.setItem( "arreglo_clientes", arreglo_json );

    for(let i = 0; i < arreglo_json.length; i++){

        arreglo_json.push(arreglo_json[i]);
    }
}

let btn_registrar = document.getElementById("btn_registrarse");
btn_registrar.addEventListener("click", datos_de_usuario);

