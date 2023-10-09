const express = require("express");
const router = express.Router();
const {
	getComments,
	createComment,
	getComment,
	deleteComment,
	updateComment,
} = require("../controllers/comment");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {
	createCommentSchema,
	updateCommentSchema,
	paramsSchema,
} = require("../validations/comment");

router.get("posts/id:/comments", getComments);
router.get("/posts/id/comments/:id", validator.params(paramsSchema), getComment);


module.exports = router;
