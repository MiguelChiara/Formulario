var resultados;

$("#enviar").addEventListener("click",function(){
    var intput = document.getElementsByTagName("input");
    console.log(obtenerdatos()[0]);
    console.log(obtenerdatos()[1]);
    console.log(obtenerdatos()[2]);
    console.log(obtenerdatos()[3]);
    console.log(obtenerdatos()[4]);
    //location.href="pagina2.html";

});

function $(selector){
    return document.querySelector(selector);
}

function obtenerdatos(){
    var datos = [];
    datos.push($("#nombre").value);
    datos.push($("#apellidos").value);
    datos.push($("#mail").value);
    datos.push($("#nombreU").value);
    datos.push($("#telefono").value);
    return datos;
}