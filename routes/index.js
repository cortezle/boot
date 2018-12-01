var express = require('express');
var router = express.Router();
var auth = require('../controllers/AuthController');
var passport = require("passport");


router.get('/',auth.home);
router.get('/register',auth.register);
router.post('/register',auth.doregister);
router.get('/login',auth.login);
router.post('/login',auth.dologin);
module.exports = router;
