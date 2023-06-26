const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Garfield? is that you?")
});

router.get('/callback', (req, res) => {
    res.send('I\'m sorry, Jon');
});

module.exports = router;