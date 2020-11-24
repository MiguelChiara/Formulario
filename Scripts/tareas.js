
	//Lanza una alerta de bienvenida
	var stin = window.obtenerdatos;
	alert("Bienvenido a tu lista de tareas online "+stin);

	//Funcion selector para buscar en el html
    function $(selector) {
        return document.querySelector(selector);
    }

	//Busca las tag y las añade a las variables
	var lista = $("#lista");
	var tareaInput = $("#tareaInput");
	var btnNuevaTarea = $("#btn-agregar");

	//Agrega una tarea
	var agregarTarea = function(){
		var tarea = tareaInput.value;
		//crea una lista en el documento
		var nuevaTarea = document.createElement("li");
		var enlace = document.createElement("a");
		//Añade el texto del del recuadro (tareainput.value)
		var contenido = document.createTextNode(tarea);

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}

		//Añame al array
		enlace.appendChild(contenido);
		nuevaTarea.appendChild(enlace);
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";
		//Elimina el elemento del array selecionado
		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", eleminarTarea);
		}

	};

	//Elimina la tarea
	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	btnNuevaTarea.addEventListener("click", agregarTarea);