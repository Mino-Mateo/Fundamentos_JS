//* Creacion de un web server en Express

//? Invocar la libreria de express
const express = require("express"); //CommonJS

//? Crear una instancia
const app = express();
const port = 3000;
app.use(express.json());

//? Peticiones
//! Ruta publica
app.get("/", (req, res) => {
	res.send("ENTRANDO AL PAPU LOBBY :V");
});

app.get("/dashboard", (req, res) => {
	res.send("BIENVENIDO A LA GRASA - TU APORTE ES MUY UTIL PARA NOSOTROS");
});

//! Crear un middleware
app.use((req, res, next) => {
	const { email, password } = req.body;

	if (email === "patitojuan@gmail.com" && password == "12345") {
		next();
	} else {
		res.send("Usuario no registrado");
	}
});

//! Ruta privada
app.get("/pedido", (req, res) => {
	res.send("Bienvenido -- Listo para tomar su orden");
});

//? Salida
app.listen(3000);
console.log("Server ejecutandose en el puerto 3000");
