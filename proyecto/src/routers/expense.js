const express = require("express");
const router = express.Router();
const {
	getExpensesByUser,
	createExpense,
	getExpense,
	deleteExpense,
	updateExpense,
} = require("../controllers/expense");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {
	createExpenseSchema,
	updateExpenseSchema,
	paramsSchema,
} = require("../validations/expense");

router.get("/expenses",jwtValidator, getExpensesByUser);
router.get("/expenses/:id", validator.params(paramsSchema), getExpense);
router.post(
	"/expenses",
	jwtValidator,
	validator.body(createExpenseSchema),
	createExpense
);

router.put(
	"/expenses/:id",
	jwtValidator,
	validator.params(paramsSchema),
	validator.body(updateExpenseSchema),
	updateExpense
);
router.delete(
	"/expenses/:id",
	jwtValidator,
	validator.params(paramsSchema),
	deleteExpense
);

module.exports = router;