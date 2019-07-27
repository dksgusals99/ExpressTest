const express = require('express');
const router = express.Router();
const settings = require('../setting.json')
const wikiName = settings.name;
const mainPage = settings.main_page;

router.get('/', (req, res, next) => {
    res.redirect(`/${mainPage}`);
});
router.get(encodeURI(`/${mainPage}`), (req, res, next) => {
    res.render('index')
});

module.exports = router;