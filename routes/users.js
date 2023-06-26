const express = require('express');
const router = express.Router();

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
router.get('/addSymbol', addSymbol);

module.exports = router;