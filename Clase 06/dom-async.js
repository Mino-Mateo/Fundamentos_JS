/**************************************************************************************************/
//* DOM
/**************************************************************************************************/

//? Seleccionar elementos
//! Por ID
let porId = document.getElementById("Id");

//! Por Clase
let porClase = document.getElementsByClassName("Clase");

//! Por etiqueta
var porSelector = document.querySelector(".Clase");
var porAll = document.querySelectorAll(".Clase");

//! Por CSS
var porSelector = document.querySelector(".Clase");
var porAll = document.querySelectorAll(".Clase");

//? Manipulacion de contenido
//! Obtener o colocar contenido HTML
let contenido = porId.innerHTML;
porId.innerHTML = "Buenos dias :)";

//! Obtener o colocar texto
let texto = porId.innerText;
porId.innerText = "Este texto sera colcocado en el html";

//? Manipulación de atributos
//! Obtener o colocar atributos
let valorAtributo = porId.getAttribute("color");
porId.setAttribute("color", "nuevo color");

//? Manipulación de estilos
//! Obtener o colocar estilos
let estilo = porId.style;
porId.style.backgroundColor = "red";

//? Manipulación de clases
//! Obtener o colocar clases
porId.classList.add("nuevaClase");
porId.classList.remove("viejaClase");
let tieneClase = porId.classList.contains("clases");

//? Creacion de elementos
//! Crear elemento
let nuevoElemento = document.createElement("div");

//! Añadir elemento
document.body.appendChild(nuevoElemento);

//! Eliminar elemento
porId.parentNode.removeChild(porId);

/**************************************************************************************************/
//* ASYNC
/**************************************************************************************************/
//? Promesas
//! Crear una promesa
const promesa = new Promise((resolve, reject) => {
	setTimeout(() => {
		const exito = true; // o false para simular un fallo
		if (exito) {
			resolve("Bien :)");
		} else {
			reject("Mal no salio la peticion :(");
		}
	}, 2000);
});

//! Utilizar la promesa
promesa
	.then((resultado) => {
		console.log(resultado);
	})
	.catch((error) => {
		console.error(error);
	});

//? Async
//! Definir una función asíncrona
async function miFuncionAsincrona() {
	try {
		const resultado = await new Promise((resolve) => setTimeout(() => resolve("Bien"), 2000));

		console.log(resultado);
	} catch (error) {
		console.error("¡La operación falló!", error);
	}
}

//! Llamar a la función asíncrona
miFuncionAsincrona();
