var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    var path = req.headers.host + req.url
    res.status(404).send(`Sorry cant find ${path}!`);
    //next();
});

router.use(function (err, req, res, next) {
    console.log(err);
    //next();
});

module.exports = router;
