/****************************************************************************************************/
//* Local Storage

//? Sintaxis Local Storage
"use strict";

fetch("https://jsonplaceholder.typicode.com/users/1")
	.then((response) => response.json())
	.then((json) => {
		{
			let usuario = {
				name: json.name,
				username: json.username,
				email: json.email,
			};
			guardarLocalStorage(usuario);
		}
	});

//? Guardar Local Storage
const guardarLocalStorage = (data) => {
	localStorage.setItem("user", JSON.stringify(data));
};

//? Obtener Local Storage
("use strict");

const obtenerLocalStorage = () => {
	const respuesta = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "No hay data";
	console.log(respuesta);
};
obtenerLocalStorage();

//? Elimar Local Storage
("use strict");

const eliminarlocalStorage = () => {
	!localStorage.key("user") ? console.log("No hay clave") : localStorage.removeItem("user");
};

eliminarlocalStorage();
/****************************************************************************************************/
