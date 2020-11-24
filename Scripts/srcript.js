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




//Compruba si todos los datos son correctos y oculta el formulario de creacion
document.querySelector("#registrarse").addEventListener("click", function () {
    var intput = document.getElementsByTagName("input");
    var correcto = true;
    var res="";
    if (obtenerdatos()[0] == "") {
        correcto = false;
        res=res+"Introduce el usuario\n";
    }
    if (obtenerdatos()[1] == "") {
        correcto = false;
        res=res+"Introduce una contrase\u00F1a\n";
    }
    if (obtenerdatos()[2] == "") {
        correcto = false;
        res=res+"Introduce el nombre\n";
    }
    if( !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(obtenerdatos()[3]))) {
        correcto = false;
        res=res+"El email tiene un formato incorrecto\n";
    }
    if (obtenerdatos()[3] == "") {
        correcto = false;
        res=res+"Introduce tu email\n";
    }
    if (obtenerdatos()[4] == "") {
        correcto = false;
        res=res+"Introduce tus apellidos\n";
    }
    if(!(/^\d{9}$/.test(obtenerdatos()[5]))) {
        res=res+"El numero de telefono no tiene un formato correcto\n";
    }
    if (obtenerdatos()[5] == "") {
        correcto = false;
        res=res+"Introduce tu telefono\n";
    }
    if (correcto) {
        extender();
        alert("El registro se ha efectuado con exito");
    } else {
        alert("No se ha podido completar el registro\n"+res);
    }
});

//Comprueba si el usuario y la contraseña son correctos comprobando en el vector
document.querySelector("#inicio").addEventListener("click", function () {
    var done = 0;
    var usuario = document.login.usuarioLog.value;
    var password = document.login.contraseniaLog.value;
    if (usuario != "" || password != "") {
        if (usuario == obtenerdatos()[0] && password == obtenerdatos()[1]) {
            //Se abre en una ventana nueva para que se vea la funcionalidad del formulario
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

