const Comment = require("../models/comment");

exports.findAll = function () {
	return Comment.findAll();
};

exports.findById = function (id) {
	return Comment.findByPk(id);
};

exports.insert = function (data) {
	return Comment.create(data);
};


exports.deleteById = async function (id) {
	const comment = await Comment.findByPk(id);
	await comment.destroy();
};

exports.update = async function (id, data) {
	await Comment.update(data, {
		where: {
			id,
		},
	});
};