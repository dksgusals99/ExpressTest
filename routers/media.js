var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Router Test Media');
});

module.exports = router;