const express = require('express');
const router = express.Router();

const { welcome } = require('../controllers/users/users_controller');
const enforceGuest = require('../middlewares/enforce-guest');

router.get('/welcome', enforceGuest, welcome);

module.exports = router;