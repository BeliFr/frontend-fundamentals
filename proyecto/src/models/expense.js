const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("expenses", {
	date: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
    description: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
	amount: {
		type: DataTypes.FLOAT(),
		allowNull: false,
	},
	payment_method : {
		type: DataTypes.STRING(50),
		allowNull: false,
	},
});