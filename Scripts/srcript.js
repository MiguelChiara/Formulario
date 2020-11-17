
$('.toggle').click(function () {
    $('.contformulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});

document.querySelector("#registrarse").addEventListener("click", function () {
    var intput = document.getElementsByTagName("input");
    console.log(obtenerdatos()[0]);
    console.log(obtenerdatos()[1]);
    console.log(obtenerdatos()[2]);
    console.log(obtenerdatos()[3]);
    console.log(obtenerdatos()[4]);
    console.log(obtenerdatos()[5]);
});


document.querySelector("#inicio").addEventListener("click", function () {
    var done = 0;
    var usuario = document.login.usuarioLog.value;
    var password = document.login.contraseniaLog.value;
    if (usuario != "" || password != "") {
        if (usuario == obtenerdatos()[0] && password == obtenerdatos()[1]) {
            window.open("Tareas.html", "nombre_de_la_ventana", "width=1000,height=1500");
        }
    }


});

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

