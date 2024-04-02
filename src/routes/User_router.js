const express = require('express');
const { getAll, create, getOne, update, destroy } = require('../controllers/User_controller');

const userRouter = express.Router();

userRouter.route("/")
		.get(getAll)
        .post(create)

userRouter.route("/:id")
        .get(getOne)
        .put(update)
        .delete(destroy)


module.exports = userRouter;