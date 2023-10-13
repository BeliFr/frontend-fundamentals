const {
	findAllbyUser,
	findById,
	insert,
	deleteById,
	update,
} = require("../services/expense");

exports.getExpensesByUser = async function (request, response) {
	const { id } = request.user;
	//Se buscan todos los gastos del usuario, por ello se envíe el id del usuario
	const expenses = await findAllbyUser(id);
	response.status(200).json(expenses);
};


exports.getExpense = async function (request, response) {
	const { id } = request.params;
	const expense = await findById(id);
	response.status(200).json(expense);
};

exports.createExpense = async function (request, response) {
	const { date, description, amount, payment_method, categoryId } = request.body;
	const expense = await insert({ date, description, amount, payment_method, categoryId, userId: request.user.id });
	response.status(201).json(expense);
};

exports.updateExpense = async function (request, response) {
	const { date, description, amount, payment_method, categoryId } = request.body;
	const { id } = request.params;

	await update(id, { date, description, amount, payment_method, categoryId });
	response.status(204).end();
};

exports.deleteExpense = async function (request, response) {
	const { id } = request.params;
	await deleteById(id);
	response.status(204).end();
};
