const Joi = require("joi");

exports.createExpenseSchema = Joi.object({
	date: Joi.string().min(10).max(10).required(),
	description: Joi.string().min(5).max(2500).required(),
    amount: Joi.number().min(0).required(),
    payment_method: Joi.string().min(5).max(2500).required(),
    categoryId: Joi.number().required(),
});

exports.updateExpenseSchema = Joi.object({
	date: Joi.string().min(10).max(10).optional(),
	description: Joi.string().min(5).max(2500).optional(),
    amount: Joi.number().min(0).optional(),
    payment_method: Joi.string().min(5).max(2500).optional(),
    categoryId: Joi.number().optional(),
}).min(1);

exports.paramsSchema = Joi.object({
	id: Joi.number().required(),
});
12/12/2023