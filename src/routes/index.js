const express = require('express');
const router = express.Router();
const userRouter= require('./User_router')
// colocar las rutas aquí
router.use('/users', userRouter);

module.exports = router;