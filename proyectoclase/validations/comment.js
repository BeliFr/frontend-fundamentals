const Joi = require("joi");

exports.createCommentSchema = Joi.object({
	content: Joi.string().min(5).max(2500).required(),
});

exports.updateCommentSchema = Joi.object({
	content: Joi.string().min(5).max(2500).optional(),
}).min(1);

exports.paramsSchema = Joi.object({
	id: Joi.number().required(),
});
