var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Router Test');
    next();
});

module.exports = router;