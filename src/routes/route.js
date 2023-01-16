const express = require('express');
const router = express.Router(); 

//url's
router.post("/url/shorten")
router.get("/:urlCode")
router.all('/*', function (req, res) {
    res.status(404).send({status: false, msg: 'page not found'});
});
module.exports= router