const { connect, sync } = require("./models/sequelize");
const User = require("./models/user");
const Expense = require("./models/expense");
const Category = require("./models/category");

// "Un usuario crea muchos gastos"
User.hasMany(Expense);
Expense.belongsTo(User);

// "Una categoría tiene muchos comentarios"
Category.hasMany(Expense);
Expense.belongsTo(Category);

// "Un usuario crea muchas categorías"
User.hasMany(Category);
Category.belongsTo(User);

exports.initDatabase = async function () {
	await connect();
	await sync();
};