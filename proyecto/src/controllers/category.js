const {
	findAll,
	findById,
	insert,
	deleteById,
	update,
} = require("../services/category");

exports.getCategories = async function (request, response) {
	const categories = await findAll();
	response.status(200).json(categories);
};

exports.getCategory = async function (request, response) {
	const { id } = request.params;
	const category = await findById(id);
	response.status(200).json(category);
};

exports.createCategory = async function (request, response) {
	const { name } = request.body;
	const post = await insert({  name, userId: request.user.id });
	response.status(201).json(post);
};

exports.updateCategory = async function (request, response) {
	const { name } = request.body;
	const { id } = request.params;

	await update(id, { name });
	response.status(204).end();
};

exports.deleteCategory = async function (request, response) {
	const { id } = request.params;
	await deleteById(id);
	response.status(204).end();
};