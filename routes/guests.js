const express = require('express');
const router = express.Router();

router.get('/welcome', (req, res) => {
    res.send("Who the fuck are you?")
});

module.exports = router;