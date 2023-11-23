require("dotenv").config();

const { initDatabase } = require("./db");
initDatabase();

const express = require("express");
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

const userRouter = require("./routers/user");
const authRouter = require("./routers/auth");
const expenseRouter = require("./routers/expense");
const categoryRouter = require("./routers/category");

const validationError = require("./middlewares/validation-error");
const unknownError = require("./middlewares/unknown-error");

// Rutas

app.use(userRouter);
app.use(authRouter);
app.use(categoryRouter);
app.use(expenseRouter);

// Manejo de errores
app.use(validationError);
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
	console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});