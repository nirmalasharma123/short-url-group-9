const express = require('express');
const router = express.Router(); 
const controller=require("../controller/urlController")

//url's
router.post("/url/shorten",controller.makeShortUrl)
router.get("/:urlCode",controller.reDirect)
router.all('/*', function (req, res) {
    res.status(404).send({status: false, msg: 'page not found'});
});
module.exports= router