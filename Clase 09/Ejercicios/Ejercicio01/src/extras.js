// //? Mandar informacion en formato JSON
// app.use(express.json());

// app.get("/hamburguesa/simple", (req, res) => {
// 	res.send("Hamburguesa - Simple");
// });

// app.get("/hamburguesa/doble", (req, res) => {
// 	res.sendFile("./doble.jpg", {
// 		root: __dirname,
// 	});
// });

// app.get("/hamburguesa/mixta", (req, res) => {
// 	res.status(200).json({
// 		tipo: "Mixta",
// 		Extra: "No",
// 	});
// });

// app.get("/hamburguesa/mixta", (req, res) => {
// 	res.status(200).json({
// 		tipo: "Mixta",
// 		Extra: "No",
// 	});
// });

// app.post("/register", (req, res) => {
// 	const { pedido, solicitado } = req.body;

// 	res.send(`El pedido de ${pedido} es realizado por ${solicitado}`);
// });

// app.get("/pedido/:abc", (req, res) => {
// 	res.send(`El tipo de hamburgesa es: ${req.params.abc}`);
// });

// app.get("/search", (res, req) => {
// 	if (req.query.tipo === "sencilla") {
// 		res.send("Hamburguesa sencilla");
// 	} else {
// 		res.send("Otro tipo de hamburguesa");
// 	}
// });

//? Crear rutas
app.get("/", (req, res) => {
	res.send("Bienvenidos");
});

app.get("/dashboard", (req, res) => {
	res.send("Dashboard principal");
});

//? Rutas no registradas
app.use((req, res) => {
	res.send("404 - NOT FOUND");
});
