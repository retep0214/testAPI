var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* GET home page. */
router.post('/', function (req, res, next) {
    console.log("someone called POST Start");
    console.log(req.body);
    res.send({code: 200, data: {}});
    console.log("someone called POST Fin");
});

module.exports = router;
