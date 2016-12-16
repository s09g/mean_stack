var express = require('express');
var router = express.Router();

var ctrlLocation = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');


var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
