const Joi = require("joi");

exports.createCategorySchema = Joi.object({
	name: Joi.string().min(5).max(100).required(),
});

exports.updateCategorySchema = Joi.object({
	name: Joi.string().min(5).max(100).optional(),
}).min(1);

exports.paramsSchema = Joi.object({
	id: Joi.number().required(),
});