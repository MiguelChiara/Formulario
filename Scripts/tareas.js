(function(){

    alert("Bienvenido a tu lista de tareas online");

    function $(selector) {
        return document.querySelector(selector);
    }

	var lista = $("#lista"),
		tareaInput = $("#tareaInput"),
		btnNuevaTarea = $("#btn-agregar");

	var agregarTarea = function(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}

		enlace.appendChild(contenido);
		nuevaTarea.appendChild(enlace);
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};

	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	btnNuevaTarea.addEventListener("click", agregarTarea);

	tareaInput.addEventListener("click", comprobarInput);

	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}
}());