const Expense = require("../models/expense");

exports.findAllbyUser = function (userId) {
	return Expense.findAll({
		where: {
			userId,
		},
	});
};

exports.findById = function (id) {
	return Expense.findByPk(id);
};

exports.insert = function (data) {
	return Expense.create(data);
};

exports.update = async function (id, data) {
	await Expense.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const expense = await Expense.findByPk(id);
	await expense.destroy();
};