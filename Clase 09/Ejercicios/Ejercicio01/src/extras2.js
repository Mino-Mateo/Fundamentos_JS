const { engine } = require("express-handlebars");

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
