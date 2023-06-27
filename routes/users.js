const express = require('express');
const router = express.Router();

const { validator } = require('../controllers/users/users_validator');
const joi = require('../middlewares/joi');

const dashboard = (req, res, next) => {
    res.send("Ahhh! it's you! welcome back!")
}

const logout = (req, res, next) => {
    res.send("piss off then! never liked you anyway")
}

const addSymbol = (req, res, next) => {
    res.send("add symbol")
}

router.get('/dashboard', dashboard);
router.get('/logout', logout);
router.post('/symbol', joi(validator), addSymbol);

module.exports = router;