//Establecer conexión con MongoDB Atlas
const mongoose = require("mongoose");

//Conectar a MondgoDB
//mongodb://usuario:contraseña@host/db?...

//Usando eventos
mongoose
    .connect(
        "mongodb+srv://jujeroabutl:Sd2rUyhxo97x2tEB@cluster0.zqyrzdx.mongodb.net/test?retryWrites=true&w=majority"
    );
    mongoose.connection.on('connected',()=> 
        console.log('> Conectado a MongoDB :D')
    );

    mongoose.connection.on('error',(error)=> 
        console.error("Error",error)
    );

//usando promises
/* mongoose
	.connect(
		"mongodb+srv://root:root@bedu.5tygoiv.mongodb.net/test?retryWrites=true&w=majority"
	)
	.then(() => console.log("> Conectado a MongoDB"))
	.catch((e) => console.error("> Error", e)); */

//Generar un esquema de la base de datos, es decir la estructura de que va a tener la información
//Crear el schema
// Un schema es como una tabla de SQL
const UserSchema = new mongoose.Schema({
	// SQL: username VARCHAR(50) NOT NULL UNIQUE
	username: { type: String, required: true, unique: true, maxlength: 50 },
	// SQL: password VARCHAR(50) NOT NULL
	password: { type: String, required: true, maxlength: 50 },
	// SQL: email VARCHAR(100) NOT NULL UNIQUE
	email: { type: String, required: true, unique: true, maxlength: 100 },
	// SQL: age INTEGER CHECK(age >= 18)
	age: { type: Number, min: 18 },
});


//Crear un modelo a partir del schema
//Ya se puede interactuar a la BD
//Se crea un modelo a partir del schema
const UserModel = mongoose.model('users',UserSchema);

//Creación de la API
const express = require('express');
const app = express();
app.use(express.json());

app.get("/createUser", async function (request, response) {
	const data = request.body;

	// ¿Cómo insertamos un documento en Mongoose?
	// Creamos una nueva instancia del modelo
	const instance = new UserModel(data);

	try {
		// Ejecutamos el método "save" que regresa una promesa
		// con el documento insertado
		const document = await instance.save();
		response.json(document);
	} catch (e) {
		console.error(e);
		response.json({ error: true });
	}
});

app.get("/getUsers", async function (request, response) {
	const documents = await UserModel.find().exec();
	response.json(documents);
});

app.get("/getUser/:id", async function (request, response) {
	const document = await UserModel.findById(request.params.id).exec();
	response.json(document);
});

app.listen(8080,()=>console.log("Escuchando puerto 8080"));


