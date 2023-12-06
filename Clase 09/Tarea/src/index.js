const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send(`
	<h1>Bienvenido a nuestra página :) - Grupo 1</h1>
	<p>Esperamos que esto sea util para ustedes</p>
	<p>y si faltara diseño pero sobra calidad ;)</p>
	`);
});

app.get("/integrantes", (req, res) => {
	res.json([
		{
			numero: "1",
			nombre: "Eduardo",
			apellido: "Almachi",
			alias: "El macho",
		},
		{
			numero: "2",
			nombre: "Bryan",
			apellido: "Delgado",
			alias: "C-E-R-E-B-R-O-N",
		},
		{
			numero: "3",
			nombre: "Brittany",
			apellido: "Espinel",
			alias: "La jefa",
		},
		{
			numero: "4",
			nombre: "Mateo",
			apellido: "Miño",
			alias: "Tu padre",
		},
		{
			numero: "5",
			nombre: "Melany",
			apellido: "Sangucho",
			alias: "La diva",
		},
		{
			numero: "6",
			nombre: "David",
			apellido: "Vallejo",
			alias: "El destructor",
		},
		{
			numero: "7",
			nombre: "Erick",
			apellido: "Villaroel",
			alias: "El bostereo",
		},
		{
			numero: "8",
			nombre: "Danny",
			apellido: "Yanacallo",
			alias: "El foraneo",
		},
	]);
});

app.get("/productos", (req, res) => {
	res.send(`
            <h1>Catálogo de productos</h1>
                <p>Bienvenidos</p>
                <ul>
                <li>Papas</li>
                <li>Helado</li>
                <li>Fritada</li>
                <li>Abrazos</li>
                </ul>
    `);
});
app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
