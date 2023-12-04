//* Creacion de un web server en Express

//? Invocar la libreria de express
const express = require("express"); //CommonJS
const { engine } = require("express-handlebars");

//? Crear una instancia
const app = express();

// Utilizar un motor de plantillas
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// Ubicacion del directorio views
app.set("views", "./views");

app.get("/dashboard", (req, res) => {
	res.render("home");
});

app.get("/contactos", (req, res) => {
	res.render("contactos");
});

//? Salida
app.listen(3000);
console.log("Server ejecutandose en el puerto 3000");
