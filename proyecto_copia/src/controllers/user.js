const { insert } = require("../services/user");

/*
exports.createUser = function (request, response) {
	const { email, username, password } = request.body;
	userService
		.createUser({ email, username, password })
		.then((user) => response.json(user));
};
*/

exports.createUser = async function (request, response) {
	const { username, firstname, lastname, email, password } = request.body;
	const user = await insert({ username, firstname, lastname, email, password });
	response.status(201).json(user);
};