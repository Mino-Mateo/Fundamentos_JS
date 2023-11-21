/* FORMA DE EJECUTAR CODIGO ASINCRONO

//! Callbacks
//! Promesas
//! Async - Await

const conexionBDD = (datosConexion) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			datosConexion ? resolve("Conexion OK") : reject("Conexion error");
		});
	});
};

//? Promesa
conexionBDD(true)
	.then((respuesta) => {
		console.log(respuesta);
	})
	.catch((err) => {
        console.log(err)
    });


const obtenerDatos = fetch("https://jsonplaceholder.typicode.com/users");
obtenerDatos
  .then(peticion => peticion.json())
  .then(respuesta => console.log(respuesta))
  .catch(err => console.log(err));

console.log(obtenerDatos)

*/

// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((p) => p.json())
// 	.then((d) => console.log(d))
// 	.then((e) => console.log(e));

const conectarAPI = async () => {
	try {
		const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
		const data = await respuesta.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

conectarAPI();
