const express = require('express');
const userRoute = express.Router();
const User = require('../schemas/user');

userRoute.get('/', (req, res) => {
    res.json({
        message: "Welcome to our API"
    })
})


module.exports = userRoute;