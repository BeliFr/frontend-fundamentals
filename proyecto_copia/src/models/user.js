const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("users", {
	username: {
		type: DataTypes.STRING(100),
		allowNull: false,
		unique: true,
	},
	firstname: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
    lastname: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING(100),
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.STRING(50),
		allowNull: false,
		validate: {
			len: [8, 50],
		},
	},
});
