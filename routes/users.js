const express = require('express');
const router = express.Router();

const { addSymbol } = require('../controllers/users/users_controller');
const { validator } = require('../controllers/users/users_validator');
const joi = require('../middlewares/joi');
const enforceAuth = require('../middlewares/enforce-auth');

const dashboard = (req, res, next) => {
    res.send("Ahhh! it's you! welcome back!")
}

const logout = (req, res, next) => {
    res.send("piss off then! never liked you anyway")
}

router.get('/dashboard', enforceAuth, dashboard);
router.get('/logout', enforceAuth, logout);
router.post('/symbol', joi(validator), addSymbol);

module.exports = router;