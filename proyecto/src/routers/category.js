const express = require("express");
const router = express.Router();
const {
	getCategories,
	createCategory,
	getCategory,
	deleteCategory,
	updateCategory,
} = require("../controllers/category");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {
	createCategorySchema,
	updateCategorySchema,
	paramsSchema,
} = require("../validations/category");

router.get("/categories", getCategories);
router.get("/categories/:id", validator.params(paramsSchema), getCategory);
router.post(
	"/categories",
	jwtValidator,
	validator.body(createCategorySchema),
	createCategory
);
router.put(
	"/categories/:id",
	jwtValidator,
	validator.params(paramsSchema),
	validator.body(updateCategorySchema),
	updateCategory
);
router.delete(
	"/categories/:id",
	jwtValidator,
	validator.params(paramsSchema),
	deleteCategory
);

module.exports = router;