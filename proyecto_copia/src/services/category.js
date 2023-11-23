const Category = require("../models/category");

exports.findAll = function (userId) {
	return Category.findAll({
		where: {
			userId,
		},
	});
};

exports.findById = function (id) {
	return Category.findByPk(id);
};

exports.insert = function (data) {
	return Category.create(data);
};

exports.update = async function (id, data) {
	await Category.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const category = await Category.findByPk(id);
	await category.destroy();
};