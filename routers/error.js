var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    
    console.log(req);
    res.status(404).send('Sorry cant find that!');
});

router.use(function (err, req, res, next) {
    console.log(err);
});

module.exports = router;
