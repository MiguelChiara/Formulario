//Muestra el formulario que fue ocultado con css por eso usamos la clase jquery-3.1.1.min.js
$('.toggle').click(extender);

function extender() {
    $('.contformulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
};




//Manda los datos al log (Simula subir a una base de datos)
document.querySelector("#registrarse").addEventListener("click", function () {
    var intput = document.getElementsByTagName("input");
    var correcto = true;
    if (obtenerdatos()[0] == "") {
        correcto = false;
    }
    if (obtenerdatos()[1] == "") {
        correcto = false;
    }
    if (obtenerdatos()[2] == "") {
        correcto = false;
    }
    if (obtenerdatos()[3] == "") {
        correcto = false;
    }
    if (obtenerdatos()[4] == "") {
        correcto = false;
    }
    if (obtenerdatos()[4] == "") {
        correcto = false;
    }
    if (obtenerdatos()[5] == "") {
        correcto = false;
    }
    if (correcto) {
        console.log(obtenerdatos()[0]);
        console.log(obtenerdatos()[1]);
        console.log(obtenerdatos()[2]);
        console.log(obtenerdatos()[3]);
        console.log(obtenerdatos()[4]);
        console.log(obtenerdatos()[5]);
        extender();
        alert("El registro se ha efectuado con exito");
    } else {
        alert("No se ha podido completar el registro");
    }
});

//Comprueba si el usuario y la contraseña son correctos comprobando en el vector
document.querySelector("#inicio").addEventListener("click", function () {
    var done = 0;
    var usuario = document.login.usuarioLog.value;
    var password = document.login.contraseniaLog.value;
    if (usuario != "" || password != "") {
        if (usuario == obtenerdatos()[0] && password == obtenerdatos()[1]) {
            //Se abre en una ventana nueva para que se vea la funciona lidad del formulario
            window.open("Tareas.html", "nombre_de_la_ventana", "width=1000,height=1500");
        } else {
            alert("Usuario o contraseña incorrecto");
        }
    } else {
        alert("Introduce datos");
    }


});

//carga los datos de registro en un vector
function obtenerdatos() {
    var datos = [];
    datos.push(document.reg.usuario.value);
    datos.push(document.reg.contrasenia.value);
    datos.push(document.reg.nombre.value);
    datos.push(document.reg.mail.value);
    datos.push(document.reg.apellidos.value);
    datos.push(document.reg.telefono.value);
    return datos;
}

